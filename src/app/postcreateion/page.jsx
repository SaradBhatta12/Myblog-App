"use client";
import axios from "axios";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Catagories, setCatagories] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("file", file);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("catagories", Catagories);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/auth/blogpost",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
      console.log(response.data);
      // Reset form fields after submission
      setFile(null);
      setTitle("");
      setDescription("");
      setCatagories("");
      // Redirect to the home page after successful submission
      router.push("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading text-center">loading...............</div>;
  } else {
    return (
      <div className="mt-8">
        <div className="bg-black min-h-screen flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4">
              Upload Your File
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="catagories"
              >
                Catagories
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter catagories"
                value={Catagories}
                setCatagories
                onChange={(e) => setCatagories(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                className="hidden"
                id="file-upload"
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center justify-center"
              >
                <FiUpload className="mr-2" /> Upload File
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    );
  }
};

export default UploadForm;
