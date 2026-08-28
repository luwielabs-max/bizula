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

  const [loading, setLoading] = useState(true);

  // ==========================================
  // LOAD SERVICES
  // ==========================================

  const loadServices = async () => {
    try {
      setLoading(true);

      const data = await getServices();

      setServices(data);

    } catch (error) {
      console.error(
        "Error loading services:",
        error
      );

      alert(error.message);

    } finally {
      setLoading(false);
    }
  };


  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadServices();
  }, []);


  // ==========================================
  // CREATE SERVICE
  // ==========================================

  const handleCreateService = async (service) => {
    try {
      await createService(service);

      await loadServices();

      setIsCreateOpen(false);

    } catch (error) {
      console.error(
        "Error creating service:",
        error
      );

      alert(error.message);
    }
  };


  // ==========================================
  // UPDATE SERVICE
  // ==========================================

  const handleUpdateService = async (
    id,
    updatedService
  ) => {
    try {
      await updateService(
        id,
        updatedService
      );

      await loadServices();

      setSelectedService(null);

    } catch (error) {
      console.error(
        "Error updating service:",
        error
      );

      alert(error.message);
    }
  };


  // ==========================================
  // DELETE SERVICE
  // ==========================================

  const handleDeleteService = async (id) => {
    try {
      await deleteService(id);

      await loadServices();

      setSelectedService(null);

    } catch (error) {
      console.error(
        "Error deleting service:",
        error
      );

      alert(error.message);
    }
  };


  return (
    <div className="space-y-10">

      <ServiceHeader
        onCreateService={() =>
          setIsCreateOpen(true)
        }
      />


      {loading ? (

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center">
          <p className="text-zinc-500">
            Loading services...
          </p>
        </div>

      ) : (

        <>

          <ServiceStats
            services={services}
          />


          <ServiceFilters />


          <ServiceTable
            services={services}
            onSelect={setSelectedService}
          />

        </>

      )}


      <CreateServiceDrawer
        open={isCreateOpen}
        onClose={() =>
          setIsCreateOpen(false)
        }
        onCreate={handleCreateService}
      />


      <EditServiceDrawer
        open={!!selectedService}
        service={selectedService}
        onClose={() =>
          setSelectedService(null)
        }
        onUpdate={handleUpdateService}
        onDelete={handleDeleteService}
      />

    </div>
  );
}