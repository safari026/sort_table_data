import React from "react";
import notFound from "../assets/404.jpeg";

export const Table = (props) => {
  const { items, requestSort, sortConfig, setRow } = props;

  const renderTableItems = () => {
    return (
      <>
        {items.map((item) => (
          <tr key={item.id} onClick={() => setRow(item)}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </>
    );
  };
  return (
    <>
      {items ? (
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => requestSort("id")}>
                Id
                {sortConfig && sortConfig.key === "id" ? (
                  <small>{sortConfig.direction}</small>
                ) : null}
              </th>
              <th onClick={() => requestSort("first_name")}>
                First Name{" "}
                {sortConfig && sortConfig.key === "first_name" ? (
                  <small>{sortConfig.direction}</small>
                ) : null}
              </th>
              <th onClick={() => requestSort("last_name")}>
                Last Name{" "}
                {sortConfig && sortConfig.key === "last_name" ? (
                  <small>{sortConfig.direction}</small>
                ) : null}
              </th>
              <th onClick={() => requestSort("email")}>
                Email{" "}
                {sortConfig && sortConfig.key === "email" ? (
                  <small>{sortConfig.direction}</small>
                ) : null}
              </th>
              <th onClick={() => requestSort("gender")}>
                Gender{" "}
                {sortConfig && sortConfig.key === "gender" ? (
                  <small>{sortConfig.direction}</small>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>{renderTableItems()}</tbody>
        </table>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={notFound} width="500" height="500" />
        </div>
      )}
    </>
  );
};
