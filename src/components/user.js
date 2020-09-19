import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function UserInfo(props) {
  const [name, setName] = useState("Ankit Desai");
  const [pass, setPass] = useState("asd");
  const [passBtn, setPassBtn] = useState("Change Password");
  const [passBox, setPassBox] = useState({ pass: true, change_pass: "none" });
  const [passSec, setPassSec] = useState("Password");

  function handelChangePassword() {
    if (passBtn === "Change Password") {
      setPassBtn("Save Password");
      setPassSec("New Password");
      setPassBox({ pass: "none", change_pass: true });
    } else {
      if (pass === "") {
        alert("Must be Somethig !");
      } else {
        setPassBtn("Change Password");
        setPassSec("Password");
        setPassBox({ pass: true, change_pass: "none" });
      }
    }
  }

  function handelChange(v) {
    setPass(v);
  }

  function handelClick() {
    props.handelLogout();
  }
  return (
    <div>
      <center>
        <div style={{ fontSize: "30px", paddingTop: "100px" }}>
          <form>
            <div>
              <p>
                <label style={{ paddingRight: "30px" }}>Username : </label>
                <input
                  type="text"
                  style={{
                    border: "solid black 0px",
                  }}
                  value={name}
                  readOnly={true}
                />
              </p>
              <p>
                <label style={{ paddingRight: "30px" }}>{passSec} : </label>
                <input
                  type="password"
                  style={{
                    border: "solid black 0px",
                    display: passBox.pass,
                  }}
                  value={pass}
                  readOnly={true}
                />
                <input
                  type="text"
                  style={{
                    border: "solid black 1px",
                    display: passBox.change_pass,
                  }}
                  onChange={(e) => handelChange(e.target.value)}
                  value={pass}
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
            onClick={(e) => {
              handelChangePassword();
            }}
          >
            {passBtn}
          </Button>
          <Button
            style={{
              fontSize: "15px",
              border: "solid black 1px",
            }}
            onClick={(e) => {
              handelClick();
            }}
          >
            Logout
          </Button>
        </div>
      </center>
    </div>
  );
}
