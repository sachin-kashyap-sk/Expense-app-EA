import React, { useMemo } from "react";
import classes from "../../StyleContainer/MiddleContainer.module.css";
import { selectedExpenses } from "../ReduxSection/NewExpensesSlice";
import { selectedBudget } from "../ReduxSection/NewExpensesSlice";
import { useSelector } from "react-redux";
const MiddleSection = () => {
  const Expenses = useSelector(selectedExpenses);
  const Budget = useSelector(selectedBudget);

  const totalExpenses = useMemo(() => {
    let temp = 0;
    Expenses.forEach((element) => {
      temp += +element.price;
    });
    return temp;
  }, [Expenses]);

  const Balance = Budget - totalExpenses;

  return (
    <div style={{ padding: "2%" }}>
      <div className={classes.container}>
        <p>Total Budget</p>
        <p>Expenses</p>
        <p>Balance</p>
      </div>
      <div className={classes.containerSec}>
        <p>{Budget}</p>
        <p>{totalExpenses}</p>
        <p>{Balance}</p>
      </div>
    </div>
  );
};

export default MiddleSection;
