import { useBookmarkStore } from "../store/bookmarkStore";

export default function BookmarkCard({ employee }) {
  const removeBookmark = useBookmarkStore((state) => state.removeBookmark);

  return (
    <div className="bg-white rounded-xl p-4 shadow border mb-4">
      <div className="flex items-center gap-4">
        <img
          src={`https://robohash.org/${employee.username}?size=80x80`}
          className="w-16 h-16 rounded-full object-cover"
          alt={employee.firstName}
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg">{employee.firstName} {employee.lastName}</h3>
          <p className="text-sm text-gray-500">{employee.email}</p>
          <p className="text-sm text-blue-600">{employee.department}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => removeBookmark(employee.id)}
            className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
          <button className="bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600">
            Promote
          </button>
          <button className="bg-indigo-500 text-white text-sm px-3 py-1 rounded hover:bg-indigo-600">
            Assign to Project
          </button>
        </div>
      </div>
    </div>
  );
}
