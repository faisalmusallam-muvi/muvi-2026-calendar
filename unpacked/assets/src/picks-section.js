/* global React */
const { useState, useEffect, useRef, useMemo } = window.React;

// ---------- Picks of the year — featured ----------
function PicksSection({ picks, reminders, toggleReminder }) {
  const [active, setActive] = useState(0);
  const current = picks[active];
  const g = window.MUVI_GENRES[current.genre];

  return (
    <section id="picks" className="picks-section">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">12 اختيار من muvi</span>
          <h2 className="section-title display">
            الأفلام التي <span style={{ color: 'var(--muvi-yellow)' }}>لا تفوّت</span>
          </h2>
          <p className="section-sub">واحد لكل شهر — اختياراتنا الكبرى لسنة 2026</p>
        </header>

        <div className="picks-stage">
          {/* Big featured card */}
          <div className="pick-feature" style={{ '--accent': g.color }}>
            <div className="pick-feature-frame">
              <div className="pick-feature-bg" />
              <window.MoviePoster movie={current} className="pick-feature-poster" />
              <div className="pick-feature-grain" />

              <div className="pick-feature-corner pf-tl">
                <span className="ltr">●</span> NOW BOOKING
              </div>
              <div className="pick-feature-corner pf-tr">
                <span className="numeric ltr">{String(active + 1).padStart(2, '0')} / 12</span>
              </div>

              <div className="pick-feature-content">
                <div className="pick-meta-line">
                  <GenrePill genre={current.genre} />
                  <span className="pick-month-label">
                    {window.MUVI_MONTHS_AR[current.month]} 2026
                  </span>
                </div>

                <h3 className="pick-title display">{current.ar}</h3>
                <div className="pick-en ltr" dir="ltr">{current.en}</div>
                {current.overview && (
                  <p className="pick-overview">{current.overview}</p>
                )}

                <div className="pick-date-row">
                  <div>
                    <div className="pick-date-label">يُعرض في</div>
                    <div className="pick-date-val numeric ltr">{window.fmtDateAr(current.date)}</div>
                  </div>
                  <div className="pick-divider" />
                  <div>
                    <div className="pick-date-label">باقي</div>
                    <div className="pick-date-val numeric ltr">
                      {window.daysUntil(current.date)} <span className="pick-date-unit">يوم</span>
                    </div>
                  </div>
                </div>

                <div className="pick-actions">
                  <button
                    className={`btn ${reminders.has(`pick-${active}`) ? 'btn-ghost' : 'btn-primary'}`}
                    onClick={() => toggleReminder(`pick-${active}`)}
                  >
                    {reminders.has(`pick-${active}`) ? '✓ تم حفظ التذكير' : '🔔 ذكّرني'}
                  </button>
                  <button className="btn btn-ghost" onClick={() => window.openTrailer && window.openTrailer(current)}>
                    <span className="ltr">▶</span> شاهد الإعلان
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Picks rail */}
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
                  <div className="pick-card-month">{window.MUVI_MONTHS_AR[p.month]}</div>
                  <div className="pick-card-title">{p.ar}</div>
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
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <window.MuviLogo height={48} />
          <p className="footer-tag">عش الفرق · Live the Difference</p>
        </div>

        <div className="footer-cols">
          <div>
            <div className="footer-h">التقويم</div>
            <a href="#calendar">جميع الأشهر</a>
            <a href="#picks">اختيارات muvi</a>
            <a href="#reminders">تذكيراتي</a>
          </div>
          <div>
            <div className="footer-h">الحجز</div>
            <a href="#">الصالات</a>
            <a href="#">العروض</a>
            <a href="#">الباقات</a>
          </div>
          <div>
            <div className="footer-h">muvi</div>
            <a href="#">من نحن</a>
            <a href="#">الوظائف</a>
            <a href="#">تواصل معنا</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="ltr">© 2026 muvi Cinemas · Saudi Arabia</span>
        <span className="footer-cr">جميع التواريخ قابلة للتغيير</span>
      </div>
    </footer>
  );
}

Object.assign(window, { PicksSection, Footer });
