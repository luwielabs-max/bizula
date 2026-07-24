import { Search } from "lucide-react";

export default function ServiceFilters() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="grid gap-4 lg:grid-cols-4">
        {/* Search */}
        <div className="relative lg:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search services..."
            className="w-full rounded-xl border border-zinc-200 py-3 pl-11 pr-4 outline-none transition focus:border-black"
          />
        </div>

        {/* Category */}
        <select className="rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black">
          <option>All Categories</option>
          <option>Consultation</option>
          <option>Branding</option>
          <option>Design</option>
          <option>Audit</option>
        </select>

        {/* Status */}
        <select className="rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
    </div>
  );
}