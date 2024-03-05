import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface AnswerStore {
  answerStatus: boolean;
  setAnswerStatus: () => void;
}

const useAnswerStore = create<AnswerStore>((set) => ({
  answerStatus: false,
  setAnswerStatus: () =>
    set((store) => ({
      answerStatus: !store.answerStatus,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("AnswerStatusStore", useAnswerStore);
}

export default useAnswerStore;
