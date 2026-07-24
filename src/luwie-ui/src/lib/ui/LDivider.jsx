export default function LDivider({
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        h-px
        bg-zinc-200
        ${className}
      `}
    />
  );
}