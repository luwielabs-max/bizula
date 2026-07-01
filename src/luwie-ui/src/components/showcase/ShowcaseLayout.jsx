import { Link } from "react-router-dom";
import LNavbar from "../../lib/ui/LNavbar";

export default function ShowcaseLayout({
  title,
  children,
}) {
  return (
    <div className="min-h-screen bg-zinc-100">
      <LNavbar>
        <h1 className="font-semibold">
          Luwie UI
        </h1>

        <div className="flex gap-4 text-sm">
          <Link to="/">Home</Link>

          <Link to="/buttons">
            Buttons
          </Link>

          <Link to="/cards">
            Cards
          </Link>

          <Link to="/forms">
            Forms
          </Link>

          <Link to="/navigation">
            Navigation
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>
        </div>
      </LNavbar>

      <div className="p-10">
        <h2 className="text-4xl font-bold mb-8">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}