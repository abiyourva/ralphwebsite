import type { Testimonial } from "@/lib/testimonials";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <div className={`testimonial-grid${items.length === 1 ? " testimonial-grid-single" : ""}`}>
      {items.map((item, i) => (
        <figure key={item.slug} className={`card testimonial-card rv${i > 0 ? ` d${i}` : ""}`}>
          <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            <p>{item.quote}</p>
          </blockquote>
          <figcaption>
            <span className="testimonial-name">{item.name}</span>
            <span className="testimonial-role">{item.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
