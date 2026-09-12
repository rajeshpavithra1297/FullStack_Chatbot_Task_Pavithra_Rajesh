import { useEffect, useState } from "react";
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from "../services/enquiryService";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  userType: string;
  interest: string;
  message: string;
  createdAt: string;
  status?:string;
}

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

const [userTypeFilter, setUserTypeFilter] = useState("All");

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await getEnquiries();

        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);

        setError("Failed to load enquiries.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

 
    const filteredEnquiries = enquiries.filter((enquiry) => {
  if (userTypeFilter === "All") {
    return true;
  }

  return enquiry.userType === userTypeFilter;
});
    
  const handleDelete = async (id: string) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this enquiry?"
  );

  if (!confirmed) {
    return;
  }

  try {
    await deleteEnquiry(id);

    setEnquiries((previousEnquiries) =>
      previousEnquiries.filter(
        (enquiry) => enquiry._id !== id
      )
    );
  } catch (error) {
    console.error(
      "Error deleting enquiry:",
      error
    );

    alert("Failed to delete enquiry.");
  }
};

  const handleStatusChange = async (
  id: string,
  status: string
) => {
  try {
    const updatedEnquiry =
      await updateEnquiryStatus(id, status);

    setEnquiries((previousEnquiries) =>
      previousEnquiries.map((enquiry) =>
        enquiry._id === id
          ? {
              ...enquiry,
              status: updatedEnquiry.status,
            }
          : enquiry
      )
    );
  } catch (error) {
    console.error(
      "Error updating status:",
      error
    );

    alert("Failed to update enquiry status.");
  }
};

  return (
    <section className="min-h-screen bg-slate-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Enquiry Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            View enquiries submitted through the website.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row">



<select
  value={userTypeFilter}
  onChange={(event) =>
    setUserTypeFilter(event.target.value)
  }
  className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
>
  <option value="All">All Users</option>
  <option value="Student">Student</option>
  <option value="Customer">Customer</option>
</select>

</div>

        {isLoading && (
          <p className="text-slate-400">
            Loading enquiries...
          </p>
        )}

        {error && (
          <p className="rounded-lg bg-red-500/10 p-4 text-red-400">
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950">
            <table className="w-full min-w-[900px] text-left">
              <thead className="border-b border-white/10 bg-slate-800">
                <tr>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Phone</th>
                  <th className="px-4 py-4">User Type</th>
                  <th className="px-4 py-4">Interest</th>
                  <th className="px-4 py-4">Message</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="border-b border-white/10"
                  >
                    <td className="px-4 py-4">
                      {enquiry.name}
                    </td>

                    <td className="px-4 py-4">
                      {enquiry.email}
                    </td>

                    <td className="px-4 py-4">
                      {enquiry.phone}
                    </td>

                    <td className="px-4 py-4">
                      {enquiry.userType}
                    </td>

                    <td className="px-4 py-4">
                      {enquiry.interest}
                    </td>

                    <td className="max-w-xs px-4 py-4">
                      {enquiry.message}
                    </td>

                    <td className="px-4 py-4">
                      {new Date(
                        enquiry.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-4">
  <select
    value={enquiry.status || "New"}
    onChange={(event) =>
      handleStatusChange(
        enquiry._id,
        event.target.value
      )
    }
    className="rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
  >
    <option value="New">New</option>

    <option value="Contacted">
      Contacted
    </option>

    <option value="In Progress">
      In Progress
    </option>

    <option value="Completed">
      Completed
    </option>
  </select>
</td>

<td className="px-4 py-4">
  <button
    onClick={() => handleDelete(enquiry._id)}
    className="rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
  >
    Delete
  </button>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && !error && enquiries.length === 0 && (
          <p className="mt-6 text-center text-slate-400">
            No enquiries found.
          </p>
        )}

      </div>
    </section>
  );
}

export default AdminDashboard;