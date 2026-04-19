/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

// ---------- Helpers ----------
function fmtDateAr(iso) {
  const d = new Date(iso);
  const day = d.getDate();
  const month = window.MUVI_MONTHS_AR[d.getMonth()];
  return `${day} ${month}`;
}

function daysUntil(iso) {
  const now = new Date();
  const target = new Date(iso);
  return Math.ceil((target - now) / 86400000);
}

// ---------- Logo ----------
function MuviLogo({ height = 36 }) {
  return <img src="assets/muvi-logo-reversed.png" alt="muvi cinemas" style={{ height, display: 'block' }} />;
}

// ---------- Nav ----------
function Nav() {
  return (
    <nav className="nav">
      <MuviLogo height={36} />
      <div className="nav-links">
        <a href="#calendar">التقويم</a>
        <a href="#picks">اختيارات muvi</a>
        <a href="#months">الأشهر</a>
        <a href="#reminders">تذكيراتي</a>
      </div>
      <button className="nav-cta">احجز تذكرة</button>
    </nav>
  );
}

// ---------- HERO ----------
function Hero({ onJump }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--mx', x);
      el.style.setProperty('--my', y);
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
          <span className="eyebrow">تقويم muvi السينمائي</span>
          <span className="hero-meta-dot" />
          <span className="eyebrow ltr">2026 · 47 FILMS</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-line-1 display">أهم أفلام</span>
          <span className="hero-year numeric ltr">2026</span>
        </h1>

        <p className="hero-sub">
          سنة كاملة من الإثارة، الأكشن، الكوميديا والرعب —
          <br/>
          استكشف القائمة الكاملة، احفظ تذكير لكل فيلم، وعش الفرق.
        </p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={onJump}>
            استكشف التقويم
            <span className="ltr">↓</span>
          </button>
          <button className="btn btn-ghost">شاهد العرض الترويجي</button>
        </div>

        <div className="hero-stats">
          <Stat label="فيلم" value="47" />
          <Stat label="شهر" value="12" />
          <Stat label="اختيارات muvi" value="12" sub="pick" />
          <Stat label="إنتاج سعودي" value="04" sub="local" />
        </div>
      </div>

      {/* Marquee strip at bottom */}
      <Marquee />
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

function Marquee() {
  const items = [
    "أهم أفلام 2026", "47 إصدار", "اختيارات muvi", "إنتاج سعودي حصري",
    "احفظ تذكيراتك", "عش الفرق", "تقويم متجدد", "Live the Difference"
  ];
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
