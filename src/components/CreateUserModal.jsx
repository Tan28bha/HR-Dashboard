"use client";

import { useState } from "react";
import { useUserStore } from "../store/userStore";

export default function CreateUserModal({ onClose }) {
  const addUser = useUserStore((state) => state.addUser);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const validate = () => {
    if (!form.name || !form.email || !form.age) return "All fields are required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email format.";
    if (+form.age < 18) return "Minimum age is 18.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    const [firstName, ...rest] = form.name.split(" ");
    addUser({
      firstName,
      lastName: rest.join(" ") || "",
      email: form.email,
      age: +form.age,
      username: form.email.split("@")[0],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">➕ Create New User</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded p-2"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded p-2"
          />
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border rounded p-2"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
