const ExpenseItem = ({ title, amount }) => (
    <li>
      {title} - ${amount.toFixed(2)}
    </li>
  );
  
  export default ExpenseItem;
  