import { configureStore } from "@reduxjs/toolkit";
import newExpenses from "./NewExpensesSlice";
export const store = configureStore({
  reducer: {
    newExpenses: newExpenses,
  },
});
