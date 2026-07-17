import { X, Copy, Globe, QrCode, Share2 } from "lucide-react";

export default function BookingLinkDrawer({
  open,
  onClose,
}) {
  if (!open) return null;

  const bookingLink = "https://bizula.app/b/luwielabs";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(bookingLink);
      alert("Booking link copied!");
    } catch (err) {
      console.error(err);
    }
  };

  const copyWebsiteButton = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Code copied!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30"
      />

      {/* Drawer */}

      <aside className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-200 px-8 py-6">

          <div>

            <h2 className="text-2xl font-semibold">
              Booking Page
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Share your booking page with customers.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-zinc-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-10 p-8">

          {/* Booking Link */}

          <section>

            <div className="mb-3 flex items-center gap-2">

              <Globe size={18} />

              <h3 className="font-semibold">
                Booking Link
              </h3>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4">

              <p className="flex-1 truncate text-sm">
                {bookingLink}
              </p>

              <button
                onClick={copyLink}
                className="rounded-xl bg-black px-4 py-2 text-white"
              >
                <Copy size={16} />
              </button>

            </div>

          </section>

          {/* QR */}

          <section>

            <div className="mb-3 flex items-center gap-2">

              <QrCode size={18} />

              <h3 className="font-semibold">
                QR Code
              </h3>

            </div>

            <div className="rounded-2xl border border-dashed border-zinc-300 p-10 text-center">

              <p className="text-zinc-500">
                QR Code Coming Soon
              </p>

            </div>

          </section>

          {/* Website Integration */}

          <section>

            <div className="mb-4">

              <h3 className="font-semibold">
                Website Integration
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Copy a ready-made button for your website.
              </p>

            </div>

            <div className="space-y-4">

              {[
                "Book Now",
                "Order Now",
                "Reserve Now",
              ].map((text) => (

                <div
                  key={text}
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4"
                >

                  <span>{text}</span>

                  <button
                    onClick={() =>
                      copyWebsiteButton(
`<a href="${bookingLink}">${text}</a>`
                      )
                    }
                    className="rounded-xl border border-zinc-300 px-4 py-2"
                  >
                    Copy
                  </button>

                </div>

              ))}

            </div>

          </section>

          {/* Social */}

          <section>

            <div className="mb-4 flex items-center gap-2">

              <Share2 size={18} />

              <h3 className="font-semibold">
                Share
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <button className="rounded-2xl border border-zinc-200 p-4">
                Instagram
              </button>

              <button className="rounded-2xl border border-zinc-200 p-4">
                WhatsApp
              </button>

              <button className="rounded-2xl border border-zinc-200 p-4">
                Facebook
              </button>

              <button className="rounded-2xl border border-zinc-200 p-4">
                X
              </button>

            </div>

          </section>

        </div>

      </aside>
    </>
  );
}