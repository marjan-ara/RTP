import { Grid, Card } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import TopMenu from "./TopMenu";
import image1 from "./../../assets/img/img1.jpg";
const MainLayout = (props) => {
  return (
    <div className="max-height" style={{position:"relative"}}>
      <div className="top-curved-div"></div>
      <div className="bottom-curved-div"></div>
      <Helmet>
        <title>Recurring Task Planner</title>
      </Helmet>
      {/* <Grid container>
        <Grid item xs={12} s={12} md={12} lg={12}> */}
          <TopMenu />
        {/* </Grid>
        <Grid item xs={12} s={12} md={12} lg={12}> */}
          <main className="main-div" id="main layout">
            {props.children}
          </main>
        {/* </Grid>
      </Grid> */}

      {/* <div>
        <div className="main-div"></div>
      </div> */}
    </div>
  );
};

export default MainLayout;
