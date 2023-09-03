import Logo from "./Logo";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <Logo />
      <a href="/">
        <MenuIcon className="h-8 w-8" />
      </a>
    </header>
  );
}
