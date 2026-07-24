export default function InventoryTable({
  products,
  onSelect,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-200 bg-zinc-50">

            <tr className="text-left text-sm font-semibold text-zinc-600">

              <th className="px-6 py-4">Product</th>

              <th className="px-6 py-4">SKU</th>

              <th className="px-6 py-4">Category</th>

              <th className="px-6 py-4">Stock</th>

              <th className="px-6 py-4">Reserved</th>

              <th className="px-6 py-4">Available</th>

              <th className="px-6 py-4">Selling Price</th>

              <th className="px-6 py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => {

              const available =
                product.stock - product.reservedStock;

              return (
                <tr
                  key={product.id}
                  onClick={() => onSelect(product)}
                  className="cursor-pointer border-b border-zinc-100 transition hover:bg-zinc-50"
                >

                  <td className="px-6 py-5 font-medium text-zinc-900">
                    {product.name}
                  </td>

                  <td className="px-6 py-5 text-zinc-600">
                    {product.sku}
                  </td>

                  <td className="px-6 py-5 text-zinc-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-5">
                    {product.stock}
                  </td>

                  <td className="px-6 py-5">
                    {product.reservedStock}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {available}
                  </td>

                  <td className="px-6 py-5">
                    {product.sellingPrice}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}