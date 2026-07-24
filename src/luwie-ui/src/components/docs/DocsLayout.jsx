import DocsNavbar from "./DocsNavbar";
import { Link } from "react-router-dom";

export default function DocsLayout({
  children,
}) {
  return (
    <main className="min-h-screen">

      <header
        className="
        h-16

        border-b

        flex
        items-center

        px-6
        "
      >
        <Link
          to="/"
          className="
          font-bold
          text-xl
          "
        >
          Luwie UI
        </Link>
      </header>

      <div className="lg:flex">

        <DocsNavbar />

        <div
          className="
            flex-1

            px-4
            sm:px-6
            lg:px-10

            py-8
            lg:py-12
            "
        >
          {children}
        </div>

      </div>

    </main>
  );
}