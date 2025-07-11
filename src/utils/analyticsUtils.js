import { departments } from "./mockutils";

export function getDepartmentWiseAverage(users) {
  const departmentMap = {};

  users.forEach((user) => {
    const dept = user.department;
    if (!departmentMap[dept]) departmentMap[dept] = { total: 0, count: 0 };
    departmentMap[dept].total += user.rating;
    departmentMap[dept].count += 1;
  });

  return departments.map((dept) => ({
    department: dept,
    avgRating: departmentMap[dept]
      ? +(departmentMap[dept].total / departmentMap[dept].count).toFixed(2)
      : 0,
  }));
}

export function getMockBookmarkTrends() {
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [3, 5, 8, 6, 12, 10, 14], // mock numbers of bookmarks over months
  };
}
