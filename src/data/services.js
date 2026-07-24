let services = [
  {
    id: 1,
    name: "Website Consultation",
    description: "Professional consultation for websites and digital products.",
    category: "Consultation",
    duration: "60 mins",
    price: "₦15,000",
    reservationFee: "₦5,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Brand Identity",
    description: "Complete branding package including logo and brand guidelines.",
    category: "Branding",
    duration: "90 mins",
    price: "₦35,000",
    reservationFee: "₦10,000",
    status: "Active",
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Modern interface and user experience design.",
    category: "Design",
    duration: "120 mins",
    price: "₦50,000",
    reservationFee: "₦15,000",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Product Audit",
    description: "Review your product and receive recommendations.",
    category: "Audit",
    duration: "45 mins",
    price: "₦20,000",
    reservationFee: "₦5,000",
    status: "Active",
  },
];

export function getServices() {
  return [...services];
}

export function createService(service) {
  services.push({
    id: Date.now(),
    ...service,
  });

  return getServices();
}

export function updateService(id, updatedData) {
  services = services.map((service) =>
    service.id === id
      ? { ...service, ...updatedData }
      : service
  );

  return getServices();
}

export function deleteService(id) {
  services = services.filter(
    (service) => service.id !== id
  );

  return getServices();
}