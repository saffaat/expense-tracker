import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectHandler = (selected) => {
    setSelectedYear(selected);
  };

  const list = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="">
      <Card className="expense-card">
        <ExpenseFilter selected={selectedYear} onSelect={selectHandler} />
        <ExpensesChart expenses={list} />
        <ExpenseList list={list} />
      </Card>
    </div>
  );
};

export default Expenses;
