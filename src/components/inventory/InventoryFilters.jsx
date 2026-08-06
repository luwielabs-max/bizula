export default function InventoryFilters({
  products,
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) {
  const categories = [...new Set(
    products
      .map((product) => product.category)
      .filter(Boolean)
  )].sort();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:flex-row lg:items-center lg:justify-between">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black lg:max-w-sm"
      />

      <div className="flex flex-wrap gap-3">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="min-w-[180px] flex-1 basis-[calc(50%-0.75rem)] rounded-xl border border-zinc-200 px-4 py-3 sm:basis-auto"
        >
          <option>All Categories</option>
          {categories.map((productCategory) => (
            <option key={productCategory}>
              {productCategory}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="min-w-[180px] flex-1 basis-[calc(50%-0.75rem)] rounded-xl border border-zinc-200 px-4 py-3 sm:basis-auto"
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
