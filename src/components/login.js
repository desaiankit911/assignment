import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function UserInfo(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handelChange(k, v) {
    if (k === "name") {
      setName(v);
    } else {
      setPass(v);
    }
  }

  function handelClick() {
    if (name === "Ankit Desai" && pass === "asd") {
      props.loginUser();
    } else {
      alert("Wrong UserName or Password !");
    }
  }
  return (
    <div>
      <div>
        <center>
          <div style={{ fontSize: "30px", paddingTop: "100px" }}>
            <h2 style={{ color: "blue", paddingBottom: "30px" }}>
              -: Test Site :-
            </h2>
            <form>
              <div>
                <p>
                  <label style={{ paddingRight: "30px" }}>Username : </label>
                  <input
                    type="text"
                    style={{
                      border: "solid black 1px",
                    }}
                    onChange={(e) => handelChange("name", e.target.value)}
                  />
                </p>
                <p>
                  <label style={{ paddingRight: "30px" }}>Password : </label>
                  <input
                    type="password"
                    style={{
                      border: "solid black 1px",
                    }}
                    onChange={(e) => handelChange("pass", e.target.value)}
                  />
                </p>
              </div>
            </form>
          </div>

          <div style={{ paddingTop: "20px" }}>
            <Button
              style={{
                fontSize: "15px",
                border: "solid black 1px",
              }}
              onClick={handelClick}
            >
              Login
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}
