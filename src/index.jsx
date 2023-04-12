import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import NavbarComponent from "./components/Navbar";
import Courses from "./components/Courses/Courses";
import CoursesDetails from "./components/Courses/CoursesList";
import CoursesList from "./components/Courses/CoursesList";
import Banner from "./components/mainPage/Banner";
import Navbar from "./components/Navbar/NavbarDrawer";
import Footer from "./components/mainPage/Footer";
// import reportWebVitals from './reportWebVitals';
import { AnimatePresence } from "framer-motion";
import { Box,Grid } from "@mui/material";
import MainPage from "./components/mainPage/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnimatePresence>
      <Navbar></Navbar>
      <Grid>
        <Grid item xs={12} md={12}>
        <Box sx={{ pt: 12, backgroundColor:'' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursesDetails" element={<CoursesList />} />
        </Routes>
      </Box>
        </Grid>
        <Grid item xs={12} md={12}>
        <Footer/>
        </Grid>
      </Grid>
    </AnimatePresence>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
