import classes from "./header.module.css";
import translate from "../../../utils/translate";

function Header({ headerName }) {
  return (
    <div className={classes.header}>
      {headerName.map((element, idx) => {
        return (
          <div key={idx} className={classes.header_item}>
            {translate(`${element}`)}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
