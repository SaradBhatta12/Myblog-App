import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ item }) {
  const desc = item.description.substring(0, 100);

  return (
    <Card
      key={item._id}
      sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="border border-white p-1"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold text-white"
          >
            {item.title}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className="text-white">
          More
        </Button>
      </CardActions>
    </Card>
  );
}
