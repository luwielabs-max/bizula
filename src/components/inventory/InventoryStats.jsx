export default function InventoryStats({
  products,
}) {
  const totalProducts = products.length;

  const inStock = products.filter(
    (product) => product.status === "In Stock"
  ).length;

  const lowStock = products.filter(
    (product) => product.status === "Low Stock"
  ).length;

  const outOfStock = products.filter(
    (product) => product.status === "Out of Stock"
  ).length;

  const inventoryValue = products.reduce((sum, product) => {
    const price = Number(
      product.sellingPrice
        .replace("₦", "")
        .replace(/,/g, "")
    );

    return sum + price * product.stock;
  }, 0);

  const stats = [
    {
      title: "Products",
      value: totalProducts,
    },
    {
      title: "In Stock",
      value: inStock,
    },
    {
      title: "Low Stock",
      value: lowStock,
    },
    {
      title: "Inventory Value",
      value: `₦${inventoryValue.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-zinc-200 bg-white p-6"
        >
          <p className="text-sm text-zinc-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900">
            {stat.value}
          </h2>
        </div>
      ))}

    </div>
  );
}