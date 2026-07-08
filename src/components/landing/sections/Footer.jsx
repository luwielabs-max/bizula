import { Link } from "react-router-dom";

export default function Footer() {

  const company = [
    "About",
    "Contacts",
    "Community",
    "Updates",
  ];

  const resources = [
    "Help Center",
    "Documentation",
    "Privacy",
    "Terms",
  ];

  return (
    <footer className="bg-white border-t border-zinc-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-semibold tracking-tight">
              Bizula
            </h2>

            <p className="mt-6 max-w-sm text-zinc-500 leading-8">

              The infrastructure layer for modern commerce.

              Sell products.

              Accept bookings.

              Collect deposits.

              Manage customers.

              Grow your business.

            </p>

          </div>

          

          {/* Company */}

          <div>

            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-4">

              {company.map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="block text-zinc-500 hover:text-black transition"
                >
                  {item}
                </Link>
              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold">
              Resources
            </h3>

            <div className="mt-6 space-y-4">

              {resources.map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="block text-zinc-500 hover:text-black transition"
                >
                  {item}
                </Link>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 border-t border-zinc-200 pt-8 flex flex-col gap-5 md:flex-row md:justify-between md:items-center">

          <p className="text-zinc-500">

            © {new Date().getFullYear()} Bizula.
            All rights reserved.

          </p>

          <div className="flex gap-8">

            <Link
              to="/"
              className="text-zinc-500 hover:text-black transition"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="text-zinc-500 hover:text-black transition"
            >
              Terms
            </Link>

            <Link
              to="/"
              className="text-zinc-500 hover:text-black transition"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}