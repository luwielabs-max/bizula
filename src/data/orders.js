import {
  getProductById,
  reserveStock,
  releaseReservedStock,
  deductStock,
} from "./inventory";

let orders = [];

export function getOrders() {
  return [...orders];
}

export function getOrderById(id) {
  return orders.find((order) => order.id === id);
}

export function createOrder(order) {
  const product = getProductById(order.productId);

  if (!product) return;

  const newOrder = {
    id: Date.now(),
    customerName: order.customerName,
    customerPhone: order.customerPhone,
    productId: order.productId,
    productName: product.name,
    quantity: order.quantity,
    amount: order.amount,
    commitmentFee: order.commitmentFee,
    balance: order.amount - order.commitmentFee,
    paymentStatus: "Pending",
    status: "Pending",
    createdAt: new Date().toISOString().split("T")[0],
  };

  orders.push(newOrder);
}

export function confirmOrder(id) {
  const order = getOrderById(id);

  if (!order) return;

  reserveStock(order.productId, order.quantity);

  order.paymentStatus = "Commitment Paid";
  order.status = "Confirmed";
}

export function completeOrder(id) {
  const order = getOrderById(id);

  if (!order) return;

  releaseReservedStock(order.productId, order.quantity);

  deductStock(order.productId, order.quantity);

  order.paymentStatus = "Paid";
  order.status = "Completed";
}

export function cancelOrder(id) {
  const order = getOrderById(id);

  if (!order) return;

  if (order.status === "Confirmed") {
    releaseReservedStock(order.productId, order.quantity);
  }

  order.status = "Cancelled";
}

export function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}