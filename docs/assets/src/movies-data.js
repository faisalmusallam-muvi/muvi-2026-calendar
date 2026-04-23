/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ---------- Helpers (also on window for other files) ----------
function fmtDateAr(iso) {
  const d = new Date(iso);
  return `${d.getDate()} ${window.MUVI_MONTHS_AR[d.getMonth()]}`;
}
function daysUntil(iso) {
  return Math.ceil((new Date(iso) - new Date()) / 86400000);
}

// ---------- Logo ----------
function MuviLogo({ height = 36 }) {
  return <img src="assets/cinemap-white.svg" alt="Cinemap" style={{ height, width: 'auto', display: 'block', borderRadius: 8 }} />;
}

// ---------- Nav ----------
function Nav({ lang, setLang }) {
  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;
  const isEn = lang === 'en';

  return (
    <nav className="nav">
      <MuviLogo height={48} />

      <div className="nav-links">
        <a href="#calendar">{t.nav_calendar}</a>
        <a href="#picks">{t.nav_picks}</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          className="lang-toggle"
          onClick={() => setLang(isEn ? 'ar' : 'en')}
          title={isEn ? 'العربية' : 'English'}
        >
          <span className={!isEn ? 'lt-active' : ''}>{isEn ? 'AR' : 'ع'}</span>
          <span className="lt-sep">/</span>
          <span className={isEn ? 'lt-active' : ''}>{isEn ? 'EN' : 'EN'}</span>
        </button>
        <button className="nav-cta">{t.nav_book}</button>
      </div>
    </nav>
  );
}

// ---------- HERO ----------
function Hero({ onJump, lang }) {
  const t = window.MUVI_I18N?.[lang] || window.MUVI_I18N?.ar;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toString());
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toString());
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-grain" />
        <div className="hero-orb orb-a" />
        <div className="hero-orb orb-b" />
        <div className="hero-orb orb-c" />
      </div>

      <div className="hero-inner container">
        <div className="hero-meta">
          <span className="eyebrow">{t.hero_eyebrow}</span>
          <span className="hero-meta-dot" />
          <span className="eyebrow ltr">2026 · 47 FILMS</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-line-1 display">{t.hero_line1}</span>
          <span className="hero-year numeric ltr">2026</span>
        </h1>

        <p className="hero-sub" dir={lang === 'en' ? 'ltr' : 'rtl'}>{t.hero_sub}</p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={onJump}>
            {t.hero_cta}
            <span className="ltr">↓</span>
          </button>
          <button className="btn btn-ghost">{t.hero_trailer}</button>
        </div>

        <div className="hero-stats">
          <Stat label={t.stat_films}  value="47" />
          <Stat label={t.stat_months} value="12" />
          <Stat label={t.stat_picks}  value="12" sub="pick" />
          <Stat label={t.stat_saudi}  value="04" sub="local" />
        </div>
      </div>

      <Marquee lang={lang} />
    </section>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="stat">
      <div className="stat-value numeric ltr">{value}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub ltr">{sub}</div>}
    </div>
  );
}

function Marquee({ lang }) {
  const arItems = ["أهم أفلام 2026", "47 إصدار", "اختيارات Cinemap", "إنتاج سعودي حصري", "احفظ تذكيراتك", "عش الفرق", "تقويم متجدد", "Live the Difference"];
  const enItems = ["Best Films 2026", "47 Releases", "Cinemap Picks", "Saudi Originals", "Set Reminders", "Live the Difference", "Full Year Calendar", "عش الفرق"];
  const items = lang === 'en' ? enItems : arItems;
  const all = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((t, i) => (
          <span className="marquee-item" key={i}>
            <span>{t}</span>
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Hero, MuviLogo, fmtDateAr, daysUntil });
