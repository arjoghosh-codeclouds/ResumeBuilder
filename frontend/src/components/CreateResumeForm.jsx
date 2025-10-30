"use client"
import { useState } from "react"
import { Input } from "./Inputs"
import axiosInstance from "../utils/axiosInstance"
import { API_PATHS } from "../utils/apiPaths"

const CreateResumeForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleCreateResume = async (e) => {
    e.preventDefault();
    if (!title) 
    {
      setError("Please enter resume title");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title });
      if (response.data?._id) {
       
        if (onSuccess) onSuccess(response.data._id);
      } else {
        setError("Failed to create resume. Please try again.");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-900 rounded-2xl border border-gray-700 shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-2">Create New Resume</h3>
      <p className="text-gray-400 mb-8">
        Give your resume a title  to get started. You can customize everything later.
      </p>

      <form onSubmit={handleCreateResume}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          label="Resume Title"
          placeholder="e.g., John Doe - Software Engineer"
          type="text"
          className="bg-gray-800 text-black-700 placeholder-gray-400 border-gray-600 focus:border-red-500 focus:ring-red-500"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 bg-red-500  text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl transition-all"
        >
          Create Resume
        </button>
      </form>
    </div>
  );
};

export default CreateResumeForm;


