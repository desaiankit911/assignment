import React, { useState, useEffect } from "react";
import * as data from "./data.json";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tasks(props) {
  const classes = useStyles();
  const [featchedData, setFeatchedData] = useState(props.data);
  const [tableDiv, setTableDiv] = useState(true);
  const [editTable, setEditTable] = useState("none");
  const [btnName, setBtnName] = useState("Add Task");
  const [dropDown, setDropDown] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [numOfTasks, setNumOfTasks] = useState(props.data.length);

  function handelClick(v) {
    const filterData = featchedData.filter((item, index) => index !== v);
    console.log(filterData);
    setFeatchedData(filterData);
  }

  function handelAdd(btn) {
    if (btnName === "Add Task") {
      setBtnName("Save Task");
      setTableDiv("none");
      setEditTable(true);
    } else {
      if (btn == "cancle") {
        setBtnName("Add Task");
        setTableDiv(true);
        setEditTable("none");
      } else if (btn !== "cancle" && newTitle !== "" && dropDown !== "") {
        setBtnName("Add Task");
        setTableDiv(true);
        setEditTable("none");
        featchedData.push({
          id: numOfTasks + 1,
          title: newTitle,
          completed: dropDown,
        });

        setNewTitle("");
        setDropDown("");
        setNumOfTasks(numOfTasks + 1);
      } else {
        alert("fill all requirements!!!");
      }
    }
  }

  const handleChange = (event) => {
    setDropDown(event.target.value);
  };

  function handleText(v) {
    setNewTitle(v);
  }

  // useEffect(() => {
  // }, [featchedData]);
  return (
    <div style={{ paddingTop: "20px" }}>
      <div style={{ paddingBottom: "20px" }}>
        <Button
          style={{
            fontSize: "15px",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={(e) => {
            handelAdd("edit");
          }}
        >
          {btnName}
        </Button>
        <Button
          style={{
            fontSize: "15px",
            backgroundColor: "orange",
            color: "white",
            display: editTable,
          }}
          onClick={(e) => {
            handelAdd("cancle");
          }}
        >
          Cancel
        </Button>
      </div>
      <div style={{ display: editTable, fontSize: "25px" }}>
        <form>
          <p>
            <lable style={{ paddingRight: "30px" }}>Title * : </lable>
            <input
              type="text"
              style={{
                border: "solid black 1px",
                width: "400px",
              }}
              placeholder="write title"
              value={newTitle}
              onChange={(e) => handleText(e.target.value)}
            />
          </p>
          <p>
            <lable style={{ paddingRight: "30px" }}>Completed * : </lable>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                style={{ fontSize: "10px" }}
                id="demo-simple-select-outlined-label"
              ></InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                style={{ fontSize: "20px", width: "300px", height: "50px" }}
                value={dropDown}
              >
                <MenuItem style={{ fontSize: "20px" }} value="true">
                  True
                </MenuItem>
                <MenuItem style={{ fontSize: "20px" }} value="false">
                  False
                </MenuItem>
              </Select>
            </FormControl>
          </p>
        </form>
      </div>
      <div style={{ display: tableDiv }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "20px" }}>Index</TableCell>
                <TableCell style={{ fontSize: "20px" }}>Title</TableCell>
                <TableCell style={{ fontSize: "20px" }}>Completed</TableCell>
                <TableCell style={{ fontSize: "20px" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {featchedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{ fontSize: "20px" }}
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {row.title}
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {row.completed.toString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      style={{
                        fontSize: "15px",
                        backgroundColor: "red",
                        color: "white",
                      }}
                      onClick={(e) => {
                        handelClick(index);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
