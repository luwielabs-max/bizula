import LButton from "../lib/ui/LButton";
import LCard from "../lib/ui/LCard";

import DocsSection from "../components/docs/DocsSection";
import CodeBlock from "../components/docs/CodeBlock";
import DocsLayout from "../components/docs/DocsLayout";

export default function Buttons() {
  return (
    <DocsLayout
      className="
        min-h-screen

        bg-white

        px-6
        py-24
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          space-y-16
        "
      >
        {/* Header */}

        <div>
          <h1
            className="
              text-5xl
              font-bold
              mb-4
            "
          >
            LButton
          </h1>

          <p
            className="
              text-zinc-600
              text-lg
            "
          >
            Premium Apple-inspired button
            component with motion,
            variants and custom styling.
          </p>
        </div>

        {/* Preview */}

        <DocsSection title="Preview">
          <LCard>
            <div className="flex flex-wrap gap-4">
              <LButton>
                Default
              </LButton>

              <LButton variant="glass">
                Glass
              </LButton>

              <LButton variant="ghost">
                Ghost
              </LButton>
            </div>
          </LCard>
        </DocsSection>

        {/* Usage */}

        <DocsSection title="Usage">
          <CodeBlock
            code={`<LButton>
  Click Me
</LButton>`}
          />
        </DocsSection>

        {/* Variants */}

        <DocsSection title="Variants">
          <LCard>
            <div className="flex flex-wrap gap-4">
              <LButton>
                Default
              </LButton>

              <LButton variant="glass">
                Glass
              </LButton>

              <LButton variant="ghost">
                Ghost
              </LButton>
            </div>
          </LCard>

          <CodeBlock
            code={`<LButton variant="glass">
  Continue
</LButton>

<LButton variant="ghost">
  Cancel
</LButton>`}
          />
        </DocsSection>

        {/* Sizes */}

        <DocsSection title="Sizes">
          <LCard>
            <div className="flex flex-wrap gap-4 items-center">
              <LButton size="sm">
                Small
              </LButton>

              <LButton size="md">
                Medium
              </LButton>

              <LButton size="lg">
                Large
              </LButton>
            </div>
          </LCard>
        </DocsSection>

        {/* Custom Styling */}

        <DocsSection title="Custom Styling">
          <LCard>
            <div className="flex flex-wrap gap-4">
              <LButton className="bg-blue-600 text-white">
                Blue
              </LButton>

              <LButton className="bg-purple-600 text-white">
                Purple
              </LButton>

              <LButton className="rounded-full">
                Pill
              </LButton>
            </div>
          </LCard>
        </DocsSection>

        {/* Props */}

        <DocsSection title="Props">
          <LCard>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">
                  variant
                </h3>

                <p className="text-zinc-600">
                  default | glass | ghost
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  size
                </h3>

                <p className="text-zinc-600">
                  sm | md | lg
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  className
                </h3>

                <p className="text-zinc-600">
                  Extend styles using
                  Tailwind classes.
                </p>
              </div>
            </div>
          </LCard>
        </DocsSection>
      </div>
    </DocsLayout>
  );
}