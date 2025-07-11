// src/store/userStore.js

import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
  users: [],
  setUsers: (data) => set({ users: data }),

  bookmarks: [],
  addBookmark: (user) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, user],
    })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((u) => u.id !== id),
    })),
  isBookmarked: (id) =>
    !!get().bookmarks.find((u) => u.id === id),
}));
