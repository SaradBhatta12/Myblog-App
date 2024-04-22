"use client";
import MultiActionAreaCard from "./comp/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const res = await axios.get(
          "http://localhost:3000/api/auth/getpost/all"
        );
        setData(res.data.allblogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    getData();
  }, []); // Only run on initial mount

  return (
    <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
      {loading ? ( // Check loading state
        <div>Loading...</div> // Render loading indicator if loading
      ) : (
        data.map((item, index) => (
          <Link href={`/${item._id}`} key={index}>
            {" "}
            {/* Wrap MultiActionAreaCard with anchor tag */}
            <MultiActionAreaCard item={item} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Page;
