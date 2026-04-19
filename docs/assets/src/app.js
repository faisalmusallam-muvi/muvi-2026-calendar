/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = window.React;

// ---------- Tweaks panel ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "purple"
}/*EDITMODE-END*/;

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

// ---------- App ----------
function App() {
  const movies = window.MUVI_MOVIES_2026;
  const picks = useMemo(() => movies.filter(m => m.pick), [movies]);

  const [reminders, setReminders] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('muvi-reminders') || '[]')); }
    catch { return new Set(); }
  });
  const [activeMonth, setActiveMonth] = useState(0);
  const [trailerMovie, setTrailerMovie] = useState(null);
  window.openTrailer = setTrailerMovie;

  // Tweaks
  const [tweaks, setTweaksState] = useState(() => {
    try { return { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem('muvi-tweaks') || '{}') }; }
    catch { return TWEAK_DEFAULTS; }
  });
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const setTweaks = (t) => {
    setTweaksState(t);
    localStorage.setItem('muvi-tweaks', JSON.stringify(t));
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: t }, '*'); } catch {}
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
  }, [tweaks.theme]);

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

  const toggleReminder = (id) => {
    setReminders(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem('muvi-reminders', JSON.stringify([...next]));
      return next;
    });
  };

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      let best = 0, bestY = -Infinity;
      for (let i = 0; i < 12; i++) {
        const el = document.getElementById(`month-${i}`);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.45 && r.top > bestY) {
          bestY = r.top;
          best = i;
        }
      }
      setActiveMonth(best);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const jumpToMonth = (i) => {
    const el = document.getElementById(`month-${i}`);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const jumpToCalendar = () => {
    const el = document.getElementById('calendar');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
  };

  return (
    <>
      <window.Nav />
      <window.Hero onJump={jumpToCalendar} />

      <window.PicksSection picks={picks} reminders={reminders} toggleReminder={toggleReminder} />

      {/* Calendar */}
      <section id="calendar" className="calendar-section">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">السنة كاملة · شهرًا بشهر</span>
            <h2 className="section-title display">
              تقويم <span style={{ color: 'var(--muvi-yellow)' }}>2026</span>
            </h2>
            <p className="section-sub">
              اضغط على أي فيلم لمعرفة التاريخ، التصنيف، وضبط تذكير
              {reminders.size > 0 && (
                <> — <strong style={{ color: 'var(--muvi-yellow)' }}>{reminders.size}</strong> تذكير محفوظ</>
              )}
            </p>
          </header>

          <div className="calendar-grid">
            <window.MonthRail activeMonth={activeMonth} onJump={jumpToMonth} />
            <div className="months-stack">
              {window.MUVI_MONTHS_AR.map((_, i) => (
                <window.MonthPanel
                  key={i}
                  index={i}
                  movies={movies}
                  reminders={reminders}
                  toggleReminder={toggleReminder}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <window.Footer />

      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} onClose={() => setTweaksVisible(false)} />
      {trailerMovie && <window.TrailerModal movie={trailerMovie} onClose={() => setTrailerMovie(null)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
