import { Newspaper, Mic, PlayCircle, type LucideIcon } from "lucide-react";

export type PressType = "article" | "podcast" | "video";

const PRESS_TYPE_ICONS: Record<PressType, LucideIcon> = {
  article: Newspaper,
  podcast: Mic,
  video: PlayCircle,
};

export default function PressTypeIcon({ type, size = 20 }: { type: PressType; size?: number }) {
  const Icon = PRESS_TYPE_ICONS[type];
  return <Icon size={size} strokeWidth={1.75} aria-hidden="true" />;
}
