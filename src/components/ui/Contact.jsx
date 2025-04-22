import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .send("service_87cz7xd", "template_v5szvyj", data, "0-XbO3mvk764oivXy")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
        reset();
      });
  };

  return (
    <div
      className="mt-10 mx-4 sm:mx-10 md:*:mx-[25%]
     lg:mx-40"
    >
      <h1 className="text-center m-5 text-3xl font-bold text-blue-600">
        Contact
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 rounded-2xl p-6 sm:p-8  border-black flex flex-col gap-6 sm:gap-8 md:gap-10 shadow-2xl shadow-blue-300 hover:shadow-xl"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          {...register("name", { required: true })}
        />
        <input
          type="tel"
          placeholder="Your Mobile"
          className="w-full p-2 border rounded"
          {...register("mobile", { required: true })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          {...register("email", { required: true })}
        />
        <textarea
          placeholder="Your Query"
          className="w-full p-2 border rounded md:max-h-32 sm:h-40"
          {...register("message", { required: true })}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
