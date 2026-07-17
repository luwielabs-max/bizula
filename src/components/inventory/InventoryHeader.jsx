import { LButton } from "../../luwie-ui/src";

export default function InventoryHeader({
  onCreateProduct,
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-zinc-900">
          Inventory
        </h1>

        <p className="mt-2 text-zinc-500">
          Manage products, stock levels and inventory across your business.
        </p>

      </div>

      <div className="flex gap-3">

        <LButton onClick={onCreateProduct}>
          Add Product
        </LButton>

      </div>

    </div>
  );
}