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
  {
    slug: "robin-wiest",
    quote:
      "We have known you about 25 years and you have done our taxes and been supportive of my 23-year-old business the entire way. We have no revolving debt and save, big time! Emergencies are no worry now. We tracked our spending and learned to focus on our future and be mindful. We do not make a lot of money, but you don't need a lot of money — you need to be smart with what you have. You are telling the truth when you say start with $20. It's a huge step in the right direction. So grateful for you, Ralph!",
    name: "Robin Wiest",
    role: "Small Business Owner, Client for 25+ Years",
    date: "2026-07-21",
    featured: true,
  },
];
