import React from "react";
function ListRendering() {
  //   const arr = [3, 2, 7, 8, 5, 9, 1, 0, 4];
  const arr = [];
  return (
    <div>
      {arr.length === 0 ? (
        <b>No List is there</b>
      ) : (
        <ul>
          {arr.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ListRendering;
