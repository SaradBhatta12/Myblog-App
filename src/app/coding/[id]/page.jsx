"use client";
import Dyna from "@/app/comp/Dyna";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const page = () => {
  let [value, setValue] = useState({});
  let [user, setUser] = useState({});
  console.log(user);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/auth/getpost/coding/${id}`
      );
      setValue(response.data.data);
      setUser(response.data.User);
    };
    getData();
  }, []);
  return (
    <div className="mt-8">
      <Dyna
        date={value.date}
        title={value.title}
        description={value.description}
        image={value.image}
      />
    </div>
  );
};

export default page;
