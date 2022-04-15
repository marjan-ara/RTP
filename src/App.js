import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Activities from './Pages/Approver/Activities';
import Home from "./Pages/Approver/Home";
import "./assets/css/App.css"
import ActivityItemDetails from "./Pages/Approver/ActivityItemDetails";
import GlobalState from "./Context/GlobalState";

const App = (props) => {
    return (
      <GlobalState>
        <MainLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/toBeApproved" element={<Activities />}></Route>
              <Route
                path="/ActivityItemDetails"
                element={<ActivityItemDetails />}
              />
            </Routes>
          </BrowserRouter>
        </MainLayout>
      </GlobalState>
    );
}
 
export default App;