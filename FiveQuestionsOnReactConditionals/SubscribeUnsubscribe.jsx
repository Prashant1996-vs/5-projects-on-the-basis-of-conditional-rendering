import React, { useState } from "react";
import { ImYoutube2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
function SubscribeUnsubscribe() {
  const [check, setCheck] = useState(true);
  const handleData = () => {
    setCheck(!check);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          height: "70vh",
          width: "20vw",
          border: "0.5vw solid black",
          borderRadius: "1.3vw",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "2vw", textAlign: "center" }}
        >
          000
        </div>
        <div
          className="iii"
          style={{
            height: "80%",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "0.3vw solid black",
            borderRadius: "1.3vw",
            backgroundColor: check ? "red" : "green",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            // backdropFilter:`blur(100px)`
          }}
        >
          {check ? (
            <ImYoutube2 style={{ color: "white", fontSize: "15vw" }} />
          ) : (
            <TiTick style={{ color: "white", fontSize: "15vw" }} />
          )}
          <button
            style={{
              fontWeight: "bold",
              position: "absolute",
              bottom: "1vw",
              right: "1vw",
              borderRadius: "0.8vw",
              border: "0.2vw solid black",
              backgroundColor: "white",
              padding: "0.5vw",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "1.2vw",
            }}
            onClick={() => handleData()}
          >
            {check ? "Subscribe" : "Unsubscribe"}
          </button>
        </div>
        <div
          style={{
            height: "2vw",
            width: "2vw",
            border: "0.4vw solid black",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}
export default SubscribeUnsubscribe;
