import React, { useReducer } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

// 3 possible actions for our reducer
const ACTIONS = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  UPDATE_EXPENSE: 'UPDATE_EXPENSE'
}

// Initial state
const initialState = {
  expenses: [],
  total: 0
}

// Reducer function
const reducer = (state, action) => {
  //Based on the action type, it returns a new state
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        total: state.total + action.payload.amount
      }
    case ACTIONS.DELETE_EXPENSE: {
      const expenseToDelete = state.expenses.find(exp => exp.id === action.payload)
      return {
        ...state,
        expenses: state.expenses.filter(exp => exp.id !== action.payload),
        total: state.total - expenseToDelete.amount
      }
    }
    case ACTIONS.UPDATE_EXPENSE: {
      const updatedExpenses = state.expenses.map(exp => 
        exp.id === action.payload.id ? action.payload : exp
      )
      const newTotal = updatedExpenses.reduce((sum, exp) => sum + exp.amount, 0)
      return {
        ...state,
        expenses: updatedExpenses,
        total: newTotal
      }
    }
    default:
      return state
  }
}

function Card() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newExpense, setNewExpense] = React.useState({ description: '', amount: '' })

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      dispatch({
        type: ACTIONS.ADD_EXPENSE,
        payload: {
          id: Date.now(),
          description: newExpense.description,
          amount: parseFloat(newExpense.amount)
        }
      })
      setNewExpense({ description: '', amount: '' })
    }
  }

  return (
    <div className='bg-white flex items-center justify-center h-screen w-full rounded-full shadow-lg p-2'>
      <div className='bg-[#C0C0C0] max-w-3xl w-full h-fit flex flex-col gap-4 p-4'>
        <div className='flex flex-col md:flex-row gap-2'>
          <Input 
            value={newExpense.description}
            onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
            placeholder="Descrizione spesa"
          />
          <Input 
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
            placeholder="Importo"
          />
          <Button onClick={handleAddExpense} variant='button'>Add your amount</Button>
        </div>
        
        <div className='mt-4'>
          <h2 className='text-xl font-bold mb-2'>Total: €{state.total.toFixed(2)}</h2>
          <div className='space-y-2'>
            {state.expenses.map(expense => (
              <div key={expense.id} className='flex justify-between items-center bg-white p-2 rounded'>
                <span>{expense.description}</span>
                <span>€{expense.amount.toFixed(2)}</span>
                <Button 
                  onClick={() => dispatch({ type: ACTIONS.DELETE_EXPENSE, payload: expense.id })}
                  
                  variant='expTracker'
                >
                  Cancel
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card