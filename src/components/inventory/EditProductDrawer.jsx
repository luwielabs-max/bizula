import { useEffect, useState } from "react";
import { X, Trash2 } from "lucide-react";
import { LButton } from "../../luwie-ui/src";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

export default function EditProductDrawer({
  open,
  product,
  onClose,
  onUpdate,
  onDelete,
}) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    sellingPrice: "",
    costPrice: "",
    stock: 0,
    lowStockAlert: 0,
  });

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (product) {
      setForm({
        ...product,
        sellingPrice: String(product.sellingPrice)
          .replace("₦", "")
          .replace(/,/g, ""),
        costPrice: String(product.costPrice)
          .replace("₦", "")
          .replace(/,/g, ""),
      });
    }
  }, [product]);

  if (!open || !product) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onUpdate(product.id, {
      ...form,
      sellingPrice: `₦${Number(form.sellingPrice).toLocaleString()}`,
      costPrice: `₦${Number(form.costPrice).toLocaleString()}`,
      stock: Number(form.stock),
      lowStockAlert: Number(form.lowStockAlert),
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-zinc-200 p-6">

          <div>
            <h2 className="text-2xl font-bold">
              Edit Product
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Update product information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-zinc-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-5 p-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                SKU
              </label>

              <input
                name="sku"
                value={form.sku}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Selling Price
              </label>

              <input
                type="number"
                name="sellingPrice"
                value={form.sellingPrice}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Cost Price
              </label>

              <input
                type="number"
                name="costPrice"
                value={form.costPrice}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Low Stock Alert
              </label>

              <input
                type="number"
                name="lowStockAlert"
                value={form.lowStockAlert}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

        </div>

        <div className="sticky bottom-0 flex items-center justify-between border-t border-zinc-200 bg-white p-6">

          <button
            onClick={() => setShowDelete(true)}
            className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
            Delete Product
          </button>

          <div className="flex gap-3">

            <LButton
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </LButton>

            <LButton onClick={handleSave}>
              Save Changes
            </LButton>

          </div>

        </div>

      </div>

      <ConfirmDeleteModal
  open={showDelete}
  title="Delete Product"
  message={`Are you sure you want to delete "${product.name}"? This action cannot be undone.`}
  onClose={() => setShowDelete(false)}
  onConfirm={() => {
    onDelete(product.id);
    setShowDelete(false);
    onClose();
  }}
/>
    </>
  );
}