"use client";
import MultiActionAreaCard from "./comp/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/auth/getpost/all"
        );
        setData(res.data.allblogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
      {data.map((item, index) => (
        <Link href={`/${item._id}`}>
          {" "}
          <MultiActionAreaCard key={index} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Page;
