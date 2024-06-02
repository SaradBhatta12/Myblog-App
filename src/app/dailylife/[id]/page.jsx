"use client";
import Dyna from "@/app/comp/Dyna";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
const Page = () => {
  const { id } = useParams();
  const [value, setValue] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://sarad-scribble.vercel.app/api/auth/getpost/mypractice/${id}`
      );
      setValue(data.data.data);
    };
    getData();
  }, [id]);

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
