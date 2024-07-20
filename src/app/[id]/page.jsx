"use client";
import Dyna from "@/app/comp/Dyna";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "../comp/Loading";

const Page = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/auth/getpost/all/${id}`);

        if (res.data.error && res.data.error.name === "CastError") {
          setError("404 Page Not Found");
        } else {
          setBlog(res.data.Blog); // Ensure the response data has a 'Blog' property
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error text-white">
        <h1>{error}</h1>
        <p>Page Not Found</p>
        <p className="return">return to home</p>
      </div>
    );
  }

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
