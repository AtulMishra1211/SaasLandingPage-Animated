import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className = "sticky top-0 backdrop-blur-sm z-20">
    <div className = "flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className ="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
      <div className="inline-flex items-center gap-1 text-white text-sm sm:text-base">
      <span>Get started for free</span>
      <ArrowRight className="h-4 w-4 text-white" />
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src = {Logo} alt = "Saas Logo" height = {40} width = {40} />
          <MenuIcon className = "h-5 w-5 md:hidden" />
          <nav className = "hidden md:flex gap-6 text-black/60 items-center">
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/customer">Customer</Link>
            <Link href="/updates">Updates</Link>
            <Link href="/help">Help</Link>
            <button className = "bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
};
