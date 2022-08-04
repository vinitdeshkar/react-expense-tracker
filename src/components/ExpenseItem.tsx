import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

interface IExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: IExpenseItemProps) => {
  const { date, title, amount } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
