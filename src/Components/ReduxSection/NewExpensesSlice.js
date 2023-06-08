import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  budgetValue: 0,
};

export const newExpensesSlice = createSlice({
  name: "newExpenses",
  initialState,
  reducers: {
    addNewExpense: (state, action) => {
      state.value.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    removeExpense: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },

    addBudget: (state, action) => {
      state.budgetValue = action.payload;
    },
  },
});
export const { addNewExpense, removeExpense, addBudget } =
  newExpensesSlice.actions;
export const selectedExpenses = (state) => state.newExpenses.value;
export const selectedBudget = (state) => state.newExpenses.budgetValue;
export default newExpensesSlice.reducer;
