import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

import { useSelector, useDispatch } from 'react-redux'
import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from '../features/expense-tracker/expenseSlice'

function Card() {
  const state = useSelector((state) => state.expenseSlice);
  const dispatch = useDispatch();
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' })

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      dispatch(ADD_EXPENSE({
        id: Date.now(),
        description: newExpense.description,
        amount: parseFloat(newExpense.amount)
      }))
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
                  onClick={() => dispatch(DELETE_EXPENSE(expense.id))}
                  
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