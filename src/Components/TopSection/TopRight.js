import React, { useState } from "react";
import classes from "../../StyleContainer/TopRight.module.css";
import { Button } from "react-bootstrap";
import { addNewExpense } from "../ReduxSection/NewExpensesSlice";
import { useDispatch } from "react-redux";
const TopRight = () => {
  const [firstInput, setFirstInput] = useState({
    title: "",
    price: "",
  });

  const dispatch = useDispatch();
  const AddHandler = () => {
    if (!firstInput) {
      return;
    }
    dispatch(addNewExpense(firstInput));
    setFirstInput({
      title: "",
      price: "",
    });
  };

  return (
    <div>
      <div className={classes.innerContainer}>
        <p>Expenses</p>

        <input
          type="text"
          value={firstInput.title}
          onChange={(e) => {
            setFirstInput({ ...firstInput, title: e.target.value });
          }}
          placeholder="Enter title"
          className={classes.input}
        />

        <input
          value={firstInput.price}
          onChange={(e) => {
            setFirstInput({ ...firstInput, price: e.target.value });
          }}
          placeholder="Enter Amount"
          className={classes.input}
          type="number"
        />

        <Button onClick={AddHandler} style={{ width: "50%" }}>
          Set Budget
        </Button>
      </div>
    </div>
  );
};
export default TopRight;
