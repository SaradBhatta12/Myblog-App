"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

export default function MultiActionAreaCard({ post }) {
  const [show, setShow] = useState(false);

  const deletePost = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/auth/getpost/delete/${post._id}`
      );
      console.log("Post deleted:", response.data);
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="border border-white p-1 relative"
    >
      <CardActionArea>
        <Link href={`/profile/${post._id}`}>
          <CardMedia
            component="img"
            height="140"
            image={post.image}
            alt={post.title}
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold text-center text-yellow-200"
          >
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-center gap-2">
        {/* Delete Post Button */}
        <Button size="small" onClick={deletePost} aria-label="Delete Post">
          <FaTrashAlt className="text-white text-2xl" />
        </Button>

        {/* Edit Post Button */}
        <Button
          size="small"
          onClick={() => setShow(!show)}
          aria-label="Edit Post"
        >
          <FaRegEdit className="text-white text-2xl" />
        </Button>
        {show && <Popup setShow={setShow} id={post._id} />}

        {/* Share Post Button */}
        <Button size="small" aria-label="Share Post">
          <FaShare className="text-white text-2xl" />
        </Button>
      </CardActions>
    </Card>
  );
}

const Popup = ({ setShow, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catagories, setCatagories] = useState("");
  const [file, setFile] = useState(null);
  const [NewData, setNewData] = useState({});

  useEffect(() => {
    try {
      const getdata = async () => {
        const resp = await axios.get(
          `http://localhost:3000/api/auth/getpost/all/${id}`
        );
        setNewData(resp.data.Blog);
      };
      getdata();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const submitHandler = async () => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("catagories", catagories);
    formdata.append("file", file);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/auth/getpost/edit/${id}`,
        formdata
      );
      console.log(res);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="popup fixed bg-slate-500 top-[30%] rounded z-30 p-6 w-[300px] ">
      <IoMdCloseCircle
        className="text-white text-2xl absolute top-1 cursor-pointer right-1"
        onClick={() => setShow(false)}
      />
      <form
        className="flex flex-col gap-3 mt-2"
        method="post"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Title"
          className=" text-blue-950 rounded"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={NewData.title}
        />
        <textarea
          name="description"
          id="desc"
          rows={"4"}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 text-amber-950 rounded"
          defaultValue={NewData.description}
        ></textarea>
        <input
          type="text"
          placeholder="Catagories"
          className=" text-blue-950 rounded"
          onChange={(e) => setCatagories(e.target.value)}
          defaultValue={NewData.catagories}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
