import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenesesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
