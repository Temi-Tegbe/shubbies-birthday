const tiles = [
  { icon: '🎨', title: 'Painting & Crafts', anecdote: "You create worlds with your hands — painting and crafts aren't just hobbies, they're your therapy and magic." },
  { icon: '📋', title: 'Organizing & Planning', anecdote: "Very intentional. You love to plan and structure everything to perfection — a skill that makes you an incredible HRBP." },
  { icon: '🌸', title: 'Anime & Manga', anecdote: "You dive into anime and manga stories with so much passion. Your obsession is one of the most endearing things about you." },
  { icon: '🏠', title: 'Sims Game', anecdote: "Building worlds in Sims with complete dedication. You don't just play — you architect entire lives in there." },
  { icon: '🍝', title: 'Food Adventures', anecdote: "Creamy pasta queen. Fine dining enthusiast. Always ready to try new dishes at restaurants and lounges." },
  { icon: '🫂', title: 'Hosting Friends', anecdote: 'Your "mummy energy" — always ready to host, spoil, and make everyone feel at home. It\'s a gift you carry effortlessly.' },
  { icon: '👩‍🍳', title: 'Cooking', anecdote: "At one point you loved experimenting with recipes. That legendary sardine sauce? Nobody does it like you. Nobody." },
  { icon: '🎵', title: 'Music Lover', anecdote: "From Raye to H.E.R to Snoh Aalegra — your taste in music is as deep and beautiful as you are." },
  { icon: '💖', title: 'Big Heart', anecdote: "You love deeply, selflessly, and fearlessly. Your heart is one of the most beautiful things about you — never change it." },
  { icon: '🎁', title: 'Fondness for Gifting', anecdote: "Even in talking stages, you love giving gifts. Sometimes they don't end well… but that generous heart of yours is priceless." },
  { icon: '🙏', title: 'Spiritual Growth', anecdote: "Actively working on your spiritual journey with intentionality. It inspires everyone around you." },
  { icon: '🧮', title: 'Math Struggles', anecdote: "Bus conductor maths will forever confuse you 😂 Your husband better be good at maths — for the God-children's sake!" },
  { icon: '💪', title: 'Strength & Resilience', anecdote: "You carry responsibilities far beyond your age. You have the strength of a lion — and you don't even always know it." },
  { icon: '📖', title: 'Storytelling', anecdote: "You make even the smallest moments unforgettable with the way you narrate them. Your stories could fill a book." },
  { icon: '🫀', title: 'Loyalty & Support', anecdote: "Always there through thick and thin. Nine years and counting — your loyalty is one of your greatest superpowers." },
];

export default function Passions() {
  return (
    <section id="passions" className="passions">
      <div className="section-header">
        <h2>Personality & Passions</h2>
        <div className="divider" />
        <p>The things that make you, you — hover to discover ✨</p>
      </div>

      <div className="passions-grid">
        {tiles.map((t, i) => (
          <div key={i} className="passion-tile">
            <div className="tile-front">
              <div className="tile-icon">{t.icon}</div>
              <div className="tile-title">{t.title}</div>
              <span className="tile-hint">hover ✦</span>
            </div>
            <div className="tile-anecdote">{t.anecdote}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
