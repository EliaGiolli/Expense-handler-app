import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  total: 0
}


export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        ADD_EXPENSE: (state, action) => {
            state.expenses.push(action.payload);
            state.total += action.payload.amount;
        },
        DELETE_EXPENSE: (state, action) => {
            const expenseToDelete = state.expenses.find(exp => exp.id === action.payload);
            if (expenseToDelete) {
                state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
                state.total -= expenseToDelete.amount;
            }
        },
        UPDATE_EXPENSE: (state, action) => {
            const updatedExpenses = state.expenses.map(exp => 
                exp.id === action.payload.id ? action.payload : exp
            );
            const newTotal = updatedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
            state.expenses = updatedExpenses;
            state.total = newTotal;
        },
        CLEAR_EXPENSE: (state) => {
            state.expenses = [];
            state.total = 0;
        }
    }
});

export const { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE, CLEAR_EXPENSE } = expenseSlice.actions;
export default expenseSlice.reducer;
