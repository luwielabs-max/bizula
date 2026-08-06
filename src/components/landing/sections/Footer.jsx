
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { bizulaLogoDark } from "../../../assets/brand/brand";

const companyLinks = [
  {
    label: "About Bizula",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Community",
    to: "/community",
  },
  {
    label: "Updates",
    to: "/updates",
  },
];

const resourceLinks = [
  {
    label: "Help Center",
    to: "/help",
  },
  {
    label: "Documentation",
    to: "/docs",
  },
  {
    label: "Privacy",
    to: "/privacy",
  },
  {
    label: "Terms",
    to: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Main footer */}

        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.7fr_0.8fr_0.8fr_1fr] lg:gap-12">

          {/* Brand */}

          <div className="max-w-md">

            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Bizula home"
            >
              <img
                src={bizulaLogoDark}
                alt="Bizula"
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500 sm:text-base">

              The connected workspace for modern businesses.
              Manage products, services, bookings, customers,
              payments, and growth from one platform.

            </p>

            <p className="mt-5 text-sm font-semibold text-violet-700">

              Built for African commerce.

            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-sm font-semibold text-zinc-950">

              Company

            </h3>

            <div className="mt-6 space-y-4">

              {companyLinks.map((item) => (

                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-sm
                    text-zinc-500
                    transition-colors
                    duration-200
                    hover:text-violet-700
                  "
                >

                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-sm font-semibold text-zinc-950">

              Resources

            </h3>

            <div className="mt-6 space-y-4">

              {resourceLinks.map((item) => (

                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-sm
                    text-zinc-500
                    transition-colors
                    duration-200
                    hover:text-violet-700
                  "
                >

                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Join Bizula */}

          <div>

            <h3 className="text-sm font-semibold text-zinc-950">

              Build with Bizula

            </h3>

            <p className="mt-5 text-sm leading-6 text-zinc-500">

              Get product updates, business tips, and early
              access to new Bizula features.

            </p>

            <Link
              to="/register"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-zinc-950
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-violet-700
              "
            >

              Join Bizula

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

            </Link>

          </div>

        </div>

        {/* Bottom footer */}

        <div className="flex flex-col gap-5 border-t border-zinc-200 py-7 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-zinc-500">

            © {new Date().getFullYear()} Bizula.
            All rights reserved.

          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

            <Link
              to="/privacy"
              className="
                text-zinc-500
                transition-colors
                hover:text-violet-700
              "
            >

              Privacy

            </Link>

            <Link
              to="/terms"
              className="
                text-zinc-500
                transition-colors
                hover:text-violet-700
              "
            >

              Terms

            </Link>

            <Link
              to="/cookies"
              className="
                text-zinc-500
                transition-colors
                hover:text-violet-700
              "
            >

              Cookies

            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
