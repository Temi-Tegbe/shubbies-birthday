import { useState, useEffect } from 'react';

export default function Landing() {
  const [opened, setOpened] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 10,
        size: 6 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <section id="landing" className="landing">
      <div className="petals-container">
        {petals.map(p => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}vw`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="envelope-wrapper" onClick={() => !opened && setOpened(true)}>
        <div className="envelope">
          <div className="envelope-body">
            <div className={`envelope-letter${opened ? ' revealed' : ''}`}>
              <p>"Shubby, unwrap the love, laughter, and memories we've shared over 9 years…"</p>
            </div>
          </div>
          <div className={`envelope-flap${opened ? ' open' : ''}`} />
        </div>
        {!opened && <p className="click-hint">click to open ✉</p>}
      </div>

      <div className={`landing-message${opened ? ' visible' : ''}`}>
        <div className="landing-photo-wrap">
          <img src="/images/Landing Page.jpg" alt="Shubby" className="landing-photo" />
        </div>
        <h1>Happy 25th Birthday, Shubby! 💜</h1>
        <p className="subtitle">Nine years of friendship, a lifetime of love.</p>
        <a href="#journey" className="scroll-btn">Begin Our Story →</a>
      </div>

      {/* <div className="music-note">
        <span>♪</span>
        <em>Ice Cream Man — Raye</em>
        <span>♪</span>
      </div> */}
    </section>
  );
}
