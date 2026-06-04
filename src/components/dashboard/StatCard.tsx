import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor: string;
};

export default function StatCard({
  title,
  description,
  Icon,
  iconColor,
}: Props) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-xl p-6 flex items-start gap-4">
      <Icon
        className="h-7 w-7 mt-1"
        style={{ color: iconColor }}
      />

      <div>
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="text-sm text-[var(--ink-mid)] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}