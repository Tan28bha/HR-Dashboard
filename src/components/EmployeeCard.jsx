export default function EmployeeCard({ employee }) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md p-6 w-full max-w-sm hover:shadow-xl transition-all cursor-pointer text-gray-900 dark:text-white">
        {/* 👤 Top Section */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={employee.image || "/avatar-placeholder.png"}
            alt={`${employee.firstName} ${employee.lastName}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
          />
          <div>
            <h2 className="text-xl font-bold">{employee.firstName} {employee.lastName}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{employee.email}</p>
          </div>
        </div>
  
        {/* 📋 Details Section */}
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Age:</span> {employee.age}</p>
          <p><span className="font-medium">Department:</span> {employee.department}</p>
          <p><span className="font-medium">Rating:</span> {employee.rating} ⭐</p>
        </div>
  
        {/* 🔘 Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-blue-600 hover:underline text-sm cursor-pointer">View</button>
          <button className="text-yellow-500 hover:underline text-sm cursor-pointer">Bookmark</button>
          <button className="text-green-600 hover:underline text-sm cursor-pointer">Promote</button>
        </div>
      </div>
    );
  }
  