export default function InventoryFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 lg:flex-row lg:items-center lg:justify-between">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black lg:max-w-sm"
      />

      <div className="flex gap-3">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-zinc-200 px-4 py-3"
        >
          <option>All Categories</option>
          <option>Furniture</option>
          <option>Accessories</option>
          <option>Electronics</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-zinc-200 px-4 py-3"
        >
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>

      </div>

    </div>
  );
}