"use client";
import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "../comp/Card";
import axios from "axios";
import Link from "next/link";
const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await axios.get(`/api/auth/getpost/mypractice`);
        setData(res.data.daily);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div className=" text-center">Loading...</div>;
  }

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
          return (
            <Link href={`/dailylife/${item._id}`}>
              <MultiActionAreaCard item={item} />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default Page;
