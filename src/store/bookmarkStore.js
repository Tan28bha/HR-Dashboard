import { create } from "zustand";

export const useBookmarkStore = create((set) => ({
  bookmarks: [],
  addBookmark: (employee) =>
    set((state) => ({
      bookmarks: state.bookmarks.some((e) => e.id === employee.id)
        ? state.bookmarks
        : [...state.bookmarks, employee],
    })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((emp) => emp.id !== id),
    })),
}));
