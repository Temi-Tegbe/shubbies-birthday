import { useEffect, useState } from 'react';

const SECTIONS = ['landing', 'journey', 'passions', 'reasons', 'music', 'photos', 'messages', 'gift', 'closing'];
const LABELS   = ['Welcome', 'Our Journey', 'Passions', '25 Reasons', 'Music', 'Photos', 'Messages', 'Gift', 'Closing'];

export default function NavDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = SECTIONS.indexOf(e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {SECTIONS.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav-dot${active === i ? ' active' : ''}`}
          title={LABELS[i]}
          aria-label={LABELS[i]}
        />
      ))}
    </nav>
  );
}
