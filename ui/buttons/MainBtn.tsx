import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-green-100 px-5 py-2 text-xs font-semibold text-green-400 shadow-lg hover:text-green-300",
        className,
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 z-[-2] h-1/4 w-full animate-pulse bg-green-200 blur-md" />
    </button>
  );
}
