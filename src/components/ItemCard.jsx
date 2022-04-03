import React from "react";
import { Card, CardHeader, CardContent, Avatar } from "@mui/material"
import { red } from '@mui/material/colors';


const ItemCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {" "}
            R{" "}
          </Avatar>
        }
        title={item.name}
        subheader={item.price}
      />
      <CardContent>{item.desc}</CardContent>
    </Card>
  );
};

export default ItemCard;
