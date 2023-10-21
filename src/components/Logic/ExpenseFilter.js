import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectedHandle = (event) => {
    props.onSelect(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label className="filter-label">Filter</label>
      <select value={props.selected} onChange={selectedHandle}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
