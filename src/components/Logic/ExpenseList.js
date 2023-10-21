import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="not-found">No Expenses Found</h2>;
  }
  return (
    <ul>
      {props.list.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          date={element.date}
          amount={element.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
