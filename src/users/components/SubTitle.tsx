import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function SubTitle({ children }: HeaderProps) {
  return (
    <header className="text-center mt-5">
      <h2 className="text-emerald-900 font-bold text-4xl">{children}</h2>
      {/* <h1 className="text-red-700 font-bold text-5xl">{children}</h1> */}
    </header>
  );
}
