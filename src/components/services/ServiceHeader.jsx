import { BriefcaseBusiness, Plus } from "lucide-react";

import { LButton } from "../../luwie-ui/src";

export default function ServiceHeader({
  onCreateService,
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">

            <BriefcaseBusiness
              size={24}
              className="text-zinc-800"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-zinc-900">
              Services
            </h1>

            <p className="mt-1 text-zinc-500">
              Manage the services your customers can book.
            </p>

          </div>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <LButton
          onClick={onCreateService}
        >
          <Plus size={18} />

          Create Service
        </LButton>

      </div>

    </div>
  );
}