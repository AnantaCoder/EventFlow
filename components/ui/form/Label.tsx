import React from "react";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className }: LabelProps) {
  return (
    <label
      className={[
        "block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </label>
  );
}
