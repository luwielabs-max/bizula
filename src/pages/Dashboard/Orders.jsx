import { useEffect, useState } from "react";

import { getProducts } from "../../data/inventory";
import {
  confirmOrder,
  completeOrder,
  cancelOrder,
  createOrder,
  deleteOrder,
  getOrders,
} from "../../data/orders";
import { createSaleFromOrder } from "../../data/sales";

import OrderHeader from "../../components/orders/OrderHeader";
import OrderStats from "../../components/orders/OrderStats";
import OrderFilters from "../../components/orders/OrderFilters";
import OrderTable from "../../components/orders/OrderTable";
import CreateOrderDrawer from "../../components/orders/CreateOrderDrawer";
import OrderDetailsDrawer from "../../components/orders/OrderDetailsDrawer";

function parseCurrency(value) {
  if (!value) return 0;

  return Number(String(value).replace("₦", "").replace(/,/g, ""));
}

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [orderError, setOrderError] = useState("");
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const refreshOrders = () => {
    const data = getOrders();
    setOrders(data);
    if (selectedOrder) {
      setSelectedOrder(
        data.find((order) => order.id === selectedOrder.id) || null
      );
    }
  };

  useEffect(() => {
    refreshOrders();
    setProducts(getProducts());
  }, []);

  const selectedProduct = products.find(
    (product) => product.id === Number(productId)
  );
  const unitPrice = selectedProduct ? parseCurrency(selectedProduct.sellingPrice) : 0;
  const amount = unitPrice * Number(quantity || 0);
  const commitmentFee = amount > 0 ? Math.round(amount * 0.1) : 0;

  const filteredOrders = orders.filter((order) => {
    const searchValue = `${order.customerName} ${order.productName} ${order.status}`.toLowerCase();
    const matchesSearch = searchValue.includes(search.toLowerCase());

    const matchesStatus = status === "All Status" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  const resetForm = () => {
    setCustomerName("");
    setProductId("");
    setQuantity(1);
    setError("");
  };

  const handleCreateOrder = (event) => {
    event.preventDefault();

    if (!customerName.trim()) {
      setError("Customer name is required.");
      return;
    }

    if (!productId) {
      setError("Please select a product.");
      return;
    }

    const parsedQuantity = Number(quantity);

    if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
      setError("Quantity must be a positive whole number.");
      return;
    }

    if (!selectedProduct) {
      setError("Please select a valid product.");
      return;
    }

    createOrder({
      customerName: customerName.trim(),
      customerPhone: "",
      productId: Number(productId),
      quantity: parsedQuantity,
      amount,
      commitmentFee,
    });

    refreshOrders();
    setIsCreateOpen(false);
    resetForm();
  };

  const handleConfirmOrder = () => {
    if (!selectedOrder || selectedOrder.status !== "Pending") return;

    try {
      confirmOrder(selectedOrder.id);
      setOrderError("");
    } catch (error) {
      setOrderError(error?.message || "Unable to confirm order.");
    }

    refreshOrders();
  };

  const handleCompleteOrder = () => {
    if (!selectedOrder || selectedOrder.status !== "Confirmed") return;

    try {
      completeOrder(selectedOrder.id);
      createSaleFromOrder(selectedOrder);
      setOrderError("");
    } catch (error) {
      setOrderError(error?.message || "Unable to complete order.");
    }

    refreshOrders();
  };

  const handleCancelOrder = () => {
    if (!selectedOrder) return;
    if (!["Pending", "Confirmed"].includes(selectedOrder.status)) return;

    cancelOrder(selectedOrder.id);
    refreshOrders();
  };

  const handleDeleteOrder = () => {
    if (!selectedOrder || selectedOrder.status === "Completed") return;

    deleteOrder(selectedOrder.id);
    setDeleteConfirmOpen(false);
    setSelectedOrder(null);
    refreshOrders();
  };

  return (
    <div className="space-y-10">
      <OrderHeader onCreateOrder={() => setIsCreateOpen(true)} />

      <OrderStats orders={filteredOrders} />

      <OrderFilters
        orders={orders}
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <OrderTable orders={filteredOrders} onSelect={setSelectedOrder} />

      {orderError ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {orderError}
        </div>
      ) : null}

      <CreateOrderDrawer
        open={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false);
          setError("");
        }}
        products={products}
        customerName={customerName}
        productId={productId}
        quantity={quantity}
        selectedProduct={selectedProduct}
        amount={amount}
        commitmentFee={commitmentFee}
        error={error}
        onCustomerChange={setCustomerName}
        onProductChange={setProductId}
        onQuantityChange={setQuantity}
        onCreate={handleCreateOrder}
      />

      <OrderDetailsDrawer
        order={selectedOrder}
        open={!!selectedOrder}
        onClose={() => {
          setSelectedOrder(null);
          setOrderError("");
        }}
        error={orderError}
        onConfirm={handleConfirmOrder}
        onComplete={handleCompleteOrder}
        onCancel={handleCancelOrder}
        onRequestDelete={() => setDeleteConfirmOpen(true)}
        deleteConfirmOpen={deleteConfirmOpen}
        onDelete={handleDeleteOrder}
        onCloseDeleteConfirm={() => setDeleteConfirmOpen(false)}
      />
    </div>
  );
}