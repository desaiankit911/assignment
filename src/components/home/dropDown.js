import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDown(props) {
  const classes = useStyles();
  const [dropDown, setDropDown] = React.useState("");

  const handleChange = (event) => {
    setDropDown(event.target.value);
    const selected = event.target.value;
    props.handelSelected(selected);
  };

  return (
    <div>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            style={{ fontSize: "25px" }}
            id="demo-simple-select-outlined-label"
          ></InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropDown}
            onChange={handleChange}
            label=""
          >
            <MenuItem style={{ fontSize: "25px" }} value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem style={{ fontSize: "25px" }} value="REACT-JS">
              <em>REACT-JS</em>
            </MenuItem>
            <MenuItem style={{ fontSize: "25px" }} value="PYTHON">
              PYTHON
            </MenuItem>
            <MenuItem style={{ fontSize: "25px" }} value="JAVA">
              JAVA
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
