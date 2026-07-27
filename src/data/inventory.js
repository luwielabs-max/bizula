let products = [
  {
    id: 1,
    name: "Premium Office Chair",
    sku: "INV-1001",
    category: "Furniture",
    sellingPrice: "₦120,000",
    costPrice: "₦90,000",
    stock: 25,
    reservedStock: 0,
    lowStockAlert: 5,
    status: "In Stock",
    createdAt: "2026-07-16",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    sku: "INV-1002",
    category: "Accessories",
    sellingPrice: "₦18,000",
    costPrice: "₦12,000",
    stock: 40,
    reservedStock: 0,
    lowStockAlert: 10,
    status: "In Stock",
    createdAt: "2026-07-16",
  },
];

function calculateStatus(product) {
  if (product.stock <= 0) {
    return "Out of Stock";
  }

  if (product.stock <= product.lowStockAlert) {
    return "Low Stock";
  }

  return "In Stock";
}

export function getProducts() {
  return [...products];
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function createProduct(product) {
  const newProduct = {
    ...product,
    id: Date.now(),
    reservedStock: 0,
    createdAt: new Date().toISOString().split("T")[0],
  };

  newProduct.status = calculateStatus(newProduct);

  products.push(newProduct);
}

export function updateProduct(id, updatedProduct) {
  products = products.map((product) => {
    if (product.id !== id) return product;

    const updated = {
      ...product,
      ...updatedProduct,
    };

    updated.status = calculateStatus(updated);

    return updated;
  });
}

export function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
}

export function deductStock(id, quantity) {
  const product = getProductById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer.");
  }

  const available = getAvailableStock(id);

  if (available < quantity) {
    throw new Error("Insufficient stock.");
  }

  product.stock -= quantity;
  product.status = calculateStatus(product);
}

export function increaseStock(id, quantity) {
  const product = getProductById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer.");
  }

  product.stock += quantity;
  product.status = calculateStatus(product);
}

export function reserveStock(id, quantity) {
  const product = getProductById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer.");
  }

  const available = getAvailableStock(id);

  if (available < quantity) {
    throw new Error("Insufficient stock.");
  }

  product.reservedStock += quantity;
}

export function releaseReservedStock(id, quantity) {
  const product = getProductById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer.");
  }

  product.reservedStock -= quantity;

  if (product.reservedStock < 0) {
    product.reservedStock = 0;
  }
}

export function getAvailableStock(id) {
  const product = getProductById(id);

  if (!product) return 0;

  return product.stock - product.reservedStock;
}