// Unsolicited testimonials Ralph has received directly (email, DM, etc.).
// Kept separate from press/appearances since these aren't published media —
// used for the "What People Are Saying" section.

export interface Testimonial {
  slug: string;
  quote: string;
  name: string;
  role: string;
  date: string;
  featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "shara-goswick",
    quote:
      "I wanted to thank you again for your encouragement when we met. I have thought and prayed and brainstormed to try to figure out how to move forward and I think I've got it. I truly appreciate your help and the truth you spoke to me. It was exactly what I needed!",
    name: "Shara Goswick",
    role: "Host, Life Stories Podcast",
    date: "2026-07-16",
    featured: true,
  },
];
