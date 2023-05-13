import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Job from "./Components/Data/Job";
import Jobdetail from "./Components/Data/Jobdetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Job />} />
          <Route path="jobdetail/:id" element={<Jobdetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
