import StarRating from "../../../components/StarRating";
import Tabs from "../../../components/Tabs";
import {
  getMockBio,
  getMockPerformanceHistory,
  getRandomDepartment,
  getRandomRating,
} from "../../../utils/mockutils";

async function getUser(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  return data;
}

export default async function EmployeeDetails({ params }) {
  const user = await getUser(params.id);
  const department = getRandomDepartment(user.id);
  const rating = getRandomRating();
  const performance = getMockPerformanceHistory();
  const bio = getMockBio(`${user.firstName} ${user.lastName}`);

  return (
    <main className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={`https://robohash.org/${user.username}?size=120x120`}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-blue-700 font-medium">{department}</p>
            <div className="flex items-center gap-2 mt-2">
              <StarRating rating={rating} />
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${
                  rating >= 4
                    ? "bg-green-200 text-green-800"
                    : rating === 3
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {rating >= 4 ? "Excellent" : rating === 3 ? "Average" : "Poor"}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Address & Contact</h3>
          <p>{user.address.address}, {user.address.city}, {user.address.state}</p>
          <p className="text-gray-700">Phone: {user.phone}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Performance History</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {performance.map((entry, idx) => (
              <li key={idx}>
                {entry.year}: {entry.label} ({entry.score}★)
              </li>
            ))}
          </ul>
        </div>

        <Tabs
          overview={bio}
          projects={[
            "Project Phoenix Revamp",
            "Employee Onboarding Workflow",
            "AI Resume Screener Tool",
          ]}
          feedback={[
            "Shows great leadership.",
            "Needs to improve time estimates.",
            "Very proactive during team crises.",
          ]}
        />
      </div>
    </main>
  );
}
