import axios from "axios";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
const PupUp = ({ id, showPopUp }) => {
  const deletePost = async () => {
    try {
      const response = await axios.delete(`/api/auth/getpost/delete/${id}`);
      response.data.success == true
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };
  console.log(id, showPopUp);
  return (
    <div className=" border border-white rounded p-2 mb-2">
      <p className=" text-xl">Would you like to delete?</p>
      {/* <IoMdCloseCircle className="text-white text-2xl absolute top-1 cursor-pointer right-1" /> */}
      <div className="button flex align-middle gap-2">
        <button
          className=" border border-white p-1 rounded"
          onClick={deletePost}
        >
          Yes
        </button>
        <button
          className=" border border-white p-1 rounded"
          onClick={() => showPopUp(false)}
        >
          no
        </button>
      </div>
    </div>
  );
};

export default PupUp;
