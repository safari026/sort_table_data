import React from "react";

export const ModeSelector = (props) => {
  const smallUrl = `http://localhost:8000/users?_start=1&_end=34`;
  const biglUrl = `http://localhost:8000/users?_start=1&_end=499`;

  return (
    <div style={{display:'flex', justifyContent:'center', padding:'50px 0 0'}}>
      <button 
        onClick={() => props.onSelect(smallUrl)}
        className="btn btn-success"
      >
        32 elements
      </button>
      <button
        onClick={() => props.onSelect(biglUrl)}
        className="btn btn-danger"
      >
        500 elements
      </button>
    </div>
  );
};
