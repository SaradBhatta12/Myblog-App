import React from "react";

const PupUp = () => {
  return (
    <div className=" border border-white rounded p-2 mb-2">
      <p className=" text-xl">Would you like to delete?</p>
      <div className="button flex align-middle gap-2">
        <button className=" border border-white p-1 rounded">Yes</button>
        <button className=" border border-white p-1 rounded">no</button>
      </div>
    </div>
  );
};

export default PupUp;
