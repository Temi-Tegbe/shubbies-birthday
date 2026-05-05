import { useState, useEffect } from 'react';
import { subscribe, toggle, getState } from '../audioManager';

export default function FloatingPlayer() {
  const [state, setState] = useState(getState());

  useEffect(() => subscribe(setState), []);

  if (!state.title) return null;

  return (
    <div className={`floating-player${state.playing ? ' fp-playing' : ''}`}>
      <div className="fp-track">
        <span className="fp-bars">
          {[1,2,3].map(i => <span key={i} className="fp-bar" style={{ animationPlayState: state.playing ? 'running' : 'paused' }} />)}
        </span>
        <div className="fp-info">
          <span className="fp-title">{state.title}</span>
          <span className="fp-artist">{state.artist}</span>
        </div>
      </div>
      <button className="fp-btn" onClick={toggle} aria-label={state.playing ? 'Pause' : 'Play'}>
        {state.playing ? '⏸' : '▶'}
      </button>
    </div>
  );
}
