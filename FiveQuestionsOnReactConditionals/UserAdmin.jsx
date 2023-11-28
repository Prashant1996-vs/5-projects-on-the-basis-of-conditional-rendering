import React, { useState } from "react";
function UserAdmin() {
  const [inp, setInp] = useState({
    iid: "",
    ipassword: "",
  });
  const [check, setCheck] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  const [err, setErr] = useState(false);
  const [displayy, setDisplayy] = useState(true);
  const handleLogin = () => {
    if (inp.iid === "admin" && inp.ipassword === "admin") {
      setCheck(true);
      setDisplayy(false);
      setLoginCheck(true);
    } else if (inp.iid === "user" && inp.ipassword === "user") {
      setCheck(true);
      setDisplayy(false);
      setLoginCheck(false);
    } else {
      setCheck(false);
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, [3000]);
    }
    setInp({ ...inp, iid: "", ipassword: "" });
  };
  const logout = () => {
    setCheck(false);
    setDisplayy(true);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: displayy ? "flex" : "none",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "column",
          gap: "10px",
          fontWeight: "bold",
          borderBottom: "1px solid black",
          paddingBottom: "15px",
        }}
      >
        <label>
          Username &nbsp;
          <input
            type="text"
            value={inp.iid}
            onChange={(e) => setInp({ ...inp, iid: e.target.value })}
          />
        </label>
        <label>
          Password &nbsp;
          <input
            type="text"
            value={inp.ipassword}
            onChange={(e) => setInp({ ...inp, ipassword: e.target.value })}
          />
        </label>
        <button onClick={(e) => handleLogin(e)}>Submit</button>
      </div>
      {check ? (
        <>
          {loginCheck ? (
            <div>
              <b>Admin</b>
              <br></br> <br></br>
              <button onClick={() => logout()}>Admin Logout</button>
            </div>
          ) : (
            <div>
              <b>User</b>
              <br></br> <br></br>
              <button onClick={() => logout()}>User Logout</button>
            </div>
          )}
        </>
      ) : (
        <>
          {err ? (
            <b style={{ color: "red" }}>You are neither a USER nor an ADMIN</b>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}
export default UserAdmin;
