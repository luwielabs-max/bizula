import { useEffect, useMemo, useState } from "react";

import { getPayments } from "../../data/payments";

import PaymentsHeader from "../../components/payments/PaymentsHeader";
import PaymentsStats from "../../components/payments/PaymentsStats";
import PaymentsFilters from "../../components/payments/PaymentsFilters";
import PaymentsTable from "../../components/payments/PaymentsTable";
import PaymentDetailsDrawer from "../../components/payments/PaymentDetailsDrawer";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("All Sources");
  const [paymentMethod, setPaymentMethod] = useState("All Methods");
  const [status, setStatus] = useState("All Status");
  const [date, setDate] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const refreshPayments = () => {
    const data = getPayments();
    setPayments(data);

    if (selectedPayment) {
      setSelectedPayment(data.find((payment) => payment.id === selectedPayment.id) || null);
    }
  };

  useEffect(() => {
    refreshPayments();
  }, []);

  const filteredPayments = useMemo(() => {
    const normalizedSearch = search.toLowerCase();

    return payments.filter((payment) => {
      const matchesSearch =
        `${payment.customerName} ${payment.reference} ${payment.relatedReference}`
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesSource = source === "All Sources" || payment.source === source;
      const matchesMethod = paymentMethod === "All Methods" || payment.paymentMethod === paymentMethod;
      const matchesStatus = status === "All Status" || payment.status === status;
      const matchesDate = !date || payment.date === date;

      return matchesSearch && matchesSource && matchesMethod && matchesStatus && matchesDate;
    });
  }, [payments, search, source, paymentMethod, status, date]);

  return (
    <div className="space-y-10">
      <PaymentsHeader onRefresh={refreshPayments} />

      <PaymentsStats payments={filteredPayments} />

      <PaymentsFilters
        payments={filteredPayments}
        search={search}
        setSearch={setSearch}
        source={source}
        setSource={setSource}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
      />

      <PaymentsTable payments={filteredPayments} onSelect={setSelectedPayment} />

      <PaymentDetailsDrawer
        payment={selectedPayment}
        open={!!selectedPayment}
        onClose={() => setSelectedPayment(null)}
      />
    </div>
  );
}