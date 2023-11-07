import FormView from "@/app/components/FormView";
import React from "react";

const Contact = () => {
  return (
    <>
    <div className="flex justify-center my-5 w-full md:w-4/5 lg:w-4/5 flex-col">
      <h2 className="text-center mb-5 text-xl md:text-3xl">Me contacter</h2>
      <FormView />
    </div>
    </>
  );
};

export default Contact;
