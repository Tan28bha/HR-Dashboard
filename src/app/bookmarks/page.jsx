// app/bookmarks/page.jsx
"use client";

import { useUserStore } from "../../store/userStore";
import EmployeeCard from "../../components/EmployeeCard";

export default function BookmarksPage() {
  const bookmarkedUsers = useUserStore((state) => state.bookmarks);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        📌 Bookmarked Employees
      </h1>

      {bookmarkedUsers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No bookmarks yet!</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {bookmarkedUsers.map((user) => (
            <EmployeeCard key={user.id} employee={user} />
          ))}
        </div>
      )}
    </main>
  );
}
