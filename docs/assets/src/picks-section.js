/* global React */
const { useState, useEffect, useRef, useMemo } = window.React;

// ---------- Picks of the year — featured ----------
function PicksSection({ picks, reminders, toggleReminder, lang }) {
  const [active, setActive] = useState(0);
  const current = picks[active];
  const g = window.MUVI_GENRES[current.genre];
  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;
  const days = window.daysUntil(current.date);
  const past = days < 0;
  const dateStr = window.fmtDate ? window.fmtDate(current.date, lang) : window.fmtDateAr(current.date);

  return (
    <section id="picks" className="picks-section">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{t.picks_eyebrow}</span>
          <h2 className="section-title display">
            {t.picks_title} <span style={{ color: 'var(--muvi-yellow)' }}>{t.picks_accent}</span>
          </h2>
          <p className="section-sub">{t.picks_sub}</p>
        </header>

        <div className="picks-stage">
          {/* Big featured card */}
          <div className="pick-feature" style={{ '--accent': g.color }}>
            <div className="pick-feature-frame">
              <div className="pick-feature-bg" />
              <window.MoviePoster movie={current} className="pick-feature-poster" />
              <div className="pick-feature-grain" />

              <div className="pick-feature-corner pf-tl">
                <span className="ltr">●</span> {t.now_booking}
              </div>
              <div className="pick-feature-corner pf-tr">
                <span className="numeric ltr">{String(active + 1).padStart(2, '0')} / {picks.length}</span>
              </div>

              <div className="pick-feature-content">
                <div className="pick-meta-line">
                  <window.GenrePill genre={current.genre} lang={lang} />
                  {(current.exp || []).slice(0, 3).map(e => <window.ExpBadge key={e} exp={e} />)}
                  <span className="pick-month-label">
                    {lang === 'en'
                      ? (window.MUVI_MONTHS_EN_FULL?.[current.month] || window.MUVI_MONTHS_EN[current.month])
                      : window.MUVI_MONTHS_AR[current.month]
                    } 2026
                  </span>
                </div>

                <h3 className="pick-title display" dir="auto">
                  {lang === 'en' ? current.en : current.ar}
                </h3>
                <div className="pick-en ltr" dir="ltr">
                  {lang === 'en' ? current.ar : current.en}
                </div>
                {current.overview && (
                  <p className="pick-overview">{current.overview}</p>
                )}

                <div className="pick-date-row">
                  <div>
                    <div className="pick-date-label">{t.release_date}</div>
                    <div className="pick-date-val numeric">{dateStr}</div>
                  </div>
                  <div className="pick-divider" />
                  <div>
                    <div className="pick-date-label">{t.countdown}</div>
                    <div className="pick-date-val numeric" style={{ color: past ? 'var(--ink-3)' : g.color }}>
                      {past ? t.released : <>{days} <span className="pick-date-unit">{t.days_label}</span></>}
                    </div>
                  </div>
                </div>

                <div className="pick-actions">
                  <button
                    className={`btn ${reminders.has(`pick-${active}`) ? 'btn-ghost' : 'btn-primary'}`}
                    onClick={() => toggleReminder(`pick-${active}`)}
                  >
                    {reminders.has(`pick-${active}`) ? t.reminded : `🔔 ${t.remind}`}
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => window.openModal && window.openModal(current)}
                  >
                    <span className="ltr">▶</span> {t.watch_trailer}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Picks grid */}
          <div className="picks-rail rail-scroll">
            {picks.map((p, i) => {
              const isActive = i === active;
              const pg = window.MUVI_GENRES[p.genre];
              return (
                <button
                  key={i}
                  className={`pick-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  style={{ '--accent': pg.color }}
                >
                  <div className="pick-card-num numeric ltr">{String(i + 1).padStart(2, '0')}</div>
                  <div className="pick-card-month">
                    {lang === 'en' ? window.MUVI_MONTHS_EN[p.month] : window.MUVI_MONTHS_AR[p.month]}
                  </div>
                  <div className="pick-card-title">{lang === 'en' ? p.en : p.ar}</div>
                  <div className="pick-card-bar" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ lang }) {
  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <window.MuviLogo height={48} />
          <p className="footer-tag">{t.footer_tag}</p>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h">{t.footer_cal}</div>
            <a href="#calendar">{t.footer_all}</a>
            <a href="#picks">{t.footer_picks}</a>
            <a href="#reminders">{t.footer_remind}</a>
          </div>
          <div>
            <div className="footer-h">{t.footer_book}</div>
            <a href="#">{t.footer_halls}</a>
            <a href="#">{t.footer_shows}</a>
            <a href="#">{t.footer_pkg}</a>
          </div>
          <div>
            <div className="footer-h">muvi</div>
            <a href="#">{t.footer_about}</a>
            <a href="#">{t.footer_jobs}</a>
            <a href="#">{t.footer_contact}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span className="ltr">© 2026 muvi Cinemas · Saudi Arabia</span>
        <span className="footer-cr">{t.footer_dates}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { PicksSection, Footer });
