export default function LStack({
  children,
  gap = "md",
  className = "",
}) {
  const gaps = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  return (
    <div
      className={`
        flex
        flex-col
        ${gaps[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}