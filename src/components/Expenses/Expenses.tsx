import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { IExpenseDataWithId } from "../NewExpense/NewExpense";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export interface IExpensesProps {
  items: IExpenseDataWithId[];
}

const Expenses = (props: IExpensesProps) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense: IExpenseDataWithId) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart items={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
