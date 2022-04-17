import React from "react";
import { Helmet } from "react-helmet";
import TopMenu from "./TopMenu";

const MainLayout = (props) => {
  return (
    <div className="max-height" style={{ position: "relative" }}>
      <div className="top-curved-div"></div>
      <div className="bottom-curved-div"></div>
      <Helmet>
        <title>Recurring Task Planner</title>
      </Helmet>
      <div className="flex-container">
        <div>
          <TopMenu />
        </div>
        <div className="max-height">
          <main className="main-div" id="main layout">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
