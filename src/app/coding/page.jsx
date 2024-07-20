"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiActionAreaCard from "../comp/Card";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/auth/getpost/coding`);
        setData(res.data.coding);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  } else {
    return (
      <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5 ">
        {data.map((item, index) => (
          <Link href={`/coding/${item._id}`}>
            <MultiActionAreaCard item={item} />
          </Link>
        ))}
      </div>
    );
  }
};

export default Page;
