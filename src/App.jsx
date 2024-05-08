import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmitFormData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  return (
    <div className="w-full min-h-screen bg-zinc-300 md:flex ">
      <div className="md:w-80 w-full border-r-2 flex justify-center items-center">
        <Form handleSubmitFormData={handleSubmitFormData} />
      </div>
      <div className="p-5">
        <Cards handleRemove={handleRemove} users={users} />
      </div>
    </div>
  );
}

export default App;
