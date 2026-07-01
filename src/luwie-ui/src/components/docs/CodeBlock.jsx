import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="
          absolute
          right-4
          top-4

          p-2

          rounded-xl

          hover:bg-zinc-800

          transition
        "
      >
        {copied ? (
          <Check size={16} />
        ) : (
          <Copy size={16} />
        )}
      </button>

      <pre
        className="
          bg-zinc-950
          text-zinc-100

          p-6

          rounded-3xl

          overflow-x-auto

          text-sm
        "
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}