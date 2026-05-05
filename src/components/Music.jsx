import { useState, useEffect } from 'react';
import { playTrack, pause, subscribe, getState } from '../audioManager';

const songs = [
  { title: 'Ice Cream Man',      artist: 'Raye',          fav: true,  src: '/images/Raye - Ice Cream Man _ Hottest Record Live.mp3' },
  { title: 'Die on This Hill',   artist: 'Sienna Spiro',  fav: false, src: '/images/SIENNA SPIRO - Die On This Hill (Audio).mp3' },
  { title: 'Take You There',     artist: 'H.E.R',         fav: false, src: '/images/H.E.R. - Take You There (Audio).mp3' },
  { title: 'Do 4 Love',          artist: 'Snoh Aalegra',  fav: false, src: '/images/Snoh Aalegra -  DO 4 LOVE (Visualizer).mp3' },
  { title: "I'd Rather Pretend", artist: 'Bryant Barnes', fav: false, src: "/images/Bryant Barnes - I'd Rather Pretend (Lyrics).mp3" },
];

const wavePeaks = [22, 40, 32, 60, 45, 68, 50, 65, 72, 58, 62, 44, 50, 32, 24];

export default function Music() {
  const [managerState, setManagerState] = useState(getState());

  useEffect(() => subscribe(setManagerState), []);

  const playing = managerState.playing ? managerState.audio?.src : null;

  const toggle = (s) => {
    if (!s) return;
    const fullSrc = new URL(s, window.location.href).href;
    if (playing === fullSrc && managerState.playing) {
      pause();
    } else {
      const song = songs.find(x => x.src === s);
      playTrack(s, song.title, song.artist);
    }
  };

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
              style={{ '--peak': `${peak}px`, animationDelay: `${i * 0.08}s`, animationPlayState: managerState.playing ? 'running' : 'paused' }}
            />
          ))}
        </div>

        <div className="playlist">
          {songs.map((s, i) => (
            <div key={i} className={`song-row${managerState.playing && managerState.title === s.title ? ' song-playing' : ''}`}>
              <div className="song-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="song-info">
                <h4>{s.title}</h4>
                <p>{s.artist}</p>
              </div>
              {s.fav && <span className="fav-tag">Her #1 Fav ♡</span>}
              {s.src && (
                <button className="play-btn" onClick={() => toggle(s.src)} aria-label={managerState.playing && managerState.title === s.title ? 'Pause' : 'Play'}>
                  {managerState.playing && managerState.title === s.title ? '⏸' : '▶'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
