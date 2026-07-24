export default function LBadge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
  default:
    "bg-zinc-100/80 backdrop-blur-md text-zinc-700 border border-zinc-200",

  success:
    "bg-green-50 text-green-700 border border-green-200",

  warning:
    "bg-yellow-50 text-yellow-700 border border-yellow-200",

  danger:
    "bg-red-50 text-red-700 border border-red-200",

  info:
    "bg-blue-50 text-blue-700 border border-blue-200",
};

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        tracking-tight
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}