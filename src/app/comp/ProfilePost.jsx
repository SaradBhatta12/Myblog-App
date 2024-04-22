import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import PupUp from "./PupUp";

export default function MultiActionAreaCard(post) {
  const blog = post.post;

  const deletePost = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/auth/getpost/delete/${blog._id}`
    );
  };

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="border border-white p-1"
    >
      <CardActionArea>
        <Link href={`/profile/${blog._id}`}>
          <CardMedia
            component="img"
            height="140"
            image={blog.image}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold  text-center text-yellow-200"
          >
            {blog.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className=" flex justify-center gap-2">
        {/*  */}
        <Link
          href={`http://localhost:3000/api/auth/getpost/delete/${blog._id}`}
        >
          <Button size="small" className="">
            <FaDeleteLeft className="text-white text-2xl" />
          </Button>
        </Link>
        <Button size="small" className="">
          <FaRegEdit className="text-white text-2xl" />
        </Button>
        <Button size="small" className="">
          <FaShare className="text-white text-2xl" />
        </Button>
      </CardActions>
    </Card>
  );
}
