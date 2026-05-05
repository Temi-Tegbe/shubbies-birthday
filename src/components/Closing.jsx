export default function Closing() {
  return (
    <section id="closing" className="closing">
      <div className="glow-heart">💜</div>

      <div className="closing-photos">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className="closing-ph">📷</div>
        ))}
      </div>

      <div className="closing-msg">
        <h2>Happy 25th, Shubby.</h2>
        <p>Nine years of friendship, a lifetime of love.</p>
        <p>You are strong, beautiful, and loved beyond words.</p>
        <p>Forever grateful that I get to do life with you.</p>
      </div>

      <a href="#landing" className="forever-btn">Here's to Forever 💜</a>

      <p className="site-credit">built by Temiloluwa Tegbe</p>
    </section>
  );
}
