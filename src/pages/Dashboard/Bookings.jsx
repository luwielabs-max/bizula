import { useEffect, useState } from "react";

import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../../services/book/booking";

import BookingHeader from "../../components/bookings/BookingHeader";
import BookingStats from "../../components/bookings/BookingStats";
import BookingFilters from "../../components/bookings/BookingFilters";
import BookingTable from "../../components/bookings/BookingTable";
import BookingDetailsDrawer from "../../components/bookings/BookingDetailsDrawer";
import CreateBookingDrawer from "../../components/bookings/CreateBookingDrawer";
import BookingLinkDrawer from "../../components/bookings/BookingLinkDrawer";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  const [isCreateOpen, setIsCreateOpen] =
    useState(false);

  const [isBookingLinkOpen, setIsBookingLinkOpen] =
    useState(false);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // ==========================================
  // LOAD BOOKINGS
  // ==========================================

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getBookings();

      setBookings(data.bookings || []);

    } catch (error) {
      console.error(
        "Error loading bookings:",
        error
      );

      setError(
        error.message ||
          "Unable to load bookings"
      );
    } finally {
      setLoading(false);
    }
  };


  // ==========================================
  // LOAD WHEN PAGE OPENS
  // ==========================================

  useEffect(() => {
    loadBookings();
  }, []);


  // ==========================================
  // CREATE BOOKING
  // ==========================================

  const handleCreateBooking = async (
    booking
  ) => {
    try {
      setError("");

      await createBooking(booking);

      await loadBookings();

      setIsCreateOpen(false);

    } catch (error) {
      console.error(
        "Error creating booking:",
        error
      );

      setError(
        error.message ||
          "Unable to create booking"
      );
    }
  };


  // ==========================================
  // UPDATE BOOKING
  // ==========================================

  const handleUpdateBooking = async (
    id,
    updatedBooking
  ) => {
    try {
      setError("");

      await updateBooking(
        id,
        updatedBooking
      );

      await loadBookings();

      setSelectedBooking(null);

    } catch (error) {
      console.error(
        "Error updating booking:",
        error
      );

      setError(
        error.message ||
          "Unable to update booking"
      );
    }
  };


  // ==========================================
  // DELETE BOOKING
  // ==========================================

  const handleDeleteBooking = async (
    id
  ) => {
    try {
      setError("");

      await deleteBooking(id);

      await loadBookings();

      setSelectedBooking(null);

    } catch (error) {
      console.error(
        "Error deleting booking:",
        error
      );

      setError(
        error.message ||
          "Unable to delete booking"
      );
    }
  };


  return (
    <div className="space-y-10">

      <BookingHeader
        onCreateBooking={() =>
          setIsCreateOpen(true)
        }
        onOpenBookingLink={() =>
          setIsBookingLinkOpen(true)
        }
      />


      {/* Error */}

      {error && (
        <div
          className="
            rounded-2xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-600
          "
        >
          {error}
        </div>
      )}


      {/* Loading */}

      {loading ? (
        <div className="py-20 text-center">

          <p className="text-sm text-zinc-500">
            Loading bookings...
          </p>

        </div>
      ) : (
        <>
          <BookingStats
            bookings={bookings}
          />

          <BookingFilters />

          <BookingTable
            bookings={bookings}
            onSelect={setSelectedBooking}
          />
        </>
      )}


      {/* Booking Details */}

      <BookingDetailsDrawer
        booking={selectedBooking}
        open={!!selectedBooking}
        onClose={() =>
          setSelectedBooking(null)
        }

        onUpdate={handleUpdateBooking}

        onDelete={handleDeleteBooking}
      />


      {/* Create Booking */}

      <CreateBookingDrawer
        open={isCreateOpen}
        onClose={() =>
          setIsCreateOpen(false)
        }

        onCreate={handleCreateBooking}
      />


      {/* Booking Link */}

      <BookingLinkDrawer
        open={isBookingLinkOpen}
        onClose={() =>
          setIsBookingLinkOpen(false)
        }
      />

    </div>
  );
}