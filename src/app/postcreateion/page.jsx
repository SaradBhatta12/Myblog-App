"use client";
import axios from "axios";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(""); // State for file preview
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catagories, setCatagories] = useState(""); // Fixed typo
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Create a preview URL for the selected file
      const previewUrl = URL.createObjectURL(selectedFile);
      setFilePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("file", file);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("catagories", catagories); // Fixed typo

    try {
      setLoading(true);
      const response = await axios.post(`/api/auth/blogpost`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
      console.log(response.data);

      // Reset form fields after submission
      setFile(null);
      setFilePreview(""); // Clear image preview
      setTitle("");
      setDescription("");
      setCatagories(""); // Fixed typo

      // Redirect to the home page after successful submission
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container text-center">
        <div className="spinner"></div>
        <style jsx>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .spinner {
            border: 16px solid #f3f3f3;
            border-top: 16px solid #3498db;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="catagories"
              value={catagories}
              onChange={(e) => setCatagories(e.target.value)}
            >
              <option value="" className="text-black">
                Select a category
              </option>
              <option value="coding" className="text-black">
                coding
              </option>
              <option value="dailylife" className="text-black">
                daily
              </option>
              {/* Add more categories as needed */}
            </select>
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
            {filePreview && (
              <div className="mt-4">
                <img
                  src={filePreview}
                  alt="Preview"
                  className="w-full max-w-xs h-auto border border-gray-300 rounded"
                />
              </div>
            )}
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
};

export default UploadForm;
