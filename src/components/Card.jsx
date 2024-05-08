import React from "react";

function Card({ users, handleRemove, index }) {
  const { name, image, email } = users;
  return (
    <div
      className="w-48 min-h-48 bg-zinc-100 flex  items-center flex-col rounded-xl
    "
    >
      <div className="w-16 h-16 bg-zinc-500 rounded-full my-2 overflow-hidden">
        <img className="w-full h-full object-cover" src={users.image} alt="" />
      </div>
      <div
        className="text-center
      "
      >
        <h1
          className="font-semibold text-lg
        "
        >
          {name}
        </h1>
        <p> {email} </p>
        <button
          onClick={() => handleRemove(index)}
          className="px-3 my-4 py-1 bg-red-500 rounded-md"
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default Card;
