export default function AuthDivider() {
  return (
    <div className="flex items-center gap-4 py-6">
      <div className="flex-1 h-px bg-zinc-200" />

      <span className="text-sm text-zinc-500 whitespace-nowrap">
        or continue with email
      </span>

      <div className="flex-1 h-px bg-zinc-200" />
    </div>
  );
}