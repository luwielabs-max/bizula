import { useEffect, useMemo, useState } from "react";

import { getProducts } from "../../data/inventory";
import {
  createManualSale,
  getSales,
  refundSale,
} from "../../data/sales";

import SalesHeader from "../../components/sales/SalesHeader";
import SalesStats from "../../components/sales/SalesStats";
import SalesFilters from "../../components/sales/SalesFilters";
import SalesTable from "../../components/sales/SalesTable";
import CreateSaleDrawer from "../../components/sales/CreateSaleDrawer";
import SaleDetailsDrawer from "../../components/sales/SaleDetailsDrawer";

export default function Sales() {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [paymentMethod, setPaymentMethod] = useState("All Payment Methods");
  const [selectedSale, setSelectedSale] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethodValue, setPaymentMethodValue] = useState("Cash");
  const [error, setError] = useState("");

  const refreshSales = () => {
    const data = getSales();
    setSales(data);
    if (selectedSale) {
      setSelectedSale(data.find((sale) => sale.id === selectedSale.id) || null);
    }
  };

  useEffect(() => {
    refreshSales();
    setProducts(getProducts());
  }, []);

  const filteredSales = useMemo(() => {
    const normalizedSearch = search.toLowerCase();

    return sales.filter((sale) => {
      const matchesSearch =
        `${sale.customerName} ${sale.productName} ${sale.paymentMethod || ""}`
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus = status === "All Status" || sale.status === status;
      const matchesPayment =
        paymentMethod === "All Payment Methods" || sale.paymentMethod === paymentMethod;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }, [sales, search, status, paymentMethod]);

  const resetForm = () => {
    setCustomerName("");
    setCustomerPhone("");
    setProductId("");
    setQuantity(1);
    setPaymentMethodValue("Cash");
    setError("");
  };

  const handleCreateSale = (event) => {
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

    try {
      createManualSale({
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        productId: Number(productId),
        quantity: parsedQuantity,
        paymentMethod: paymentMethodValue,
      });
      refreshSales();
      setIsCreateOpen(false);
      resetForm();
      setError("");
    } catch (error) {
      setError(error?.message || "Unable to create sale.");
    }
  };

  const handleRefundSale = () => {
    if (!selectedSale) return;

    try {
      refundSale(selectedSale.id);
      refreshSales();
      setError("");
    } catch (error) {
      setError(error?.message || "Unable to refund sale.");
    }
  };

  return (
    <div className="space-y-10">
      <SalesHeader onCreateSale={() => setIsCreateOpen(true)} />

      <SalesStats sales={filteredSales} />

      <SalesFilters
        sales={filteredSales}
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <SalesTable sales={filteredSales} onSelect={setSelectedSale} />

      <CreateSaleDrawer
        open={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false);
          setError("");
        }}
        products={products}
        customerName={customerName}
        customerPhone={customerPhone}
        productId={productId}
        quantity={quantity}
        paymentMethod={paymentMethodValue}
        error={error}
        onCustomerNameChange={setCustomerName}
        onCustomerPhoneChange={setCustomerPhone}
        onProductChange={setProductId}
        onQuantityChange={setQuantity}
        onPaymentMethodChange={setPaymentMethodValue}
        onCreate={handleCreateSale}
      />

      <SaleDetailsDrawer
        sale={selectedSale}
        open={!!selectedSale}
        onClose={() => {
          setSelectedSale(null);
          setError("");
        }}
        onRefund={handleRefundSale}
        error={error}
      />
    </div>
  );
}