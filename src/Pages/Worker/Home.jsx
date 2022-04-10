import React from "react";
import "./Worker.css";
import { Button, Card, Grid } from "@mui/material";
import image1 from "./../../assets/img/img1.jpg";
const Home = () => {
  return (
    <Grid container className="max-height">
      <Grid item xs={6} md={5} style={{ height: "100%", margin: "0" }}>
        <img className="max-height" src={image1} alt="Task Planner" />
      </Grid>
      <Grid item xs={6} md={7}>
        <div className="home-div">
          <p className="title">Recurring Task Planner</p>
          <p style={{ fontWeight: "bold" }}>Lorem ipsum is placeholder text</p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Button variant="contained" className="home-button">
            Read More
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
