import { useState } from "react";

import bookings from "../../data/bookings";

import BookingHeader from "../../components/bookings/BookingHeader";
import BookingStats from "../../components/bookings/BookingStats";
import BookingFilters from "../../components/bookings/BookingFilters";
import BookingTable from "../../components/bookings/BookingTable";
import BookingDetailsDrawer from "../../components/bookings/BookingDetailsDrawer";
import CreateBookingDrawer from "../../components/bookings/CreateBookingDrawer";
import BookingLinkDrawer from "../../components/bookings/BookingLinkDrawer";

export default function Bookings() {

  const [selectedBooking, setSelectedBooking] = useState(null);
 const [isCreateOpen, setIsCreateOpen] = useState(false);
 const [isBookingLinkOpen, setIsBookingLinkOpen] = useState(false);

  return (
  <div className="space-y-10">

    <BookingHeader
    onCreateBooking={() => setIsCreateOpen(true)}
    onOpenBookingLink={() => setIsBookingLinkOpen(true)}
/>

    <BookingStats />

    <BookingFilters />

    <BookingTable
      bookings={bookings}
      onSelect={setSelectedBooking}
    />

    <BookingDetailsDrawer
      booking={selectedBooking}
      open={!!selectedBooking}
      onClose={() => setSelectedBooking(null)}
    />

    <CreateBookingDrawer
      open={isCreateOpen}
      onClose={() => setIsCreateOpen(false)}
    />

  <BookingLinkDrawer
    open={isBookingLinkOpen}
    onClose={() => setIsBookingLinkOpen(false)}
/>
  </div>
);
}