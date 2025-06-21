"use client";

import { Provider } from "react-redux";
import { todoStore } from "@/store/todoStore";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={todoStore}>{children}</Provider>;
}
