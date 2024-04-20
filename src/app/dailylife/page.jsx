"use client";
import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "../comp/Card";
import axios from "axios";
const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/auth/getpost/mypractice"
        );
        setData(res.data.daily);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
        <h1 className="text-2xl font-bold">No posts found</h1>
      </div>
    );
  } else {
    return (
      <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5 ">
        {data.map((item, index) => {
          return <MultiActionAreaCard key={index} item={item} />;
        })}
      </div>
    );
  }
};

export default Page;
