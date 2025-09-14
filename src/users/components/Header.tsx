import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="text-center mt-5">
      <h1 className="text-emerald-900 font-bold text-5xl">{children}</h1>
      {/* <h1 className="text-red-700 font-bold text-5xl">{children}</h1> */}
    </header>
  );
}
