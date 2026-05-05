import { useEffect, useRef } from 'react';

const milestones = [
  {
    era: '2017 — 100 Level',
    title: 'The First Hello',
    photo: '/images/First Meeting in 100lv.jpg',
    text: "After class, you walked towards the back with your unmistakable backpack, signature face cap, and beloved sandals. You asked to walk with us to the school garage — and that simple moment became the start of a sisterhood.",
  },
  {
    era: 'Campus Life',
    title: 'Motion Ground & Sardine Sauce Days',
    photo: '/images/Sardine Sauce Days.jpg',
    text: "Pepsi meals, Motion Ground after classes, practically living in each other's houses. Your legendary sardine sauce — nobody does it like you. Some things never change.",
  },
  {
    era: 'Midnight Grind',
    title: 'Black Coffee Nights',
    photo: '/images/Black Coffee Nights.jpg',
    text: "Sachets of Nescafé, burning midnight torches, unmatched cramming skills, and powering through finals together after the COVID break. We came, we saw, we conquered.",
  },
  {
    era: 'The Mirror Incident',
    title: "Mr. Taiwo's Class",
    photo: '/images/Mirror Incident.jpg',
    text: "Mr. Taiwo sent us out because you pulled out that tiny mirror — he thought you were applying makeup. We begged endlessly after class. That mirror has been your faithful companion ever since. 😂",
  },
  {
    era: 'The Sacrifice',
    title: 'Heartbreak Party',
    photo: '/images/Heartbreak Party.jpg',
    text: "We starved and saved for a surprise birthday party… only for him to break your heart that very night. Painful, but it showed how much you give of yourself for the people you love.",
  },
  {
    era: 'Glow-Up Era',
    title: 'The Hair Dye Adventure',
    tallPhoto: true,
    photo: '/images/Hair Dye Adventure.jpg',
    text: "First time dyeing our hair together — yours didn't go as planned because you retouched before dyeing. But we laughed through it anyway. Always the adventure.",
  },
  {
    era: 'NYSC',
    title: 'The Delays & The Support',
    photo: '/images/NYSC Struggles.jpg',
    text: "A name error in your JAMB record meant endless travel and stress. Yet you still cheered me on while I was serving. That's who you are — strong, selfless, and endlessly supportive.",
  },
  {
    era: 'Strength & Grief',
    title: 'Omo Major',
    photo: '/images/Losing her dad.jpg',
    text: 'Losing your dad — a Major — left a mark. But in your grief, you became the backbone of your family. "Omo Major" isn\'t just a nickname; it\'s a reminder of the courage and resilience you embody every day.',
  },
  {
    era: 'Today',
    title: 'Excelling as HRBP',
    tallPhoto: true,
    photo: '/images/IMG_0759.jpg',
    text: "From worrying about the future to thriving as a brilliant HRBP — excelling, leading, and shouldering responsibilities that many older than you couldn't dream of. Your dad would be so proud.",
  },
];

export default function Journey() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    itemRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <h2>Our Journey</h2>
        <div className="divider" />
        <p>✨ 9 Years of Friendship ✨</p>
      </div>

      <div className="timeline">
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`tl-item${i % 2 === 1 ? ' right' : ''}`}
            ref={el => (itemRefs.current[i] = el)}
          >
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-era">{m.era}</div>
              <h3>{m.title}</h3>
              <div className="photo-ph" style={m.tallPhoto ? { height: '317px' } : {}}>
                <img src={m.photo} alt={m.title} className="tl-photo" />
              </div>
              <p>{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
