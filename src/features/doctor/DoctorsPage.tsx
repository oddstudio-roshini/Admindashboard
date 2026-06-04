import { doctors } from "@/data/doctors";
import Sidebar from "@/components/layout/Sidebar";
import {
  Upload,
  Plus,
  Search,
  RefreshCw,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";

export default function DoctorsPage() {
  const totalDoctors = doctors.length;

  const activeDoctors = doctors.filter(
    (doctor) => doctor.status === "ACTIVE"
  ).length;

  const inactiveDoctors = doctors.filter(
    (doctor) => doctor.status === "INACTIVE"
  ).length;

  return (
    <div className="flex min-h-screen bg-[#F3EEE6]">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* Header */}

        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h1
                className="text-4xl font-bold"
                style={{ color: "#134C58" }}
              >
                Doctor Accounts
              </h1>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                • 2 Online
              </span>
            </div>

            <p className="text-[#6F8792] mt-2">
              Manage doctor access, profiles, and patient assignments.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-[#134C58] px-4 py-2 rounded-xl text-[#134C58] font-medium">
              <Upload size={16} />
              Upload CSV
            </button>

            <button className="flex items-center gap-2 bg-[#134C58] text-white px-4 py-2 rounded-xl font-medium">
              <Plus size={16} />
              Create Doctor
            </button>
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-5 mb-6">
          <div className="bg-[#FDFAF4] border border-[#D6CCBE] rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-[#6F8792] uppercase">
                  Total Doctors
                </p>

                <h2
                  className="text-4xl font-bold mt-3"
                  style={{ color: "#134C58" }}
                >
                  {totalDoctors}
                </h2>
              </div>

              <div className="bg-[#EAF3F4] p-3 rounded-full">
                <Users size={22} color="#134C58" />
              </div>
            </div>
          </div>

          <div className="bg-[#FDFAF4] border border-[#D6CCBE] rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-[#6F8792] uppercase">
                  Active Doctors
                </p>

                <h2
                  className="text-4xl font-bold mt-3"
                  style={{ color: "#134C58" }}
                >
                  {activeDoctors}
                </h2>
              </div>

              <div className="bg-green-100 p-3 rounded-full">
                <UserCheck size={22} color="green" />
              </div>
            </div>
          </div>

          <div className="bg-[#FDFAF4] border border-[#D6CCBE] rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-[#6F8792] uppercase">
                  Inactive Doctors
                </p>

                <h2
                  className="text-4xl font-bold mt-3"
                  style={{ color: "#134C58" }}
                >
                  {inactiveDoctors}
                </h2>
              </div>

              <div className="bg-yellow-100 p-3 rounded-full">
                <UserX size={22} color="#D4A017" />
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}

        <div className="bg-[#FDFAF4] border border-[#D6CCBE] rounded-3xl overflow-hidden">
          {/* Top Header */}

          <div className="flex justify-between items-center p-4 border-b border-[#E5DED2]">
            <h2
              className="font-semibold"
              style={{ color: "#134C58" }}
            >
              Doctors Directory
            </h2>

            <div className="flex items-center gap-4 text-sm text-[#6F8792]">
              <span>Updated 03:49 pm</span>

              <button className="flex items-center gap-2 border rounded-lg px-3 py-1">
                <RefreshCw size={14} />
                Refresh
              </button>
            </div>
          </div>

          {/* Search */}

          <div className="p-4 flex gap-3">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by name, clinical ID, email..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F3EEE6] border border-[#D6CCBE] outline-none"
              />
            </div>

            <select className="px-4 rounded-xl border border-[#D6CCBE] bg-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Table */}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#134C58] text-white text-sm">
                <tr>
                  <th className="text-left p-4">ARTHOMOVE ID</th>
                  <th className="text-left p-4">DOCTOR NAME</th>
                  <th className="text-left p-4">HOSPITAL ID</th>
                  <th className="text-left p-4">CLINICAL ID</th>
                  <th className="text-left p-4">EMAIL ID</th>
                  <th className="text-left p-4">PHONE NUMBER</th>
                  <th className="text-left p-4">SPECIALIZATION</th>
                  <th className="text-left p-4">STATUS</th>
                  <th className="text-left p-4">PATIENTS</th>
                  <th className="text-left p-4">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="border-b border-[#E5DED2] hover:bg-[#F8F4EE]"
                  >
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full border text-xs">
                        {doctor.id}
                      </span>
                    </td>

                    <td className="p-4 font-medium text-[#134C58]">
                      {doctor.name}
                    </td>

                    <td className="p-4">{doctor.hospitalId}</td>

                    <td className="p-4">{doctor.clinicId}</td>

                    <td className="p-4">{doctor.email}</td>

                    <td className="p-4">{doctor.phone}</td>

                    <td className="p-4">{doctor.specialization}</td>

                    <td className="p-4">
                      <span
                        className={`font-medium ${
                          doctor.status === "ACTIVE"
                            ? "text-green-700"
                            : "text-yellow-700"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs">
                        👥 {doctor.patients}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          Logs
                        </button>

                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          Credentials
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}