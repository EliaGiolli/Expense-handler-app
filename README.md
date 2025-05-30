# Expense Tracker App

A modern expense tracking application built with React and Redux Toolkit, showcasing the evolution from local state management to enterprise-level state management.

## 🚀 Evolution of State Management

This project demonstrates a practical journey from React's built-in `useReducer` hook to Redux Toolkit, highlighting how state management can be scaled for larger applications.

### Phase 1: useReducer Implementation

Initially, the application used React's `useReducer` hook for state management. This approach was perfect for learning and understanding the core concepts of state management:

```javascript
const ACTIONS = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  UPDATE_EXPENSE: 'UPDATE_EXPENSE'
}

const initialState = {
  expenses: [],
  total: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        total: state.total + action.payload.amount
      }
    // ... other cases
  }
}
```

### Phase 2: Redux Toolkit Migration

The application was then migrated to Redux Toolkit, bringing several advantages:

1. **Centralized Store**: All state is now managed in a single store
2. **DevTools Integration**: Built-in Redux DevTools for better debugging
3. **Simplified Reducers**: Redux Toolkit's `createSlice` reduces boilerplate
4. **Immutability**: Automatic handling of state updates
5. **Middleware Support**: Easy integration of additional features

#### Redux Toolkit Configuration

```javascript
// store.js
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense-tracker/expenseSlice";

export const store = configureStore({
    reducer: {
        expenseSlice: expenseReducer
    }
});
```

#### Slice Creation

```javascript
// expenseSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        expenses: [],
        total: 0
    },
    reducers: {
        ADD_EXPENSE: (state, action) => {
            state.expenses.push(action.payload);
            state.total += action.payload.amount;
        },
        // ... other reducers
    }
});
```

## 🛠️ Technologies Used

- React 19
- Redux Toolkit
- TailwindCSS
- Vite
- React Icons

## 🚀 Features

- Add expenses with descriptions and amounts
- Delete expenses
- Real-time total calculation
- Responsive design
- Modern UI with TailwindCSS

## 📦 Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Key Learnings

1. **State Management Evolution**: Understanding when to use local state vs. global state
2. **Redux Toolkit Benefits**: Simplified Redux setup with less boilerplate
3. **Modern React Patterns**: Best practices for state management in React applications
4. **Performance Optimization**: Efficient state updates with Redux Toolkit

## 🔮 Future Improvements

- Add expense categories
- Implement data persistence
- Add expense analytics
- Implement user authentication
- Add dark mode support

## 📝 License

MIT License - feel free to use this project as a learning resource!

## 👨‍💻 Author

Elia Giolli - [[My-LinkedIn Profile]](https://www.linkedin.com/in/eliagiolli/)

---
Made with ❤️ and Redux Toolkit
