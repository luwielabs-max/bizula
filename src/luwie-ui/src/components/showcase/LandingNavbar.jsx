import { Link } from "react-router-dom";
import LButton from "../../lib/ui/LButton";


export default function LandingNavbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50

      backdrop-blur-xl
      bg-white/70

      border-b
      border-zinc-200/50
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        h-16

        flex
        items-center
        justify-between
      "
      >
        <h1
          className="
          font-bold
          text-xl
          tracking-tight
        "
        >
          Luwie UI
        </h1>

        <nav
          className="
          hidden
          md:flex
          gap-8
          text-sm
          text-zinc-600
        "
        >
          <Link to="/">Home</Link>
          <Link to="/buttons">Components</Link>
          <Link to="/dashboard">Examples</Link>
        </nav>

  <Link to="/buttons">
    <LButton>
      Get Started
    </LButton>
  </Link>
      </div>
    </header>
  );
}