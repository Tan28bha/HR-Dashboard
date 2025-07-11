// app/employee/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";
import { useUserStore } from "../../../store/userStore";

export default function EmployeeDetails() {
  const { id } = useParams();
  const user = useUserStore((state) =>
    state.users.find((u) => u.id === parseInt(id))
  );

  if (!user) return <p className="p-6">User not found.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-2">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 mb-2">Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>Department: {user.department}</p>
      <p>Rating: {user.rating} ⭐</p>
      <p className="mt-4 text-sm text-gray-500">More details coming soon...</p>
    </div>
  );
}
