export const departments = [
    "Engineering",
    "Human Resources",
    "Marketing",
    "Finance",
    "Operations",
    "Product",
    "Design",
  ];
  
  export function getRandomDepartment(id) {
    return departments[id % departments.length];
  }
  
  export function getRandomRating() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  export function getMockBio(name) {
    return `${name} is a dedicated professional with a passion for teamwork and innovation.`;
  }
  
  export function getMockPerformanceHistory() {
    const history = [];
    const performanceLabels = ["Excellent", "Good", "Average", "Poor"];
    for (let i = 0; i < 5; i++) {
      const score = Math.floor(Math.random() * 5) + 1;
      const label = performanceLabels[score - 1];
      history.push({ year: 2024 - i, score, label });
    }
    return history;
  }