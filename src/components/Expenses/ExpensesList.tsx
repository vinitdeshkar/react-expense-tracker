import { IExpenseDataWithId } from "../NewExpense/NewExpense";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

interface IExpensesProps {
  items: IExpenseDataWithId[];
}
const ExpensesList = (props: IExpensesProps) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: IExpenseDataWithId) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
