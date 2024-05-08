import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {users.map((user, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            users={user}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
