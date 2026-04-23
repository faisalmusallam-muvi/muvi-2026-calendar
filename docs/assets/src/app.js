/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo, useCallback } = window.React;

// ---------- Tweaks panel ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ "theme": "purple" }/*EDITMODE-END*/;

function TweaksPanel({ tweaks, setTweaks, visible, onClose }) {
  if (!visible) return null;
  const themes = [
    { id: 'purple', label: 'موڤي بنفسجي', sw: '#772583' },
    { id: 'dark',   label: 'سينما داكن',  sw: '#0c0c10' },
    { id: 'navy',   label: 'موڤي كحلي',   sw: '#004b87' },
    { id: 'red',    label: 'موڤي أحمر',   sw: '#e0004d' },
  ];
  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button className="tweaks-x" onClick={onClose}>×</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-label">لون الخلفية</div>
        <div className="tweak-themes">
          {themes.map(t => (
            <button
              key={t.id}
              className={`tweak-theme ${tweaks.theme === t.id ? 'is-on' : ''}`}
              onClick={() => setTweaks({ ...tweaks, theme: t.id })}
            >
              <span className="tweak-sw" style={{ background: t.sw }} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Filter bar (genre + experience) ----------
function FilterBar({ lang, genreFilter, setGenreFilter, expFilter, setExpFilter }) {
  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;
  const genres = Object.entries(window.MUVI_GENRES || {});
  const experiences = Object.entries(window.MUVI_EXPERIENCES || {});

  return (
    <div className="filter-bar">
      <div className="container">
        <div className="filter-bar-inner">
          {/* Genre chips */}
          <span className="filter-label">{t.filter_genre}</span>
          <div className="filter-section">
            <button
              className={`filter-chip ${!genreFilter ? 'is-active' : ''}`}
              style={!genreFilter ? { '--chip-color': 'var(--muvi-yellow)' } : {}}
              onClick={() => setGenreFilter(null)}
            >
              {t.all}
            </button>
            {genres.map(([key, g]) => (
              <button
                key={key}
                className={`filter-chip ${genreFilter === key ? 'is-active' : ''}`}
                style={genreFilter === key ? { '--chip-color': g.color } : {}}
                onClick={() => setGenreFilter(genreFilter === key ? null : key)}
              >
                <span className="chip-dot" style={{ background: g.color }} />
                {lang === 'en' ? g.en : g.ar}
              </button>
            ))}
          </div>

          <span className="filter-sep" />

          {/* Experience chips */}
          <span className="filter-label">{t.filter_exp}</span>
          <div className="filter-section">
            {experiences.map(([key, e]) => (
              <button
                key={key}
                className={`filter-chip ${expFilter === key ? 'is-active' : ''}`}
                style={expFilter === key ? { '--chip-color': e.color } : {}}
                onClick={() => setExpFilter(expFilter === key ? null : key)}
              >
                {e.en}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- App ----------
function App() {
  const movies = window.MUVI_MOVIES_2026;
  const picks = useMemo(() => movies.filter(m => m.pick), [movies]);

  // ---------- State ----------
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('muvi-lang') || 'ar'; } catch { return 'ar'; }
  });
  const [genreFilter, setGenreFilter] = useState(null);
  const [expFilter, setExpFilter]     = useState(null);
  const [modalMovie, setModalMovie]   = useState(null);
  const [reminders, setReminders]     = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('muvi-reminders') || '[]')); } catch { return new Set(); }
  });
  const [activeMonth, setActiveMonth] = useState(0);
  const [tweaks, setTweaksState]      = useState(() => {
    try { return { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem('muvi-tweaks') || '{}') }; } catch { return TWEAK_DEFAULTS; }
  });
  const [tweaksVisible, setTweaksVisible] = useState(false);

  // ---------- Language ----------
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem('muvi-lang', l); } catch {}
    document.documentElement.setAttribute('lang', l === 'en' ? 'en' : 'ar');
    document.documentElement.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
    document.body.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
  }, []);

  useEffect(() => {
    setLang(lang); // apply on mount
  }, []);

  // ---------- Theme ----------
  const setTweaks = (t) => {
    setTweaksState(t);
    localStorage.setItem('muvi-tweaks', JSON.stringify(t));
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: t }, '*'); } catch {}
  };
  useEffect(() => { document.documentElement.setAttribute('data-theme', tweaks.theme); }, [tweaks.theme]);

  // Edit-mode protocol
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      else if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // ---------- Modal global ----------
  window.openModal = setModalMovie;
  window.openTrailer = setModalMovie; // backward compat

  // ---------- Reminders ----------
  const toggleReminder = (id) => {
    setReminders(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem('muvi-reminders', JSON.stringify([...next]));
      return next;
    });
  };

  // ---------- Filtered movies ----------
  const filteredMovies = useMemo(() => {
    return movies.filter(m => {
      if (genreFilter && m.genre !== genreFilter) return false;
      if (expFilter && !(m.exp || []).includes(expFilter)) return false;
      return true;
    });
  }, [movies, genreFilter, expFilter]);

  // ---------- Scroll spy ----------
  useEffect(() => {
    const handler = () => {
      let best = 0, bestY = -Infinity;
      for (let i = 0; i < 12; i++) {
        const el = document.getElementById(`month-${i}`);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.5 && r.top > bestY) { bestY = r.top; best = i; }
      }
      setActiveMonth(best);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Dynamically compute offset from all sticky headers stacked above
  const getStickyOffset = () => {
    let h = 0;
    ['.nav', '.filter-bar', '.month-bar'].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) h += el.offsetHeight;
    });
    return h + 10;
  };

  const jumpToMonth = (i) => {
    const el = document.getElementById(`month-${i}`);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - getStickyOffset(), behavior: 'smooth' });
  };
  const jumpToCalendar = () => {
    const el = document.getElementById('calendar');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;

  return (
    <>
      <window.Nav lang={lang} setLang={setLang} />
      <window.Hero onJump={jumpToCalendar} lang={lang} />

      <window.PicksSection picks={picks} reminders={reminders} toggleReminder={toggleReminder} lang={lang} />

      {/* Calendar section */}
      <section id="calendar" className="calendar-section">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">{t.cal_eyebrow}</span>
            <h2 className="section-title display">
              {t.cal_title} <span style={{ color: 'var(--muvi-yellow)' }}>{t.cal_title_accent}</span>
            </h2>
            <p className="section-sub">
              {t.cal_sub}
              {reminders.size > 0 && (
                <> — <strong style={{ color: 'var(--muvi-yellow)' }}>{reminders.size}</strong> {reminders.size === 1 ? t.film : t.films_pl}</>
              )}
            </p>
          </header>
        </div>

        {/* Sticky filter bar */}
        <FilterBar
          lang={lang}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          expFilter={expFilter}
          setExpFilter={setExpFilter}
        />

        {/* Sticky month bar — below filter bar on all screens */}
        <window.MonthBar activeMonth={activeMonth} onJump={jumpToMonth} lang={lang} />

        <div className="container" style={{ marginTop: 32 }}>
          <div className="calendar-grid">
            <window.MonthRail activeMonth={activeMonth} onJump={jumpToMonth} lang={lang} />
            <div className="months-stack">
              {window.MUVI_MONTHS_AR.map((_, i) => (
                <window.MonthPanel
                  key={i}
                  index={i}
                  movies={filteredMovies}
                  reminders={reminders}
                  toggleReminder={toggleReminder}
                  lang={lang}
                  onOpenMovie={setModalMovie}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <window.Footer lang={lang} />

      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} onClose={() => setTweaksVisible(false)} />

      {/* Rich movie modal */}
      {modalMovie && (
        <window.MovieModal
          movie={modalMovie}
          lang={lang}
          onClose={() => setModalMovie(null)}
        />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
