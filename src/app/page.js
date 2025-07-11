"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import EmployeeCard from "../components/EmployeeCard";
import CreateUserModal from "../components/CreateUserModal";
import { useUserStore } from "../store/userStore";
import { getRandomDepartment, getRandomRating } from "../utils/mockutils";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const userList = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch("https://dummyjson.com/users?limit=20");
    const data = await res.json();

    const enriched = data.users.map((u) => ({
      ...u,
      department: getRandomDepartment(u.id),
      rating: getRandomRating(),
    }));

    setUsers(enriched);
    setLoading(false);
  };

  useEffect(() => {
    if (userList.length === 0) {
      fetchUsers();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* 🔝 Top Title */}
      <div className="py-6 bg-white shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-blue-800">
          🏢 HR Dashboard
        </h1>
      </div>

      <div className="flex flex-1">
        {/* 📚 Sidebar Navigation */}
        <aside className="w-64 p-6">
          <div className="bg-black text-white rounded-xl shadow-md p-4 space-y-6 text-lg font-medium w-full">
            <Link href="/" className="block hover:text-blue-400 transition">🏠 Dashboard</Link>
            <Link href="/bookmarks" className="block hover:text-blue-400 transition">📌 Bookmarks</Link>
            <Link href="/analytics" className="block hover:text-blue-400 transition">📊 Analytics</Link>
            <Link href="/settings" className="block hover:text-blue-400 transition">⚙️ Settings</Link>
          </div>
        </aside>

        {/* 📄 Main Content */}
        <div className="flex-1 p-6">
          {/* ➕ Create User Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              + Create User
            </button>
          </div>

          {/* 👥 Employee Cards Grid */}
          {loading ? (
            <p className="text-center text-gray-500">Loading users...</p>
          ) : (
            <div className="w-full px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {userList.map((user) => (
                  <EmployeeCard key={user.id} employee={user} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔳 Create User Modal */}
      {showModal && <CreateUserModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
