import AnalyticsCharts from "../../components/AnalyticsCharts";
import { getDepartmentWiseAverage, getMockBookmarkTrends } from "../../utils/analyticsUtils";
import { getRandomDepartment, getRandomRating } from "../../utils/mockutils";

async function getUsers() {
  const res = await fetch("https://dummyjson.com/users?limit=50");
  const data = await res.json();
  return data.users.map((u) => ({
    ...u,
    department: getRandomDepartment(u.id),
    rating: getRandomRating(),
  }));
}

export default async function AnalyticsPage() {
  const users = await getUsers();
  const ratingsData = getDepartmentWiseAverage(users);
  const bookmarkTrends = getMockBookmarkTrends();

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="text-4xl font-bold text-center mb-10">📈 HR Analytics</h1>
      <div className="max-w-4xl mx-auto">
        <AnalyticsCharts ratingsData={ratingsData} bookmarkTrends={bookmarkTrends} />
      </div>
    </main>
  );
}
