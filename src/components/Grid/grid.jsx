import { useState, useEffect } from "react";
import Header from "./Header/header";
import Body from "./Body/body";
import classes from "./grid.module.css";

function Grid() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("student.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const headerName = Object.keys(data[0] || {}).sort();
  
  return (
    <div className={classes.table}>
      <Header headerName={headerName} />
      <Body data={data} />
    </div>
  );
}

export default Grid;
