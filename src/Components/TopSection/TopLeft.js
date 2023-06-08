import React, { useState } from "react";
import classes from "../../StyleContainer/TopLeft.module.css";
import TopRight from "./TopRight";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBudget } from "../ReduxSection/NewExpensesSlice";
const TopLeft = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const AddBudgetHandler = () => {
    dispatch(addBudget(value));
  };

  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.innerContainer}>
            <p>Budget</p>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Enter Budget Amount"
              type="number"
              className={classes.input}
            />
            <Button onClick={AddBudgetHandler} style={{ width: "50%" }}>
              Set Budget
            </Button>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <TopRight />
        </div>
      </div>
    </div>
  );
};

export default TopLeft;
