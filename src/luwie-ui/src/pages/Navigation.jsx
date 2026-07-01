import DocsLayout from "../components/docs/DocsLayout";
import DocsSection from "../components/docs/DocsSection";
import CodeBlock from "../components/docs/CodeBlock";

import LNavbar from "../lib/ui/LNavbar";
import LSidebar from "../lib/ui/LSidebar";
import LDock from "../lib/ui/LDock";
import LCard from "../lib/ui/LCard";

export default function Navigation() {
  return (
    <DocsLayout>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}

        <div>
          <h1 className="text-5xl font-bold mb-4">
            Navigation
          </h1>

          <p className="text-zinc-600 text-lg max-w-3xl">
            Premium navigation components for SaaS,
            dashboards, admin panels and mobile apps.
          </p>
        </div>

        {/* Dashboard Layout */}

        <DocsSection title="Complete Dashboard Layout">

          <LCard className="overflow-hidden p-0">

            <div className="border-b">
              <LNavbar />
            </div>

            <div className="flex min-h-[500px]">

              <div className="hidden md:block w-64 border-r">
                <LSidebar />
              </div>

              <div className="flex-1 p-6">

                <h2 className="text-3xl font-bold mb-2">
                  Analytics Dashboard
                </h2>

                <p className="text-zinc-500 mb-8">
                  Complete SaaS dashboard layout using
                  LNavbar and LSidebar.
                </p>

                <div className="grid md:grid-cols-3 gap-4">

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Revenue
                    </p>

                    <h3 className="text-3xl font-bold">
                      $12.4K
                    </h3>
                  </LCard>

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Customers
                    </p>

                    <h3 className="text-3xl font-bold">
                      2,341
                    </h3>
                  </LCard>

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Growth
                    </p>

                    <h3 className="text-3xl font-bold">
                      +18%
                    </h3>
                  </LCard>

                </div>

              </div>

            </div>

          </LCard>

        </DocsSection>

        {/* Navbar Example */}

        <DocsSection title="Landing Page Navigation">

          <LCard className="overflow-hidden p-0">

            <div className="border-b">
              <LNavbar />
            </div>

            <div className="px-8 py-20 text-center">

              <h2 className="text-5xl font-bold mb-6">
                Build Faster With Luwie UI
              </h2>

              <p className="text-zinc-600 max-w-2xl mx-auto mb-8">
                Example startup landing page using
                the LNavbar component.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">

                <button className="px-6 py-3 rounded-2xl bg-black text-white">
                  Get Started
                </button>

                <button className="px-6 py-3 rounded-2xl border">
                  View Docs
                </button>

              </div>

            </div>

          </LCard>

          <CodeBlock
            code={`<LNavbar />

<section>
  <h1>Build Faster With Luwie UI</h1>
</section>`}
          />

        </DocsSection>

        {/* Sidebar Example */}

        <DocsSection title="CRM Dashboard Example">

          <LCard className="overflow-hidden p-0">

            <div className="flex min-h-[500px]">

              <div className="hidden md:block w-64 border-r">
                <LSidebar />
              </div>

              <div className="flex-1 p-6">

                <h2 className="text-2xl font-bold mb-6">
                  Customer Dashboard
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Customers
                    </p>

                    <h3 className="text-4xl font-bold">
                      2,341
                    </h3>
                  </LCard>

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Revenue
                    </p>

                    <h3 className="text-4xl font-bold">
                      $42K
                    </h3>
                  </LCard>

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Orders
                    </p>

                    <h3 className="text-4xl font-bold">
                      891
                    </h3>
                  </LCard>

                  <LCard>
                    <p className="text-zinc-500 text-sm">
                      Growth
                    </p>

                    <h3 className="text-4xl font-bold">
                      +24%
                    </h3>
                  </LCard>

                </div>

              </div>

            </div>

          </LCard>

          <CodeBlock
            code={`<div className="flex">

  <LSidebar />

  <main>
    Dashboard Content
  </main>

</div>`}
          />

        </DocsSection>

        {/* Dock Example */}

        <DocsSection title="Mobile Home Screen Example">

          <div className="max-w-sm mx-auto">

            <LCard
              className="
              relative
              h-[700px]
              overflow-hidden
              bg-gradient-to-b
              from-zinc-100
              to-zinc-200
            "
            >

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  Productivity OS
                </h3>

                <p className="text-zinc-500">
                  Mobile Application Example
                </p>

              </div>

              <div
                className="
                grid
                grid-cols-4
                gap-4
                px-6
                pt-8
              "
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="
                    aspect-square
                    rounded-3xl
                    bg-white
                    shadow-sm
                  "
                  />
                ))}
              </div>

              <div
                className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
              "
              >
                <LDock />
              </div>

            </LCard>

          </div>

          <CodeBlock
            code={`<LDock />

// Great for:

• Mobile Apps
• Quick Actions
• Productivity Tools
• Home Screens`}
          />

          {/* Component Showcase */}

<DocsSection title="Navigation Components">

  <div className="grid lg:grid-cols-3 gap-6">

    <LCard>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          LNavbar
        </h3>

        <p className="text-zinc-500 mt-2">
          Premium top navigation for landing pages,
          SaaS products and documentation sites.
        </p>
      </div>

      <div className="border rounded-2xl overflow-hidden">
        <LNavbar />
      </div>

      <CodeBlock
        code={`import { LNavbar } from "luwie-ui"

<LNavbar />`}
      />

    </LCard>

    <LCard>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          LSidebar
        </h3>

        <p className="text-zinc-500 mt-2">
          Perfect for dashboards, CRM systems
          and internal business tools.
        </p>
      </div>

      <div className="border rounded-2xl overflow-hidden min-h-[250px]">
        <LSidebar />
      </div>

      <CodeBlock
        code={`import { LSidebar } from "luwie-ui"

<LSidebar />`}
      />

    </LCard>

    <LCard>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          LDock
        </h3>

        <p className="text-zinc-500 mt-2">
          Apple-inspired dock navigation
          for modern applications.
        </p>
      </div>

      <div className="flex justify-center items-center min-h-[250px]">
        <LDock />
      </div>

      <CodeBlock
        code={`import { LDock } from "luwie-ui"

<LDock />`}
      />

    </LCard>

  </div>

</DocsSection>

        </DocsSection>

        {/* Real World Use Cases */}

        <DocsSection title="Real World Use Cases">

          <div className="grid md:grid-cols-3 gap-6">

            <LCard>

              <h3 className="font-semibold mb-4">
                Startup Landing Pages
              </h3>

              <p className="text-zinc-600">
                Use LNavbar for marketing sites,
                startup landing pages and documentation.
              </p>

            </LCard>

            <LCard>

              <h3 className="font-semibold mb-4">
                Admin Dashboards
              </h3>

              <p className="text-zinc-600">
                Combine LNavbar and LSidebar
                for CRM and analytics platforms.
              </p>

            </LCard>

            <LCard>

              <h3 className="font-semibold mb-4">
                Mobile Applications
              </h3>

              <p className="text-zinc-600">
                Use LDock for productivity apps,
                quick actions and mobile navigation.
              </p>

            </LCard>

          </div>

        </DocsSection>

      </div>
    </DocsLayout>
  );
}