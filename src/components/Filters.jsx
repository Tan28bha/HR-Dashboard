"use client";

import { departments } from "../utils/mockutils";

export default function Filters({
  searchTerm,
  setSearchTerm,
  selectedDepartments,
  setSelectedDepartments,
  selectedRatings,
  setSelectedRatings,
}) {
  const toggleDepartment = (dept) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6 max-w-5xl mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name, email, or department..."
        className="w-full mb-4 p-2 border rounded"
      />

      <div className="flex flex-wrap gap-4">
        {/* Departments */}
        <div>
          <label className="block font-semibold mb-2">Departments:</label>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`px-3 py-1 rounded border ${
                  selectedDepartments.includes(dept)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => toggleDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div>
          <label className="block font-semibold mb-2">Rating:</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((r) => (
              <button
                key={r}
                className={`px-3 py-1 rounded border ${
                  selectedRatings.includes(r)
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => toggleRating(r)}
              >
                {r}★
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
