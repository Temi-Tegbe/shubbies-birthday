import { useState, useRef } from 'react';

export default function GiftReveal() {
  const [opened, setOpened]         = useState(false);
  const [showModal, setShowModal]   = useState(false);
  const [showMsg, setShowMsg]       = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const canvasRef = useRef(null);
  const heartsRef = useRef(null);

  const handleGiftClick = () => {
    if (opened) return;
    setOpened(true);
    launchConfetti();
    setTimeout(() => setShowModal(true), 600);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setShowMsg(true);
      spawnHearts();
    }, 200);
    setTimeout(() => setShowReplay(true), 1800);
  };

  const launchConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx    = canvas.getContext('2d');
    const colors = ['#7B1A2E', '#C4A8D4', '#FFD700', '#FF9BA0', '#fff', '#EDE0F6'];
    const pieces = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: -20,
      w: 8 + Math.random() * 10,
      h: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 2 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 3,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8,
    }));

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.vy; p.x += p.vx; p.angle += p.spin;
        ctx.save();
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (++frame < 200) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const spawnHearts = () => {
    const container = heartsRef.current;
    if (!container) return;
    const emojis = ['💜', '💖', '💗', '✨', '🌸'];
    Array.from({ length: 16 }, (_, i) => {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'float-heart';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left   = `${10 + Math.random() * 80}%`;
        el.style.bottom = '10%';
        el.style.animationDuration = `${3 + Math.random() * 3}s`;
        el.style.animationDelay   = `${Math.random() * 1.5}s`;
        el.style.fontSize = `${1 + Math.random() * 1.5}rem`;
        container.appendChild(el);
        setTimeout(() => el.remove(), 7000);
      }, i * 180);
    });
  };

  return (
    <section id="gift" className="gift-section">
      <canvas id="confetti-canvas" ref={canvasRef} />
      <div className="floating-hearts" ref={heartsRef} />

      <div className="section-header">
        <h2>A Special Surprise</h2>
        <div className="divider" />
        <p>A gift straight from the heart</p>
      </div>

      <div className="gift-wrap">
        <div className="gift-box" onClick={handleGiftClick}>
          <div className={`gift-lid${opened ? ' opened' : ''}`} />
          <div className="gift-body" />
        </div>
        {!opened && <p className="gift-hint">Click the gift to open it 🎁</p>}
      </div>

      <div className={`gift-msg${showMsg ? ' visible' : ''}`}>
        <p>
          "Shubby, the love from your family is a reflection of the amazing person you are.
          You've been a source of strength, joy, and inspiration to everyone around you.
          The greatest gift is having you in our lives. Today, we celebrate you, our star."
        </p>
      </div>

      {showReplay && (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button className="replay-btn" onClick={() => setShowModal(true)}>
            Replay the Gift 🎁
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && closeModal()}>
          <div className="modal-box">
            <button className="modal-close" onClick={closeModal}>✕</button>
            <video
              className="gift-video"
              controls
              autoPlay
              src="/images/birthday_video.mp4"
            />
          </div>
        </div>
      )}
    </section>
  );
}
