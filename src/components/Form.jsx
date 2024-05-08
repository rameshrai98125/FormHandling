import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleSubmitFormData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    handleSubmitFormData(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          {...register("name")}
          className="w-52 my-2 p-1 rounded-md outline-none font-semibold"
          type="text"
          placeholder="name"
        />
        <br />
        <input
          {...register("email")}
          className="w-52 my-2 p-1 rounded-md outline-none font-semibold"
          type="email"
          placeholder="email"
        />
        <br />
        <input
          {...register("image")}
          className="w-52 my-2 p-1 rounded-md outline-none font-semibold"
          type="text"
          placeholder="image url"
        />
        <br />
        <input
          className="px-5 py-1 bg-blue-500 text-white cursor-pointer"
          type="submit"
          value={"Add data"}
        />
        <br />
      </form>
    </div>
  );
}

export default Form;
