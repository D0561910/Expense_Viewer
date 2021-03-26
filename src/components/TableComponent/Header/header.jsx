import classes from "./header.module.css";

function Header({ headerName }) {
  return (
    <div className={classes.header}>
      {headerName.map((element, idx) => {
        return (
          <div key={idx} className={classes.header_item}>
            {element}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
