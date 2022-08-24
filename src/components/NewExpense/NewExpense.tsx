import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { IExpeseData } from "./ExpenseForm";
import { useState } from "react";

export interface IExpenseDataWithId extends IExpeseData {
  id: string;
}

interface INewExpenseProps {
  onAddExpense: (expense: IExpenseDataWithId) => void;
}

const NewExpense = (props: INewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData: IExpeseData) => {
    const expenseData: IExpenseDataWithId = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
