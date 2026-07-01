import DocsLayout from "../components/docs/DocsLayout";
import DocsSection from "../components/docs/DocsSection";
import CodeBlock from "../components/docs/CodeBlock";

import LButton from "../lib/ui/LButton";
import LCard from "../lib/ui/LCard";
import LBadge from "../lib/ui/LBadge";

export default function Cards() {
  return (
    <DocsLayout>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}

        <div>
          <h1 className="text-5xl font-bold mb-4">
            LCard
          </h1>

          <p className="text-zinc-600 text-lg">
            Premium Apple-inspired container
            component for content, dashboards,
            settings pages and SaaS interfaces.
          </p>
        </div>

        {/* Preview */}

        <DocsSection title="Preview">

          <LCard>
            <h3 className="text-xl font-semibold mb-2">
              Revenue
            </h3>

            <p className="text-zinc-600">
              $12,450 this month
            </p>
          </LCard>

        </DocsSection>

        {/* Usage */}

        <DocsSection title="Usage">

          <CodeBlock
            code={`<LCard>
  <h3>Revenue</h3>
  <p>$12,450</p>
</LCard>`}
          />

        </DocsSection>

        {/* Dashboard Example */}

        <DocsSection title="Dashboard Example">

          <div className="grid gap-6 md:grid-cols-3">

            <LCard>
              <p className="text-zinc-500 text-sm">
                Revenue
              </p>

              <h2 className="text-3xl font-bold">
                $12.4K
              </h2>
            </LCard>

            <LCard>
              <p className="text-zinc-500 text-sm">
                Users
              </p>

              <h2 className="text-3xl font-bold">
                2,341
              </h2>
            </LCard>

            <LCard>
              <p className="text-zinc-500 text-sm">
                Growth
              </p>

              <h2 className="text-3xl font-bold">
                +18%
              </h2>
            </LCard>

          </div>

        </DocsSection>

        {/* Content Example */}

        <DocsSection title="Content Example">

          <LCard>

            <LBadge>
              New
            </LBadge>

            <h3 className="text-2xl font-semibold mt-4">
              Build Faster
            </h3>

            <p className="text-zinc-600 mt-2">
              Create premium interfaces with
              reusable components.
            </p>

            <div className="mt-6">
              <LButton>
                Learn More
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
                  className
                </h3>

                <p className="text-zinc-600">
                  Extend styling using Tailwind.
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  children
                </h3>

                <p className="text-zinc-600">
                  Content rendered inside the card.
                </p>
              </div>

            </div>

          </LCard>

        </DocsSection>

      </div>
    </DocsLayout>
  );
}