// src/App.js
import { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div className="container">
      <Header />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
