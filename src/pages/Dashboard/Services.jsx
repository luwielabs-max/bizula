import { useEffect, useState } from "react";

import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../../data/services";

import ServiceHeader from "../../components/services/ServiceHeader";
import ServiceStats from "../../components/services/ServiceStats";
import ServiceFilters from "../../components/services/ServiceFilters";
import ServiceTable from "../../components/services/ServiceTable";
import CreateServiceDrawer from "../../components/services/CreateServiceDrawer";
import EditServiceDrawer from "../../components/services/EditServiceDrawer";

export default function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    setServices(getServices());
  }, []);

  const refreshServices = () => {
    setServices(getServices());
  };

  const handleCreateService = (service) => {
    createService(service);
    refreshServices();
    setIsCreateOpen(false);
  };

  const handleUpdateService = (id, updatedService) => {
    updateService(id, updatedService);
    refreshServices();
    setSelectedService(null);
  };

  const handleDeleteService = (id) => {
    deleteService(id);
    refreshServices();
    setSelectedService(null);
  };

  return (
    <div className="space-y-10">

      <ServiceHeader
        onCreateService={() => setIsCreateOpen(true)}
      />

      <ServiceStats services={services} />

      <ServiceFilters />

      <ServiceTable
        services={services}
        onSelect={setSelectedService}
      />

      <CreateServiceDrawer
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={handleCreateService}
      />

      <EditServiceDrawer
        open={!!selectedService}
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onUpdate={handleUpdateService}
        onDelete={handleDeleteService}
      />

    </div>
  );
}