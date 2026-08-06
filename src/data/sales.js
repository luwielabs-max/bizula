import {
  getProductById,
  deductStock,
  increaseStock,
} from "./inventory";

let sales = [];

/**
 * Converts formatted currency to a number.
 */
function parseCurrency(value) {
  if (typeof value === "number") return value;

  return Number(
    String(value)
      .replace("₦", "")
      .replace(/,/g, "")
  );
}

/**
 * Creates a sale record.
 */
function createSaleRecord({
  customerName,
  customerPhone,
  productId,
  productName,
  quantity,
  unitPrice,
  paymentMethod,
  source,
  orderId = null,
}) {
  const price = parseCurrency(unitPrice);
  const total = price * quantity;

  const newSale = {
    id: Date.now(),
    customerName,
    customerPhone,
    productId,
    productName,
    quantity,
    unitPrice: price,
    total,
    paymentMethod,
    status: "Completed",
    source,
    orderId,
    createdAt: new Date().toISOString(),
  };

  sales.push(newSale);

  return newSale;
}

/**
 * Get all sales.
 */
export function getSales() {
  return [...sales];
}

/**
 * Get one sale.
 */
export function getSaleById(id) {
  return sales.find((sale) => sale.id === id);
}

/**
 * Delete a sale.
 */
export function deleteSale(id) {
  sales = sales.filter((sale) => sale.id !== id);
}

/**
 * Create a walk-in/manual sale.
 */
export function createManualSale({
  customerName,
  customerPhone,
  productId,
  quantity,
  paymentMethod = "Cash",
}) {
  const product = getProductById(productId);

  if (!product) {
    throw new Error("Product not found.");
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer.");
  }

  deductStock(product.id, quantity);

  return createSaleRecord({
    customerName,
    customerPhone,
    productId: product.id,
    productName: product.name,
    quantity,
    unitPrice: product.sellingPrice,
    paymentMethod,
    source: "Manual",
  });
}

/**
 * Generate a sale from a completed order.
 * Inventory should already have been deducted
 * during the order completion workflow.
 */
export function createSaleFromOrder(order) {
  if (!order) {
    throw new Error("Order is required.");
  }

  const existingSale = sales.find(
    (sale) => sale.orderId === order.id
  );

  if (existingSale) {
    return existingSale;
  }

  const product = getProductById(order.productId);

  if (!product) {
    throw new Error("Product not found.");
  }

  return createSaleRecord({
    customerName: order.customerName,
    customerPhone: order.customerPhone,
    productId: order.productId,
    productName: order.productName || product.name,
    quantity: order.quantity,
    unitPrice: product.sellingPrice,
    paymentMethod: order.paymentMethod || "Cash",
    source: "Order",
    orderId: order.id,
  });
}

/**
 * Refund a sale.
 */
export function refundSale(id) {
  const sale = getSaleById(id);

  if (!sale) {
    throw new Error("Sale not found.");
  }

  if (sale.status === "Refunded") {
    return sale;
  }

  sale.status = "Refunded";

  increaseStock(sale.productId, sale.quantity);

  return sale;
}