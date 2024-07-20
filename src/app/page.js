"use client";
import MultiActionAreaCard from "./comp/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "./comp/Loading";

const Page = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getData = async () => {
    try {
      const res = await axios.get(`/api/auth/getpost/all`);
      setState({ data: res.data.allblogs, loading: false, error: null });
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({
        data: [],
        loading: false,
        error: "Failed to load data. Please try again later.",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []); // This will run only once when the component is mounted.

  const { data, loading, error } = state;

  if (loading) {
    return <Loading />; // Display a loading spinner
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
      {data.map((item) => (
        <Link key={item._id} href={`/${item._id}`}>
          <MultiActionAreaCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Page;
