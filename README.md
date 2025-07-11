
# 🏢 HR Dashboard

A modern HR management dashboard built with **Next.js**, **Tailwind CSS**, and **Zustand**. It allows HR managers to view, manage, and interact with employee data through an intuitive and responsive UI.



## 🚀 Features Implemented

### ✅ Core Functionality
- **Dashboard Homepage (`/`)**
  - Fetches dummy employee data from [dummyjson.com](https://dummyjson.com/users)
  - Displays employees in **responsive cards (3 per row)**
  - Each card shows: 👤 Full name, ✉️ Email, 🏢 Department, ⭐ Performance rating, 📌 Actions (`View`, `Bookmark`, `Promote`)

### ✅ UI/UX Enhancements
- Sidebar navigation with black background:
  - `Dashboard`, `Bookmarks`, `Analytics`, `Settings`
- Top-centered title: `HR Dashboard`
- “+ Create User” button (opens modal)
- Cards inside full-width container, styled with Tailwind
- On hover: pointer cursor and card shadow

### ✅ Extra Features (Optional)
- Create new user (modal)
- Bookmarks management page (`/bookmarks`)
- Analytics page with charts (Chart.js)
- Dynamic employee profile page (`/employee/[id]`)
- Zustand-based global state for bookmarks/users
- Fully responsive layout with dark mode support

---

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Charting (Optional):** [Chart.js](https://www.chartjs.org/)
- **Animations (Optional):** [Framer Motion](https://www.framer.com/motion/)

---

## 📦 Getting Started

### 1. Clone the Repository


git clone https://github.com/Tan28bha/HR-Dashboard
cd hr-dashboard


### 2. Install Dependencies

npm install
# or
yarn install


### 3. Run the Development Server


npm run dev
# or
yarn dev


Visit http://localhost:3000 to view the dashboard.


## 🧪 API Reference

* **User Data:** https://dummyjson.com/users?limit=20
* Department and rating are randomly generated via helper functions.


## 📂 Project Structure


├── app/
│   ├── page.jsx               # Main dashboard page
│   ├── bookmarks/             # Bookmark manager page
│   ├── analytics/             # Analytics page (Chart.js)
│   └── employee/[id]/         # Dynamic user details
├── components/
│   ├── EmployeeCard.jsx       # Reusable employee card component
│   └── CreateUserModal.jsx    # Modal to add a new user
├── store/
│   └── userStore.js           # Zustand state store
├── utils/
│   └── mockUtils.js           # Random department/rating logic




## 📸 Screenshots<img width="1894" height="896" alt="Screenshot 2025-07-11 174858" src="https://github.com/user-attachments/assets/010d3399-b52c-4c04-bc0c-23478676d84b" />

<img width="1915" height="901" alt="Screenshot 2025-07-11 174731" src="https://github.com/user-attachments/assets/c67c1ae5-b8ee-4670-b96b-27ca88e60e2b" />

<img width="1901" height="906" alt="Screenshot 2025-07-11 174800" src="https://github.com/user-attachments/assets/ea273d27-ce7a-448a-b270-67b9d832b828" />




## 🤝 Contributions

Open to suggestions, issues, or pull requests. Feel free to fork and improve!



## 📃 License

This project is for educational/demo purposes. You can adapt or use it freely.



