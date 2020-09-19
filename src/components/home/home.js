import React, { useState } from "react";
import DropDown from "./dropDown";
import Info from "./info";

export default function Home(props) {
  const [selected, setSelected] = useState("asd");

  return (
    <div>
      <div style={{ paddingTop: "20px" }}>
        <DropDown handelSelected={(v) => setSelected(v)} />
        <p
          style={{
            fontFamily: " cursive",
            fontSize: "15px",
            padding: "20px 20px 20px 20px",
          }}
        >
          <Info selectedOption={selected} />
        </p>
      </div>
    </div>
  );
}
