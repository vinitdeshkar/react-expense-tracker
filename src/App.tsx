import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { IExpenseDataWithId } from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./testData/dummyExpenses";

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: IExpenseDataWithId) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
