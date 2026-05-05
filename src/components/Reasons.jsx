import { useEffect, useRef } from 'react';

const reasons = [
  "Your sardine sauce supremacy — nobody does it better.",
  "The way you cram like a pro — your cramming skills are still unmatched.",
  "Your eternal love affair with mirrors (Mr. Taiwo will never forget).",
  "Your intentionality about your spiritual growth — you take it seriously, and it inspires me.",
  "Your strength through every storm, especially after losing your dad.",
  "The way you always cheer me on, even when you're struggling yourself.",
  "Your lover-girl heart — you love deeply and selflessly.",
  "Your hilarious math struggles — bus conductor maths will forever confuse you 😂",
  "The way you make me laugh until my stomach hurts.",
  "Your adventurous spirit when it comes to food — creamy pasta queen.",
  "Your creativity with painting and crafts.",
  "Your obsession with Sims, Manga, and Anime — you dive into worlds with so much passion.",
  "Your taste in music — Ice Cream Man will always remind me of you.",
  "The way you organize and plan everything to perfection.",
  "Your resilience during NYSC delays — you never gave up.",
  "Your ability to turn any house into a home.",
  "The way you sacrifice for the people you love (even starving to save money for surprises).",
  "Your unmatched storytelling — you make even small moments unforgettable.",
  "The way you shoulder responsibilities far beyond your age.",
  "Your laughter — it's contagious and brightens any room.",
  "Your fondness for gifting your talking stages on their first dates, even though they rarely end well.",
  "Your loyalty — nine years strong and counting.",
  "Your ability to make me feel seen, loved, and supported.",
  "Your brilliance as an HRBP — intelligent, confident, unstoppable.",
  "Simply because you're Shubby — my best friend, my sister, my person.",
];

export default function Reasons() {
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reason-card').forEach((c, i) => {
              setTimeout(() => c.classList.add('visible'), i * 55);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reasons" className="reasons">
      <div className="section-header">
        <h2>25 Reasons Why I Love You</h2>
        <div className="divider" />
        <p>Because 25 years of you deserves 25 forever reasons</p>
      </div>

      <div className="reasons-grid" ref={gridRef}>
        {reasons.map((r, i) => (
          <div key={i} className="reason-card">
            <div className="reason-num">{String(i + 1).padStart(2, '0')}</div>
            <p>{r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
