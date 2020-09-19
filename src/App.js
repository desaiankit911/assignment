import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/home/home";
import Header from "./components/Header";
import Tasks from "./components/tasks";
import User from "./components/user";
import Login from "./components/login";

function App() {
  const [tab, setTab] = useState("");
  const [login, setLogin] = useState(false);
  const [featchedData, setFeatchedData] = useState([]);

  function handelLogin(v) {
    if (v === "true") {
      setLogin(true);
      setTab("Home");
      featchData();
    } else {
      setLogin(false);
      setTab("");
    }
  }

  function featchData() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setFeatchedData(response.data);
        console.log(response.data);
        //   setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div style={{ padding: "10px 20px 0px 20px" }}>
      {login === true ? (
        <Header selectedTab={(v) => setTab(v)} />
      ) : (
        <Login loginUser={() => handelLogin("true")} />
      )}
      {tab === "Home" ? (
        <Home />
      ) : tab === "Tasks" ? (
        <Tasks data={featchedData} />
      ) : tab === "User" ? (
        <User handelLogout={() => handelLogin("false")} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
