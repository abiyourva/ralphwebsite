import Image from "next/image";

type Hobby = {
  src: string;
  alt: string;
  icon: string;
  title: string;
  description: string;
};

const HOBBIES: Hobby[] = [
  {
    src: "/images/ralph-motorcycle.jpg",
    alt: "Ralph on his motorcycle",
    icon: "🏍️",
    title: "Riding",
    description:
      "There's something about the open road that clears the mind. Ralph rides to decompress, explore, and remind himself that the best views come after the hardest climbs.",
  },
  {
    src: "/images/ralph-softball.jpg",
    alt: "Ralph in his softball uniform",
    icon: "⚾",
    title: "Softball",
    description:
      "Team player on and off the field. Softball keeps Ralph grounded in community, competition, and the joy of showing up — lessons that translate directly into how he coaches.",
  },
];

// Hobby photo grid. Photos render full, uncropped, at their natural
// portrait aspect ratio — no click-to-expand lightbox.
export default function HobbyPhotos() {
  return (
    <div className="grid-2">
      {HOBBIES.map((hobby, i) => (
        <div key={hobby.src} className={`card card-hover rv${i === 1 ? " d1" : ""}`}>
          <div className="photo-wrap">
            <Image
              src={hobby.src}
              alt={hobby.alt}
              width={2316}
              height={3088}
              sizes="(max-width: 700px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="hobby-card-body">
            <div className="hobby-card-header">
              <span aria-hidden="true">{hobby.icon}</span>
              <h3>{hobby.title}</h3>
            </div>
            <p>{hobby.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
