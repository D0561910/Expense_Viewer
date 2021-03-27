import classes from "./body.module.css";
import Row from "../Rows/rows";

function Body({ data }) {
  return (
    <div className={classes.tbody}>
      {data.map((element, idx) => {
        return <Row key={idx} id={idx} data={element} />;
      })}
    </div>
  );
}

export default Body;
