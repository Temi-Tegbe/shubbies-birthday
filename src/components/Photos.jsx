const photos = [
  { src: "/images/Shubbie's 25th/IMG_3008.jpg",    alt: "Bridge Adventure",    span: 2, rowSpan: 2 },
  { src: "/images/Shubbie's 25th/IMG_9400.jpg",    alt: "Night Out Glam"           },
  { src: "/images/Shubbie's 25th/IMG_3019.jpg",    alt: "Nature Smile"             },
  { src: "/images/Shubbie's 25th/IMG_3712.jpg",    alt: "Impact Centre"            },
  { src: "/images/Shubbie's 25th/IMG_9850.jpg",    alt: "Hard Rock Cafe"           },
  { src: "/images/Shubbie's 25th/bd9c6272-2c32-452c-8cca-6a9adad329a2.jpg", alt: "Arcade Fun", span: 2 },
  { src: "/images/Shubbie's 25th/IMG_4005.jpg",    alt: "Black Outfit"             },
  { src: "/images/Shubbie's 25th/IMG_5091.jpg",    alt: "Tonight's Vibe"           },
];

export default function Photos() {
  return (
    <section id="photos" className="photos">
      <div className="section-header">
        <h2>Memory Wall</h2>
        <div className="divider" />
        <p>9 years of moments, captured forever ✨</p>
      </div>

      <div className="collage-grid">
        {photos.map((p, i) => (
          <div key={i} className="collage-cell" style={{ ...(p.span && { gridColumn: `span ${p.span}` }), ...(p.rowSpan && { gridRow: `span ${p.rowSpan}` }) }}>
            <img src={p.src} alt={p.alt} className="collage-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
