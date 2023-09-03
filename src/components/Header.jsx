import { useState } from "react";

import Logo from "./Logo";
import {
  SunIcon as LightIcon,
  MoonIcon as DarkIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <button
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          setDarkTheme(!darkTheme);
        }}
      >
        {darkTheme ? (
          <DarkIcon className="h-8 w-8 opacity-40" />
        ) : (
          <LightIcon className="h-8 w-8 opacity-40" />
        )}
      </button>
    </header>
  );
}
