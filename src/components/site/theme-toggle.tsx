import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const opts = [
    { v: "light" as const, icon: Sun, label: "Light" },
    { v: "system" as const, icon: Monitor, label: "System" },
    { v: "dark" as const, icon: Moon, label: "Dark" },
  ];
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-1 shadow-sm backdrop-blur",
        className,
      )}
    >
      {opts.map(({ v, icon: Icon, label }) => {
        const active = theme === v;
        return (
          <button
            key={v}
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(v)}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-full transition-colors",
              active
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
