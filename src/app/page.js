"use client";
import MultiActionAreaCard from "./comp/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://sarad-scribble.vercel.app/api/auth/getpost/all"
      );
      setData(res.data.allblogs);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again later.");
    }
  };

  useEffect(() => {
    getData();
  }, []); // This will run only once when the component is mounted.

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center">Loading...</div>; // Display a loading message or spinner
  }

  return (
    <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
      {data.map((item, index) => (
        <Link key={item._id} href={`/${item._id}`}>
          <MultiActionAreaCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Page;
