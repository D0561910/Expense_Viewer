import classes from "./rowItem.module.css";
import isNumber from "../../../utils/isNumber";

function Column({ title, id }) {
  return (
    <div
      key={id}
      className={
        isNumber(title) ? classes.col_item_nonString : classes.col_item_isString
      }
    >
      {title}
    </div>
  );
}

export default Column;
