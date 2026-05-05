const messages = [
  {
    sender: 'Doyin',
    text: "Happy birthday Shubby! You're so amazing, and I love how you show up for your friends and how very spontaneous you are. I pray you never lose your spark. Have an amazing year my darling. 🤍",
    bg: '#FFF9C4', rotate: '-1.5deg',
  },
  {
    sender: 'Marvelous',
    text: "Hey shubilistic! Sometimes I'd look at you and see a mirror — someone with so much love, not just to keep but to give. My sweet HR. Happy birthday, and have a wonderful rotating sun.",
    bg: '#FFDCE4', rotate: '1.8deg',
  },
  {
    sender: 'Kofo',
    text: "Happiest birthday to the sweetest, most fun, most spontaneous babe ever!!! I pray you never lose your spark. This year is so blessed just for your sake! Love you boo 💛",
    bg: '#D4F0D4', rotate: '-0.8deg',
  },
  {
    sender: 'Gbolahan (Oreo)',
    text: "Happy birthday to the woman with the brightest smile. Crazy how we've been friends for almost 10 years! I'm so proud of you and how far you've come. Happy birthday from your pending husband 🙃❤️",
    bg: '#D4E8FF', rotate: '1.2deg',
  },
  {
    sender: 'Tolu',
    text: "My Damsel — you are a reflection of what it means to be fearfully and wonderfully made. A gracious woman worthy of honor and praise. May your contemporaries call you 'Madam Beulah.' All who see you will call you 'Blessed.' Happy 25th! 🌸",
    bg: '#FFF9C4', rotate: '-1.2deg',
  },
  {
    sender: 'Immah',
    text: "Shubbie is like a sunflower that meets sunshine; she'd always shine (bloom) in every situation. 🤍🌻",
    bg: '#FFDCE4', rotate: '0.8deg',
  },
  {
    sender: 'Seun',
    text: "Happy birthday Shubbs baby. You're sweet, loving, and accommodating, and I pray that this new year will be one of your best years yet. Lines will fall in pleasant places for you ❤️",
    bg: '#D4E8FF', rotate: '-1.6deg',
  },
  {
    sender: 'Rhema',
    text: "She's a human sunshine — a physical embodiment of all that's beautiful about the human condition. Her smile could light up an entire room. Never seen anyone get hit and get back up fiercer and more determined. I love you twinnie ❤️",
    bg: '#EDE0F6', rotate: '1.4deg',
  },
  {
    sender: 'Teejay',
    text: "Happy birthday Subomi, my love. You're one of a kind, a treasure both to friends and family. My love for you will forever be eternal. 💫",
    bg: '#FFF9C4', rotate: '-0.6deg',
  },
  {
    sender: 'Segun',
    text: "Happy birthday Shubbs! You're actually amazing in a slightly chaotic way. Cheers to 25, sweetheart 🥂🎉 (I can't deny it, you're a big deal.)",
    bg: '#FFDCE4', rotate: '1.9deg',
  },
  {
    sender: 'Matty',
    text: "Happy Birthday to such a beautiful soul! You're one of the most loving and selfless people I know. Your 'mummy energy' — always ready to host, spoil, and make everyone feel at home. You deserve all the joy this new year brings! 🥹🎀",
    bg: '#D4F0D4', rotate: '-1.3deg',
  },
  {
    sender: 'KB',
    text: "Happy birthday Nzeke (I won't stop calling you that). I am wishing you a life filled with God's divine grace. Stay blessed HG. 🙏",
    bg: '#D4E8FF', rotate: '0.7deg',
  },
  {
    sender: 'Anu',
    text: "My one and only Honey Bie — one of the warmest, sweetest, most genuine people I know. From 100 level exams in 2017 to forever best friends. Happy birthday, my pookie wookie ❤️",
    bg: '#EDE0F6', rotate: '-1.1deg',
  },
  {
    sender: 'Me 💜',
    text: "Happy 25th Birthday to my person, my safe place, my forever girl. Almost 10 years, and somehow it still feels like I hit the jackpot every single day having you in my life. You are strong, stronger than you even realize. I love you beyond what words can fully express, my woman. 💜",
    bg: '#EDE0F6', rotate: '0.4deg',
    special: true,
  },
];

export default function Messages() {
  return (
    <section id="messages" className="messages">
      <div className="section-header">
        <h2>Messages from Friends</h2>
        <div className="divider" />
        <p>Your people love you immensely 💌</p>
      </div>

      <div className="board">
        {messages.map((m, i) => (
          <div
            key={i}
            className="note"
            style={{
              background: m.bg,
              transform: `rotate(${m.rotate})`,
              border: m.special ? '2px solid #C4A8D4' : 'none',
            }}
          >
            <div className="note-sender" style={m.special ? { fontSize: '1.4rem' } : {}}>
              {m.sender}
            </div>
            <div className="note-text">{m.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
