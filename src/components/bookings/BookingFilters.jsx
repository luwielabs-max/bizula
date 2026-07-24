import { Search, CalendarDays, Filter } from "lucide-react";

export default function BookingFilters() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      {/* Search */}

      <div className="relative w-full lg:max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <input
          type="text"
          placeholder="Search bookings..."
          className="
            w-full
            rounded-2xl
            border
            border-zinc-200
            bg-white
            py-3
            pl-11
            pr-4
            outline-none
            transition
            focus:border-black
          "
        />

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-3">

        <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 transition hover:border-black">

          <Filter size={18} />

          Status

        </button>

        <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 transition hover:border-black">

          <CalendarDays size={18} />

          Date

        </button>

      </div>

    </div>
  );
}