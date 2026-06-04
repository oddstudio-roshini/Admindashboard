import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
  buttonColor: string;
  iconColor: string;
};

export default function QuickAccessCard({
  title,
  description,
  Icon,
  buttonColor,
  iconColor,
}: Props) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-xl p-6">
      <Icon
        className="h-8 w-8 mb-4"
        style={{ color: iconColor }}
      />

      <h3 className="font-bold text-xl">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[var(--ink-mid)]">
        {description}
      </p>

      <button
        className="mt-5 font-semibold"
        style={{ color: buttonColor }}
      >
        Open →
      </button>
    </div>
  );
}