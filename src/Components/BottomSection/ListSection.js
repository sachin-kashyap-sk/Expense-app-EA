import React from "react";
import classes from "../../StyleContainer/ListContainer.module.css";
import Trash from "../../Assets/Trash.png";
import {
  selectedExpenses,
  removeExpense,
} from "../ReduxSection/NewExpensesSlice";
import { useSelector, useDispatch } from "react-redux";
const ListSection = () => {
  const dispatch = useDispatch();
  const Expenses = useSelector(selectedExpenses);

  return (
    <div style={{ paddingLeft: "2%", paddingRight: "2%" }}>
      <div className={classes.container}>
        <p>Expenses</p>
      </div>
      {Expenses.map((item) => (
        <div key={item.id} className={classes.listContainer}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <img
            onClick={() => dispatch(removeExpense(item.id))}
            height="32px"
            width="32px"
            src={Trash}
            alt="Trash"
          />
        </div>
      ))}
    </div>
  );
};
export default ListSection;
