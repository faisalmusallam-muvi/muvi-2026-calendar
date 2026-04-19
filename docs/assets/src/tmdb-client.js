/* global React */
const { useState, useEffect, useRef, useMemo } = window.React;

// ---------- TMDB client ----------
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWUyZTJjZGJmNzI3YmI2ZjJkMGVhNTMxMWNmNzA2MyIsIm5iZiI6MTc3NjU4NTc4NC4xMDUsInN1YiI6IjY5ZTQ4YzM4NmFjOTI4NDhjZDdhMDgxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVMfFCwClkgrSvqv2Y_ppzwFy9Wu33XVhvlhgJddeTA';
const TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const TMDB_BG_BASE  = 'https://image.tmdb.org/t/p/w1280';

async function tmdbFetch(movie) {
  const cacheKey = `tmdb-v2-${movie.en}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try { return JSON.parse(cached); } catch {}
  }
  try {
    // Try direct movie lookup by ID first if known
    if (movie.tmdbId) {
      const r = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?language=en-US`, {
        headers: { Authorization: `Bearer ${TMDB_TOKEN}`, 'Content-Type': 'application/json;charset=utf-8' }
      });
      if (r.ok) {
        const d = await r.json();
        if (d.poster_path) {
          const out = { poster: `${TMDB_IMG_BASE}${d.poster_path}`, backdrop: d.backdrop_path ? `${TMDB_BG_BASE}${d.backdrop_path}` : null };
          localStorage.setItem(cacheKey, JSON.stringify(out));
          return out;
        }
      }
    }
    // Fall back to search
    const q = encodeURIComponent(movie.en);
    const r = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}&year=2026&include_adult=false`, {
      headers: { Authorization: `Bearer ${TMDB_TOKEN}`, 'Content-Type': 'application/json;charset=utf-8' }
    });
    if (!r.ok) return null;
    const d = await r.json();
    let hit = (d.results || []).find(x => x.poster_path);
    if (!hit) {
      // Retry without year constraint
      const r2 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false`, {
        headers: { Authorization: `Bearer ${TMDB_TOKEN}`, 'Content-Type': 'application/json;charset=utf-8' }
      });
      if (r2.ok) {
        const d2 = await r2.json();
        hit = (d2.results || []).find(x => x.poster_path);
      }
    }
    if (!hit) return null;
    const out = {
      poster: `${TMDB_IMG_BASE}${hit.poster_path}`,
      backdrop: hit.backdrop_path ? `${TMDB_BG_BASE}${hit.backdrop_path}` : null,
    };
    localStorage.setItem(cacheKey, JSON.stringify(out));
    return out;
  } catch {
    return null;
  }
}

// ---------- Trailer fetch ----------
async function fetchTrailerKey(movie) {
  if (!movie.tmdbId) return null;
  const cacheKey = `tmdb-trailer-${movie.tmdbId}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached !== null) return cached || null;
  try {
    const r = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/videos?language=en-US`, {
      headers: { Authorization: `Bearer ${TMDB_TOKEN}` }
    });
    if (!r.ok) { localStorage.setItem(cacheKey, ''); return null; }
    const d = await r.json();
    const results = d.results || [];
    const trailer = results.find(v => v.site === 'YouTube' && v.type === 'Trailer' && v.official)
      || results.find(v => v.site === 'YouTube' && v.type === 'Trailer')
      || results.find(v => v.site === 'YouTube');
    const key = trailer?.key || '';
    localStorage.setItem(cacheKey, key);
    return key || null;
  } catch { return null; }
}

