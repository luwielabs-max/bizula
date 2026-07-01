import DocsLayout from "../components/docs/DocsLayout";
import DocsSection from "../components/docs/DocsSection";
import CodeBlock from "../components/docs/CodeBlock";

import LInput from "../lib/ui/LInput";
import LTextarea from "../lib/ui/LTextarea";
import LCard from "../lib/ui/LCard";
import LButton from "../lib/ui/LButton";

export default function Forms() {
  return (
    <DocsLayout>
      <div className="max-w-6xl mx-auto space-y-16">

        <div>
          <h1 className="text-5xl font-bold mb-4">
            Forms
          </h1>

          <p className="text-zinc-600 text-lg">
            Premium form components built for
            dashboards, SaaS products and modern web apps.
          </p>
        </div>

        <DocsSection title="LInput Preview">

          <LCard>
            <LInput placeholder="Enter your email..." />
          </LCard>

        </DocsSection>

        <DocsSection title="LInput Usage">

          <CodeBlock
            code={`<LInput
  placeholder="Enter your email..."
/>`}
          />

        </DocsSection>

        <DocsSection title="LTextarea Preview">

          <LCard>
            <LTextarea
              placeholder="Write your message..."
            />
          </LCard>

        </DocsSection>

        <DocsSection title="LTextarea Usage">

          <CodeBlock
            code={`<LTextarea
  placeholder="Write your message..."
/>`}
          />

        </DocsSection>

        <DocsSection title="Example Form">

          <LCard>

            <div className="space-y-4">

              <LInput
                placeholder="Your Name"
              />

              <LInput
                placeholder="Email Address"
              />

              <LTextarea
                placeholder="Message"
              />

              <LButton>
                Send Message
              </LButton>

            </div>

          </LCard>

        </DocsSection>

        <DocsSection title="Props">

          <LCard>

            <div className="space-y-6">

              <div>
                <h3 className="font-medium">
                  placeholder
                </h3>

                <p className="text-zinc-600">
                  Placeholder text.
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  className
                </h3>

                <p className="text-zinc-600">
                  Extend styling with Tailwind classes.
                </p>
              </div>

            </div>

          </LCard>

        </DocsSection>

      </div>
    </DocsLayout>
  );
}