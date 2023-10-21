import React, { useState } from "react";
import Card from "../UI/Card";
import Form from "./Form";
import Button from "../UI/Button";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleHandler = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };
  const SaveData = (expenseDate) => {
    const data = {
      ...expenseDate,
      id: Math.random().toString(),
    };
    props.onSave(data);
    toggleHandler();
  };

  return (
    <Card className="form-card">
      {!isEditing && (
        <Button text="Add New Expense" onButtonClick={toggleHandler} />
      )}
      {isEditing && (
        <Form onSaveExpenseData={SaveData} onClear={toggleHandler} />
      )}
    </Card>
  );
};

export default NewExpense;
