import { create } from "zustand";

interface CurrentUserStore {
  username: string;
  setUsername: (username: string) => void;
}

create<CurrentUserStore>((set) => ({
  username: "",
  setUsername: (username) => set(() => ({ username: username })),
}));
