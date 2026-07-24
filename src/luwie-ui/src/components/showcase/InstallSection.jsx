export default function InstallSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Get Started
        </h2>

        <p className="text-zinc-600 mb-10">
          Install Luwie UI and start building.
        </p>

        <div
          className="
            bg-black
            text-white

            rounded-3xl

            p-6

            font-mono
            text-left
          "
        >
          npm install luwie-ui
        </div>
      </div>
    </section>
  );
}