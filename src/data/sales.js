import {
  getProductById,
  deductStock,
} from "./inventory";

let sales = [];

export function getSales() {
  return [...sales];
}

export function getSaleById(id) {
  return sales.find((sale) => sale.id === id);
}

export function createSale(sale) {
  const product = getProductById(sale.productId);

  if (!product) return;

  deductStock(product.id, sale.quantity);

  const total = Number(
    product.sellingPrice.replace("₦", "").replace(/,/g, "")
  ) * sale.quantity;

  const newSale = {
    id: Date.now(),
    customerName: sale.customerName,
    customerPhone: sale.customerPhone,
    productId: product.id,
    productName: product.name,
    quantity: sale.quantity,
    unitPrice: product.sellingPrice,
    total,
    paymentMethod: sale.paymentMethod,
    status: "Completed",
    createdAt: new Date().toISOString().split("T")[0],
  };

  sales.push(newSale);
}

export function refundSale(id) {
  const sale = getSaleById(id);

  if (!sale) return;

  sale.status = "Refunded";
}