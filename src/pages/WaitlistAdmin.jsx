import {
useEffect,
useMemo,
useState,
} from "react";

import {
Loader2,
RefreshCw,
Search,
Trash2,
Users,
} from "lucide-react";

const API_URL =
import.meta.env.VITE_API_URL;

const statusOptions = [
"waiting",
"contacted",
"invited",
"joined",
];

export default function WaitlistAdmin() {
const [entries, setEntries] =
useState([]);

const [search, setSearch] =
useState("");

const [loading, setLoading] =
useState(true);

const [refreshing, setRefreshing] =
useState(false);

const [updatingId, setUpdatingId] =
useState(null);

const [deletingId, setDeletingId] =
useState(null);

const [error, setError] =
useState("");

async function fetchWaitlist(
isRefresh = false
) {
try {
setError("");


  if (isRefresh) {
    setRefreshing(true);
  } else {
    setLoading(true);
  }

  const response = await fetch(
    `${API_URL}/api/waitlist`
  );

  const result =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Could not load the waitlist"
    );
  }

  setEntries(
    result.data || []
  );
} catch (error) {
  setError(
    error.message ||
      "Could not load the waitlist"
  );
} finally {
  setLoading(false);
  setRefreshing(false);
}


}

useEffect(() => {
fetchWaitlist();
}, []);

async function updateStatus(
id,
status
) {
try {
setUpdatingId(id);


  const response = await fetch(
    `${API_URL}/api/waitlist/${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  const result =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Could not update entry"
    );
  }

  setEntries(
    (currentEntries) =>
      currentEntries.map(
        (entry) =>
          entry.id === id
            ? result.data
            : entry
      )
  );
} catch (error) {
  alert(
    error.message ||
      "Could not update entry"
  );
} finally {
  setUpdatingId(null);
}


}

async function deleteEntry(
id,
email
) {
const confirmed =
window.confirm(
`Delete ${email} from the waitlist?`
);


if (!confirmed) {
  return;
}

try {
  setDeletingId(id);

  const response = await fetch(
    `${API_URL}/api/waitlist/${encodeURIComponent(id)}`,
    {
      method: "DELETE",
    }
  );

  const result =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Could not delete entry"
    );
  }

  setEntries(
    (currentEntries) =>
      currentEntries.filter(
        (entry) =>
          entry.id !== id
      )
  );
} catch (error) {
  alert(
    error.message ||
      "Could not delete entry"
  );
} finally {
  setDeletingId(null);
}


}

const filteredEntries =
useMemo(() => {
const query =
search
.trim()
.toLowerCase();


  if (!query) {
    return entries;
  }

  return entries.filter(
    (entry) =>
      entry.email
        ?.toLowerCase()
        .includes(query)
  );
}, [
  entries,
  search,
]);


return ( <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8"> <div className="mx-auto max-w-6xl"> <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"> <div> <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700"> <Users size={16} />

          Bizula waitlist
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Waitlist management
        </h1>

        <p className="mt-2 text-slate-500">
          View, update, and manage
          people waiting for Bizula.
        </p>
      </div>

      <button
        type="button"
        onClick={() =>
          fetchWaitlist(true)
        }
        disabled={
          refreshing
        }
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <RefreshCw
          size={18}
          className={
            refreshing
              ? "animate-spin"
              : ""
          }
        />

        Refresh
      </button>
    </div>

    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Total signups
        </p>

        <p className="mt-2 text-3xl font-bold">
          {entries.length}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Waiting
        </p>

        <p className="mt-2 text-3xl font-bold">
          {
            entries.filter(
              (entry) =>
                entry.status ===
                "waiting"
            ).length
          }
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Invited
        </p>

        <p className="mt-2 text-3xl font-bold">
          {
            entries.filter(
              (entry) =>
                entry.status ===
                "invited"
            ).length
          }
        </p>
      </div>
    </div>

    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(event) =>
            setSearch(
              event.target.value
            )
          }
          placeholder="Search by email..."
          className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </div>
    </div>

    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {loading ? (
        <div className="flex min-h-80 items-center justify-center">
          <Loader2
            size={28}
            className="animate-spin text-violet-700"
          />
        </div>
      ) : error ? (
        <div className="p-8 text-center">
          <p className="font-semibold text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              fetchWaitlist()
            }
            className="mt-4 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white"
          >
            Try again
          </button>
        </div>
      ) : filteredEntries.length ===
        0 ? (
        <div className="p-12 text-center text-slate-500">
          No waitlist entries found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4">
                  Source
                </th>

                <th className="px-6 py-4">
                  Joined
                </th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredEntries.map(
                (entry) => (
                  <tr
                    key={
                      entry.id
                    }
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-6 py-5 font-medium">
                      {
                        entry.email
                      }
                    </td>

                    <td className="px-6 py-5">
                      <select
                        value={
                          entry.status ||
                          "waiting"
                        }
                        disabled={
                          updatingId ===
                          entry.id
                        }
                        onChange={(
                          event
                        ) =>
                          updateStatus(
                            entry.id,
                            event
                              .target
                              .value
                          )
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium outline-none focus:border-violet-500"
                      >
                        {statusOptions.map(
                          (
                            status
                          ) => (
                            <option
                              key={
                                status
                              }
                              value={
                                status
                              }
                            >
                              {
                                status
                              }
                            </option>
                          )
                        )}
                      </select>
                    </td>

                    <td className="px-6 py-5 text-slate-500">
                      {
                        entry.source ||
                        "website"
                      }
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {entry.createdAt
                        ? new Date(
                            entry.createdAt
                          ).toLocaleDateString()
                        : "—"}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            deleteEntry(
                              entry.id,
                              entry.email
                            )
                          }
                          disabled={
                            deletingId ===
                            entry.id
                          }
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                          aria-label={`Delete ${entry.email}`}
                        >
                          {deletingId ===
                          entry.id ? (
                            <Loader2
                              size={
                                18
                              }
                              className="animate-spin"
                            />
                          ) : (
                            <Trash2
                              size={
                                18
                              }
                            />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
</main>


);
}
