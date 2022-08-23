import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

export interface IExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: IExpenseItemProps) => {
  const { date, title, amount } = props;

  const [expenseTitle, setExpenseTitle] = useState(title);

  const onClickHandler = () => {
    setExpenseTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
