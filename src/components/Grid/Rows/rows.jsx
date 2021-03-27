import classes from "./rows.module.css";
import Column from "../RowItem/rowItem";

function Row({ id, data }) {
  return (
    <div
      key={id}
      className={
        id % 2 === 0 ? classes.row_dark_bg_color : classes.row_light_bg_color
      }
    >
      <Column
        key={`${data.date}${data.timestamp}`}
        id={`${data.date}${data.timestamp}`}
        title={data.date}
      />
      <Column
        key={`${data.pay}${data.timestamp}`}
        id={`${data.pay}${data.timestamp}`}
        title={data.pay}
      />
      <Column
        key={`${data.item}${data.timestamp}`}
        id={`${data.item}${data.timestamp}`}
        title={data.item}
      />
      <Column
        key={`${data.price}${data.timestamp}`}
        id={`${data.price}${data.timestamp}`}
        title={data.price}
      />
      <Column
        key={`${data.timestamp}`}
        id={`${data.timestamp}`}
        title={data.timestamp}
      />
    </div>
  );
}

export default Row;
