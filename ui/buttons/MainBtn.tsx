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
        "relative rounded-lg font-semibold text-xs text-white hover:text-zinc-300 focus-visible:outline active:bg-red-50 px-4 py-2 overflow-hidden",
        className,
      )}
    >
      {children}
      <span className="bg-black z-[-3] absolute h-full w-full rounded-lg left-0 top-0" />
      <span className="absolute w-full h-2/4 bottom-0 left-0 bg-amber-200 blur-md z-[-2] animate-pulse" />
    </button>
  );
}
