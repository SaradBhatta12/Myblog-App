"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaShare } from "react-icons/fa";
import ProfilePost from "../comp/ProfilePost";
import axios from "axios";
import Link from "next/link";

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample user data
  const user = {
    name: "Sarad Bhatta 👌😍",
    email: "saradbhat2@gmail.com",
    age: 21,
    profilePic:
      "https://avatars.githubusercontent.com/u/88665300?s=400&u=8fbf16e60db14babaf0162981a43621320b47249&v=4", // Placeholder profile picture
    posts: [
      {
        id: 1,
        content: "Lorem ipsum dolor sit amet.",
        timestamp: "3 hours ago",
      },
    ],
  };

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/getpost/all"
        );
        setPosts(response.data.allblogs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  if (loading) {
    return <div className="loading text-center">loading................</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />

        {/* Name, Email, Age */}
        <div className="text-center">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">Age: {user.age}</p>
        </div>
      </div>

      <div className="posts flex justify-center align-middle m-3 flex-wrap gap-8">
        {posts.map((post) => {
          return <ProfilePost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
