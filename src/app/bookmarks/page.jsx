"use client";

import { useBookmarkStore } from "../../store/bookmarkStore";
import BookmarkCard from "../../components/BookmarkCard";

export default function BookmarksPage() {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📌 Bookmarked Employees</h1>

      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-600">No bookmarked employees yet.</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {bookmarks.map((emp) => (
            <BookmarkCard key={emp.id} employee={emp} />
          ))}
        </div>
      )}
    </main>
  );
}
