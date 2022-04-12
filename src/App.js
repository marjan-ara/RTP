import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Activities from './Pages/Approver/Activities';
import Home from "./Pages/Approver/Home";
import "./assets/css/App.css"

const App = (props) => {
    return (
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/toBeApproved" element={<Activities />}></Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
      // <div>
      //  {/* <Activities /> */}
      //  <Home/>
      //     {/* <Route path="/" exact component={Activities} />
      //     <Route path="/ActivityList" exact component={Activities}/> */}

      // </div>
    );
}
 
export default App;