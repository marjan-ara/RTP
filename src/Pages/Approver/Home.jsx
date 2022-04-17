import React from "react";
import "./Approver.css";
import { Button, Grid } from "@mui/material";
import image1 from "./../../assets/img/img1.jpg";
const Home = () => {
  return (
    <Grid container className="max-height">
      <Grid item xs={6} md={5} style={{ height: "100vh", margin: "0" }}>
        <img className="max-height" src={image1} alt="Task Planner" />
      </Grid>
      <Grid item xs={6} md={7}>
        <div className="home-div">
          <p className="title">Recurring Task Planner</p>
          <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Lorem ipsum is placeholder text
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1em" }}>
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
