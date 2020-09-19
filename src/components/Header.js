import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  // const preventDefault = (event) => event.preventDefault();

  const [homeBtn, setHomeBtn] = useState({ BGR: "black", C: "white" });
  const [tasksBtn, setTasksBtn] = useState({ BGR: "#f0f0f0", C: "black" });
  const [userBtn, setUserBtn] = useState({ BGR: "#f0f0f0", C: "black" });

  function handelClick(e, v) {
    e.preventDefault();
    // Object.entries(btnList).map(([key, value]) => {console.log(key, value)});
    if (v === "homeBtn") {
      setHomeBtn({ BGR: "black", C: "white" });
      setTasksBtn({ BGR: "#f0f0f0", C: "black" });
      setUserBtn({ BGR: "#f0f0f0", C: "black" });
      props.selectedTab("Home");
    } else if (v === "tasksBtn") {
      setHomeBtn({ BGR: "#f0f0f0", C: "black" });
      setTasksBtn({ BGR: "black", C: "white" });
      setUserBtn({ BGR: "#f0f0f0", C: "black" });
      props.selectedTab("Tasks");
    } else {
      setHomeBtn({ BGR: "#f0f0f0", C: "black" });
      setTasksBtn({ BGR: "#f0f0f0", C: "black" });
      setUserBtn({ BGR: "black", C: "white" });
      props.selectedTab("User");
    }
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <Button
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            fontSize: "30px",
          }}
        >
          LOGO
        </Button>
        <Button
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            fontSize: "30px",
            backgroundColor: homeBtn.BGR,
            color: homeBtn.C,
          }}
          onClick={(e) => {
            handelClick(e, "homeBtn");
          }}
        >
          Home
        </Button>
        <Button
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            fontSize: "30px",
            backgroundColor: tasksBtn.BGR,
            color: tasksBtn.C,
          }}
          onClick={(e) => {
            handelClick(e, "tasksBtn");
          }}
        >
          Tasks
        </Button>
        <Button
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            fontSize: "30px",
            backgroundColor: userBtn.BGR,
            color: userBtn.C,
          }}
          onClick={(e) => {
            handelClick(e, "userBtn");
          }}
        >
          User
        </Button>
      </div>
    </div>
  );
}
