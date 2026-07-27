import { X } from "lucide-react";

import { LButton, LInput } from "../../luwie-ui/src";

export default function CreateOrderDrawer({
  open,
  onClose,
  products,
  customerName,
  productId,
  quantity,
  selectedProduct,
  amount,
  commitmentFee,
  error,
  onCustomerChange,
  onProductChange,
  onQuantityChange,
  onCreate,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Create Order</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Add a customer order and calculate the expected commitment fee.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-zinc-100"
          >
            <X size={20} className="text-zinc-600" />
          </button>
        </div>

        <form className="mt-8 space-y-5" onSubmit={onCreate}>
          <LInput
            label="Customer"
            type="text"
            value={customerName}
            onChange={(event) => onCustomerChange(event.target.value)}
            placeholder="Enter customer name"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Product
            </label>
            <select
              value={productId}
              onChange={(event) => onProductChange(event.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none text-zinc-900 focus:border-zinc-400 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <LInput
            label="Quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => onQuantityChange(Number(event.target.value))}
          />

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Selected product</span>
              <span className="font-medium text-zinc-900">
                {selectedProduct ? selectedProduct.name : "—"}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-zinc-500">Amount</span>
              <span className="font-medium text-zinc-900">
                {selectedProduct ? `₦${amount.toLocaleString()}` : "₦0"}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-zinc-500">Commitment fee</span>
              <span className="font-medium text-zinc-900">
                {selectedProduct ? `₦${commitmentFee.toLocaleString()}` : "₦0"}
              </span>
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex justify-end gap-3">
            <LButton variant="secondary" onClick={onClose}>
              Cancel
            </LButton>
            <LButton type="submit">Create Order</LButton>
          </div>
        </form>
      </div>
    </div>
  );
}