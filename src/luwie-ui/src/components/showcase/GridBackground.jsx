export default function GridBackground() {
  return (
    <>
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]

        bg-[size:60px_60px]

        opacity-30
      "
      />

      <div
        className="
        absolute
        top-1/2
        left-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-zinc-300/20

        blur-3xl
      "
      />
    </>
  );
}