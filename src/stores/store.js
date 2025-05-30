import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense-tracker/expenseSlice";

export const store = configureStore({
    reducer: {
        expenseSlice: expenseReducer
    }
});