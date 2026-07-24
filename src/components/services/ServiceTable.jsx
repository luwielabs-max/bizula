import {
  Pencil,
  Clock3,
  Tag,
} from "lucide-react";

export default function ServiceTable({
  services,
  onSelect,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-200 bg-zinc-50">

            <tr className="text-left text-sm font-semibold text-zinc-600">

              <th className="px-6 py-4">Service</th>

              <th className="px-6 py-4">Category</th>

              <th className="px-6 py-4">Duration</th>

              <th className="px-6 py-4">Price</th>

              <th className="px-6 py-4">
                Reservation Fee
              </th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4"></th>

            </tr>

          </thead>

          <tbody>

            {services.map((service) => (

              <tr
                key={service.id}
                onClick={() => onSelect(service)}
                className="cursor-pointer border-b border-zinc-100 transition hover:bg-zinc-50"
              >

                <td className="px-6 py-5">

                  <div>

                    <h3 className="font-semibold text-zinc-900">
                      {service.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {service.description}
                    </p>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-sm text-zinc-700">

                    <Tag size={16} />

                    {service.category}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-sm text-zinc-700">

                    <Clock3 size={16} />

                    {service.duration}

                  </div>

                </td>

                <td className="px-6 py-5 font-medium">

                  {service.price}

                </td>

                <td className="px-6 py-5 font-medium text-emerald-600">

                  {service.reservationFee}

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      service.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {service.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(service);
                    }}
                    className="rounded-lg p-2 transition hover:bg-zinc-100"
                  >
                    <Pencil size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}