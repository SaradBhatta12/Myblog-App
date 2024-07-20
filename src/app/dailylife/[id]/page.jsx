"use client";
import Dyna from "@/app/comp/Dyna";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/comp/Loading";
const Page = () => {
  const { id } = useParams();
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(true); // Initialize loading as true

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/auth/getpost/mypractice/${id}`);
        setValue(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here (e.g., show an error message)
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (loading) {
    return <Loading />; // Show loading indicator
  }

  return (
    <div className="mt-8">
      <Dyna
        date={value.createdAt}
        title={value.title}
        description={value.description}
        image={value.image}
      />
    </div>
  );
};

export default Page;
