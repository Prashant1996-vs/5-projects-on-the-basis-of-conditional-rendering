import React from "react";
import { useState } from "react";
function EmptyBoxHandelingForm() {
  const [inpValue, setInpValue] = useState("");
  const [color, setColor] = useState("1px solid black");
  const [btn, setBtn] = useState({
    o: 1,
    cp: "pointer",
    db: false,
  });
  const handleSubmit = async () => {
    setBtn({ ...btn, o: 0.6, cp: "not-allowed", db: true });
    if (
      inpValue
        .split(/\s+/)
        .filter((x) => x !== "")
        .join(" ") !== ""
    ) {
      setColor("3px solid green");
      setTimeout(() => {
        setBtn({ ...btn, o: 1, cp: "pointer", db: false });
        setColor("1px solid black");
        setInpValue("");
      }, [2000]);
    } else {
      setColor("3px solid red");
      setTimeout(() => {
        setBtn({ ...btn, o: 1, cp: "pointer", db: false });
        setColor("1px solid black");
        setInpValue("");
      }, [2000]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "5px",
          gap: "20px",
        }}
      >
        <input
          style={{
            outline: "none",
            border: `${color}`,
            padding: "5px",
            borderRadius: "5px",
            width: "300px",
          }}
          disabled={btn.db}
          value={inpValue}
          type="text"
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "white",
            padding: "5px",
            fontWeight: "bold",
            fontSize: "20px",
            borderRadius: "5px",
            opacity: `${btn.o}`,
            cursor: `${btn.cp}`,
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default EmptyBoxHandelingForm;
