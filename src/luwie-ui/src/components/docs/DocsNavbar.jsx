import {
  MousePointerClick,
  Square,
  FormInput,
  Compass,
  Menu,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function DocsNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile */}

      <div className="lg:hidden mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-xl

            border
            border-zinc-200
          "
        >
          <Menu size={18} />
          Components
        </button>

        {open && (
          <div className="mt-3 rounded-2xl border border-zinc-200 bg-white overflow-hidden">

            <Link
              className="flex items-center gap-2 p-4 hover:bg-zinc-50"
              to="/buttons"
            >
              <MousePointerClick size={16} />
              Button
            </Link>

            <Link
              className="flex items-center gap-2 p-4 hover:bg-zinc-50"
              to="/cards"
            >
              <Square size={16} />
              Card
            </Link>

            <Link
              className="flex items-center gap-2 p-4 hover:bg-zinc-50"
              to="/forms"
            >
              <FormInput size={16} />
              Forms
            </Link>

            <Link
              className="flex items-center gap-2 p-4 hover:bg-zinc-50"
              to="/navigation"
            >
              <Compass size={16} />
              Navigation
            </Link>

          </div>
        )}
      </div>

      {/* Desktop */}

      <aside
        className="
          hidden
          lg:block

          w-64
          shrink-0

          border-r
          border-zinc-200

          p-6
        "
      >
        <h2 className="font-bold mb-6">
          Components
        </h2>

        <div className="flex flex-col gap-4">

          <Link
            className="flex items-center gap-2"
            to="/buttons"
          >
            <MousePointerClick size={16} />
            Button
          </Link>

          <Link
            className="flex items-center gap-2"
            to="/cards"
          >
            <Square size={16} />
            Card
          </Link>

          <Link
            className="flex items-center gap-2"
            to="/forms"
          >
            <FormInput size={16} />
            Forms
          </Link>

          <Link
            className="flex items-center gap-2"
            to="/navigation"
          >
            <Compass size={16} />
            Navigation
          </Link>

        </div>
      </aside>
    </>
  );
}