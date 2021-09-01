import React from "react";

export const DetailRowView = ({ person }) => {
  return (
    <div>
      Выбран пользователь:<b>{person.first_name}</b>
      <br />
      Полное имя: {`${person.first_name} ${person.last_name}`}
      <br />
      Email:<b>{person.email}</b>
    </div>
  );
};
