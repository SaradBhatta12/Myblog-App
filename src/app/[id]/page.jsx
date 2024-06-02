"use client";
import Dyna from "@/app/comp/Dyna";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
const Page = () => {
  const [blog, setBlog] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://sarad-scribble.vercel.app/api/auth/getpost/all/${id}`
        );
        if (res.data.error.name === "CastError") {
          return (
            <div className="error text-white">
              <h1>404</h1>
              <p>Page Not Found</p>
              <p className="return">return to home</p>
            </div>
          );
        }

        setBlog(res.data.Blog); // Assuming the response data has a 'blog' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="mt-8">
      <Dyna
        date={blog.createdAt} // Ensure 'createdAt' exists in the 'blog' object
        title={blog.title} // Ensure 'title' exists in the 'blog' object
        description={blog.description} // Ensure 'description' exists in the 'blog' object
        image={blog.image} // Ensure 'image' exists in the 'blog' object
      />
    </div>
  );
};

export default Page;
