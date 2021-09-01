import React from "react";

export const TableSearch = props => {
  const [value, setValue] = React.useState("");
  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-group mb-3 mt-3">
      <button className="btn btn-outline-secondary" onClick={()=>props.onSearch(value)}>Search</button>
      <input
        type="text"
        value={value}
        onChange={valueChangeHandler}
        className="form-control"
      />
    </div>
  );
};
