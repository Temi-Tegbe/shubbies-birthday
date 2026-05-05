let state = { audio: null, title: '', artist: '', playing: false };
const listeners = new Set();

const notify = () => listeners.forEach(fn => fn({ ...state }));

export const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const playTrack = (src, title, artist) => {
  if (state.audio) { state.audio.pause(); state.audio.onended = null; }
  state.audio = new Audio(src);
  state.title = title;
  state.artist = artist;
  state.playing = true;
  state.audio.loop = (title === 'Ice Cream Man');
  state.audio.play().catch(() => {});
  state.audio.onended = () => { state.playing = false; notify(); };
  notify();
};

export const pause = () => {
  state.audio?.pause();
  state.playing = false;
  notify();
};

export const resume = () => {
  state.audio?.play().catch(() => {});
  state.playing = true;
  notify();
};

export const toggle = () => state.playing ? pause() : resume();

export const getState = () => ({ ...state });
