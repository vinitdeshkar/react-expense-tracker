import { useState } from "react";
import "./ExpenseForm.css";

interface IExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: IExpeseData) => void;
  onCancel: () => void;
}

export interface IExpeseData {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseForm = (props: IExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const expenseData: IExpeseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
