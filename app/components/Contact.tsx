import FormView from "@/app/components/FormView";
import React, { useState } from "react";

const Contact = () => {
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);

  const handleSubmissionResultChange = (newResult: string | null) => {
    setSubmissionResult(newResult);
  };

  return (
    <>
    <div className="flex justify-center my-5 w-full md:w-4/5 lg:w-4/5 flex-col">
      <span>Status du code: {submissionResult}</span>

      {submissionResult === 'success' && <h2>Test OK</h2>}
      {(submissionResult === null || submissionResult === 'error') && <FormView onSubmissionResultChange={handleSubmissionResultChange} />}
      {submissionResult === 'error' && <h2>Test NOT OK</h2>}
    </div>
    </>
  );
};

export default Contact;