// ---------- Trailer modal ----------
function TrailerModal({ movie, onClose }) {
  const [ytKey, setYtKey] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!movie) return;
    setYtKey(null); setStatus('loading');
    fetchTrailerKey(movie).then(key => {
      if (key) { setYtKey(key); setStatus('ready'); }
      else setStatus('not-found');
    });
  }, [movie && movie.tmdbId]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!movie) return null;
  return (
    <div className="trailer-overlay" onClick={onClose}>
      <div className="trailer-box" onClick={e => e.stopPropagation()}>
        <button className="trailer-close" onClick={onClose}>×</button>
        {status === 'loading' && <div className="trailer-status">جاري التحميل...</div>}
        {status === 'not-found' && <div className="trailer-status">الإعلان غير متاح حالياً</div>}
        {status === 'ready' && ytKey && (
          <iframe
            src={`https://www.youtube.com/embed/${ytKey}?autoplay=1&rel=0`}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

// ---------- Poster helper ----------
function MoviePoster({ movie, className = '' }) {
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movie.noPoster) { setError(true); setLoading(false); return; }
    let cancelled = false;
    (async () => {
      const result = await tmdbFetch(movie);
      if (cancelled) return;
      if (result?.poster) setSrc(result.poster);
      else setError(true);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [movie.en]);

  const g = window.MUVI_GENRES[movie.genre];

  if (!loading && (!src || error)) {
    return (
      <div className={`poster-fallback ${className}`} style={{ '--accent': g.color }}>
        <div className="poster-fallback-inner">
          <div className="poster-fallback-genre">{g.ar.toUpperCase()}</div>
          <div className="poster-fallback-title">{movie.ar}</div>
          <div className="poster-fallback-date ltr">{String(new Date(movie.date).getDate()).padStart(2, '0')} · 2026</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`poster-wrap ${className}`}>
      {(loading || !src) && <div className="poster-skeleton" />}
      {src && (
        <img
          src={src}
          alt={movie.en}
          className="poster-img"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

// ---------- Genre Pill ----------
function GenrePill({ genre }) {
  const g = window.MUVI_GENRES[genre];
  if (!g) return null;
  return (
    <span className="pill" style={{ color: g.color }}>
      <span className="dot" />
      <span style={{ color: 'var(--ink-0)' }}>{g.ar}</span>
    </span>
  );
}

// ---------- Movie Row (compact, in month panel) ----------
function MovieRow({ movie, reminded, onRemind }) {
  const [expanded, setExpanded] = useState(false);
  const g = window.MUVI_GENRES[movie.genre];
  const dateAr = window.fmtDateAr(movie.date);
  const days = window.daysUntil(movie.date);
  const past = days < 0;

  return (
    <div className={`movie-row ${expanded ? 'is-expanded' : ''} ${movie.pick ? 'is-pick' : ''}`}>
      <button className="movie-row-head" onClick={() => setExpanded(v => !v)}>
        {movie.pick && <span className="pick-badge">muvi pick</span>}

        <div className="movie-title-block">
          <span className="movie-day numeric ltr">
            {String(new Date(movie.date).getDate()).padStart(2, '0')}
          </span>
          <span className="movie-title">{movie.ar}</span>
        </div>

        <div className="movie-row-meta">
          <GenrePill genre={movie.genre} />
          <span className="movie-chev">{expanded ? '−' : '+'}</span>
        </div>
      </button>

      {expanded && (
        <div className="movie-row-body" style={{ '--accent': g.color }}>
          <MoviePoster movie={movie} className="movie-row-poster" />
          <div className="movie-body-left">
            {movie.overview && (
              <p className="movie-body-overview">{movie.overview}</p>
            )}
            <div className="movie-body-row">
              <span className="movie-body-label">تاريخ العرض</span>
              <span className="movie-body-val">{dateAr}</span>
            </div>
            <div className="movie-body-row">
              <span className="movie-body-label">التصنيف</span>
              <span className="movie-body-val">{g.ar}</span>
            </div>
            <div className="movie-body-row">
              <span className="movie-body-label">العنوان الأصلي</span>
              <span className="movie-body-val ltr" dir="ltr">{movie.en}</span>
            </div>
            {movie.runtime && (
              <div className="movie-body-row">
                <span className="movie-body-label">المدة</span>
                <span className="movie-body-val ltr">{movie.runtime} دقيقة</span>
              </div>
            )}
            {movie.rating && (
              <div className="movie-body-row">
                <span className="movie-body-label">التصنيف العمري</span>
                <span className="movie-body-val ltr">{movie.rating}</span>
              </div>
            )}
            {!past && (
              <div className="movie-body-row">
                <span className="movie-body-label">العد التنازلي</span>
                <span className="movie-body-val ltr">
                  <strong className="numeric" style={{ color: g.color }}>{days}</strong> يوم
                </span>
              </div>
            )}
          </div>

          <div className="movie-body-actions">
            <button
              className={`reminder-btn ${reminded ? 'is-on' : ''}`}
              onClick={(e) => { e.stopPropagation(); onRemind(); }}
            >
              <span className="reminder-icon">{reminded ? '✓' : '🔔'}</span>
              <span>{reminded ? 'سيتم تذكيرك' : 'ذكّرني عند الإصدار'}</span>
            </button>
            <button className="trailer-btn" onClick={(e) => { e.stopPropagation(); window.openTrailer && window.openTrailer(movie); }}>
              <span className="ltr">▶</span>
              <span>شاهد الإعلان</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Single Month Panel ----------
function MonthPanel({ index, movies, reminders, toggleReminder }) {
  const monthMovies = movies.filter(m => m.month === index);
  const picks = monthMovies.filter(m => m.pick).length;
  const monthAr = window.MUVI_MONTHS_AR[index];
  const monthEn = window.MUVI_MONTHS_EN[index];

  return (
    <article className="month-panel" id={`month-${index}`}>
      <header className="month-head">
        <div className="month-num-block">
          <span className="month-num numeric ltr">{String(index + 1).padStart(2, '0')}</span>
          <span className="month-num-divider" />
          <span className="month-num-en numeric ltr">{monthEn}</span>
        </div>
        <h2 className="month-name display">{monthAr}</h2>
        <div className="month-meta">
          <span className="month-count numeric ltr">{monthMovies.length}</span>
          <span className="month-count-label">فيلم</span>
        </div>
      </header>

      <div className="month-body">
        {monthMovies.map((m, i) => {
          const id = `${m.month}-${i}`;
          return (
            <MovieRow
              key={id}
              movie={m}
              reminded={reminders.has(id)}
              onRemind={() => toggleReminder(id)}
            />
          );
        })}
      </div>
    </article>
  );
}

// ---------- Month Rail (sticky scroll-spy) ----------
function MonthRail({ activeMonth, onJump }) {
  return (
    <div className="month-rail">
      <div className="rail-line" />
      {window.MUVI_MONTHS_AR.map((m, i) => {
        const active = activeMonth === i;
        return (
          <button
            key={i}
            className={`rail-dot ${active ? 'is-active' : ''}`}
            onClick={() => onJump(i)}
          >
            <span className="rail-num numeric ltr">{String(i + 1).padStart(2, '0')}</span>
            <span className="rail-name">{m}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { MovieRow, MonthPanel, MonthRail, GenrePill, MoviePoster, TrailerModal });
