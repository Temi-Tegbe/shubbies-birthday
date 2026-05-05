export default function Closing() {
  return (
    <section id="closing" className="closing">
      <div className="glow-heart">💜</div>

      <div className="closing-photos">
        {[
          '/images/IMG_1992.jpg',
          '/images/791f152f-8dfc-45d6-8dcd-42b7dfeb6382.jpg',
          '/images/IMG_5763_Facetune_24-03-2021-18-04-28.jpg',
          '/images/IMG_9400.jpg',
        ].map((src, i) => (
          <div key={i} className="closing-ph">
            <img src={src} alt="" className="closing-photo-img" />
          </div>
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
