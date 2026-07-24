export default function LContainer({
  children,
  size = "lg",
  className = "",
}) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
  };

  return (
    <div
      className={`
        mx-auto
        px-4
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}