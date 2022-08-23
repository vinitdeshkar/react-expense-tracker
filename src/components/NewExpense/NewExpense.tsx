import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { IExpeseData } from "./ExpenseForm";

export interface IExpenseDataWithId extends IExpeseData {
  id: string;
}

interface INewExpenseProps {
  onAddExpense: (expense: IExpenseDataWithId) => void;
}

const NewExpense = (props: INewExpenseProps) => {
  const onSaveExpenseDataHandler = (enteredExpenseData: IExpeseData) => {
    const expenseData: IExpenseDataWithId = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
