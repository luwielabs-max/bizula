import { useEffect, useState } from "react";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../data/inventory";

import InventoryHeader from "../../components/inventory/InventoryHeader";
import InventoryStats from "../../components/inventory/InventoryStats";
import InventoryFilters from "../../components/inventory/InventoryFilters";
import InventoryTable from "../../components/inventory/InventoryTable";
import CreateProductDrawer from "../../components/inventory/CreateProductDrawer";
import EditProductDrawer from "../../components/inventory/EditProductDrawer";

export default function Inventory() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    refreshProducts();
  }, []);

  const refreshProducts = () => {
    setProducts(getProducts());
  };

  const handleCreateProduct = (product) => {
    createProduct(product);
    refreshProducts();
    setIsCreateOpen(false);
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    updateProduct(id, updatedProduct);
    refreshProducts();
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    refreshProducts();
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.sku.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All Categories" ||
    product.category === category;

  const matchesStatus =
    status === "All Status" ||
    product.status === status;

  return (
    matchesSearch &&
    matchesCategory &&
    matchesStatus
  );
});

  return (
    <div className="space-y-10">

      <InventoryHeader
        onCreateProduct={() => setIsCreateOpen(true)}
      />

      <InventoryStats products={filteredProducts} />

      <InventoryFilters
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      status={status}
      setStatus={setStatus}
    />

      <InventoryTable
        products={products}
        onSelect={setSelectedProduct}
      />

      <CreateProductDrawer
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={handleCreateProduct}
      />

      <EditProductDrawer
        open={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onUpdate={handleUpdateProduct}
        onDelete={handleDeleteProduct}
      />

    </div>
  );
}