const songs = [
  { title: 'Ice Cream Man', artist: 'Raye', fav: true },
  { title: 'Die on This Hill', artist: 'Sienna Spiro', fav: false },
  { title: 'Take You There', artist: 'H.E.R', fav: false },
  { title: 'Do 4 Love', artist: 'Snoh Aalegra', fav: false },
  { title: "I'd Rather Pretend", artist: 'Bryant Barnes', fav: false },
];

const wavePeaks = [22, 40, 32, 60, 45, 68, 50, 65, 72, 58, 62, 44, 50, 32, 24];

export default function Music() {
  return (
    <section id="music" className="music">
      <div className="section-header">
        <h2>Music & Mood</h2>
        <div className="divider" />
        <p>Songs that carry your soul</p>
      </div>

      <div className="music-inner">
        <div className="sound-wave">
          {wavePeaks.map((peak, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{ '--peak': `${peak}px`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>

        <div className="playlist">
          {songs.map((s, i) => (
            <div key={i} className="song-row">
              <div className="song-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="song-info">
                <h4>{s.title}</h4>
                <p>{s.artist}</p>
              </div>
              {s.fav && <span className="fav-tag">Her #1 Fav ♡</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
