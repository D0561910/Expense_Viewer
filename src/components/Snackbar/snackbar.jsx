import classes from "./snackbar.module.css";

const Snackbar = ({ active, msg }) => {
  return (
    <div
      className={
        active ? [classes.snackbar, classes.show].join(" ") : classes.snackbar
      }
    >
      {msg}
    </div>
  );
};

export default Snackbar;
