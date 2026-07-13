export interface PressMarqueeItem {
  icon: string;
  outlet: string;
  url: string;
}

function MarqueeGroup({ items, ariaHidden }: { items: PressMarqueeItem[]; ariaHidden: boolean }) {
  return (
    <div className="press-marquee-group" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span className="press-marquee-pair" key={`${item.outlet}-${i}`}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener"
            className="press-marquee-item"
            tabIndex={ariaHidden ? -1 : undefined}
          >
            {item.outlet}
          </a>
          <span className="press-marquee-sep" aria-hidden="true">·</span>
        </span>
      ))}
    </div>
  );
}

export default function PressMarquee({ items }: { items: PressMarqueeItem[] }) {
  return (
    <div className="press-marquee" role="region" aria-label="Media outlets featuring Ralph Estep Jr.">
      <div className="press-marquee-track">
        <MarqueeGroup items={items} ariaHidden={false} />
        <MarqueeGroup items={items} ariaHidden={true} />
      </div>
    </div>
  );
}
