"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiActionAreaCard from "../comp/Card";
const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/auth/getpost/coding"
        );
        setData(res.data.coding);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5 ">
      {data.map((item, index) => (
        <MultiActionAreaCard key={index} item={item} />
      ))}
    </div>
  );
};

export default page;
