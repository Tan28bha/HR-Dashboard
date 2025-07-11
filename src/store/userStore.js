import { create } from "zustand";
import { getRandomDepartment, getRandomRating } from "../utils/mockutils";

export const useUserStore = create((set) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({
      users: [
        {
          ...user,
          id: Date.now(), // temporary unique ID
          department: getRandomDepartment(Date.now()),
          rating: getRandomRating(),
        },
        ...state.users,
      ],
    })),
  setUsers: (users) => set({ users }),
}));
