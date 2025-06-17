import { configureStore, UnknownAction } from "@reduxjs/toolkit";

export const todoStore = configureStore({
  reducer: function (state: unknown, action: UnknownAction) {
    throw new Error("Function not implemented.");
  },
});
