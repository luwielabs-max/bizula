import LButton from "../../lib/ui/LButton";
import LCard from "../../lib/ui/LCard";
import LBadge from "../../lib/ui/LBadge";
import LAvatar from "../../lib/ui/LAvatar";

export default function ComponentShowcase() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Components
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <LCard>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Buttons
              </h3>

              <div className="flex gap-3">
                <LButton>
                  Default
                </LButton>

                <LButton variant="glass">
                  Glass
                </LButton>
              </div>
            </div>
          </LCard>

          <LCard>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Identity
              </h3>

              <div className="flex gap-4 items-center">
                <LAvatar name="Franklyn" />

                <LBadge>
                  Founder
                </LBadge>
              </div>
            </div>
          </LCard>
        </div>
      </div>
    </section>
  );
}