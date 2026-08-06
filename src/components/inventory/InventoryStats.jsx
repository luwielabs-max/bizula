import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

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
      value: inventoryValue,
      money: true,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <p className="text-sm text-zinc-500">{stat.title}</p>

          <h2
            className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
            title={typeof stat.value === "number" ? stat.value.toLocaleString() : String(stat.value)}
          >
            {stat.money ? formatCurrencyValue(stat.value) : formatCompactNumber(stat.value)}
          </h2>
        </div>
      ))}
    </div>
  );
}