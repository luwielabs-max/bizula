import { X } from "lucide-react";

import { LButton, LInput } from "../../luwie-ui/src";

export default function CreateSaleDrawer({
  open,
  onClose,
  products,
  customerName,
  customerPhone,
  productId,
  quantity,
  paymentMethod,
  error,
  onCustomerNameChange,
  onCustomerPhoneChange,
  onProductChange,
  onQuantityChange,
  onPaymentMethodChange,
  onCreate,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Create Sale</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Record a manual walk-in sale and deduct stock immediately.
            </p>
          </div>

          <button
            type="button"
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
            onChange={(event) => onCustomerNameChange(event.target.value)}
            placeholder="Enter customer name"
          />

          <LInput
            label="Phone"
            type="text"
            value={customerPhone}
            onChange={(event) => onCustomerPhoneChange(event.target.value)}
            placeholder="Enter phone number"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">Product</label>
            <select
              value={productId}
              onChange={(event) => onProductChange(event.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
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

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">Payment method</label>
            <select
              value={paymentMethod}
              onChange={(event) => onPaymentMethodChange(event.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Transfer">Transfer</option>
            </select>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex justify-end gap-3">
            <LButton variant="secondary" onClick={onClose}>
              Cancel
            </LButton>
            <LButton type="submit">Create Sale</LButton>
          </div>
        </form>
      </div>
    </div>
  );
}
