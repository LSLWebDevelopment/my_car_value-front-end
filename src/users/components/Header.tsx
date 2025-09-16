import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex justify-between mb-10 p-5 bg-amber-50 w-full">
      <Link to="/">
        <h1 className="text-emerald-900 font-bold text-5xl">{children}</h1>
      </Link>
      <nav className="flex gap-5 text-2xl font-medium cursor-pointer">
        <Link
          to="signUp"
          className="bg-green-700 py-2.5 px-10 rounded-xl text-amber-400"
        >
          Sign Up
        </Link>
        <Link
          to="signIn"
          className="bg-green-700 py-2.5 px-10 rounded-xl text-amber-400"
        >
          Sign In
        </Link>
      </nav>
      {/* <h1 className="text-red-700 font-bold text-5xl">{children}</h1> */}
    </header>
  );
}
