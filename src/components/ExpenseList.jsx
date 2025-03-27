import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map((item) => (
      <ExpenseItem key={item.id} {...item} />
    ))}
  </ul>
);

export default ExpenseList;
