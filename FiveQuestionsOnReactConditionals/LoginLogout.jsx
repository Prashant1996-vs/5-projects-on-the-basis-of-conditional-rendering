import React, { useState } from "react";
function LoginLogout() {
  const [res, setRes] = useState(true);
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
      {res ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input placeholder="Admin" disabled />
          <input placeholder="Password" disabled />
          <button onClick={() => setRes(!res)}>Login</button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Welcome, you are successfully LogedIn</p>
          <button onClick={() => setRes(!res)}>Logout</button>
        </div>
      )}
    </div>
  );
}
export default LoginLogout;
