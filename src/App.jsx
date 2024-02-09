//Liberías
import { Box, Grid } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import {useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes
import "./App.css";
import Courses from "./components/Courses/Courses";
import CoursesList from "./components/Courses/CoursesList";
import Footer from "./components/mainPage/Footer";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/Navbar/NavbarDrawer";
import Procedimientos from "./components/Procedimientos/Procedimientos";
// import reportWebVitals from './reportWebVitals';

function App() {
  
const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

   useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()
    if(scrollPosition.scrollY > 100){alert(scrollPosition)}
    return () => window.removeEventListener('scroll', updatePosition)
   }, [])
  
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Navbar></Navbar>
        <Grid>
          <Grid item xs={12} md={12}>
            <Box sx={{ pt: 8, backgroundColor: "" }}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/coursesDetails" element={<CoursesList />} />
                <Route path="/procedimientos" element={<Procedimientos />} />
              </Routes>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Footer />
          </Grid>
        </Grid>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

{
  /* <NavbarComponent></NavbarComponent>
      <div className='my-3'>
        <a href="#banner">Banner</a>
        <section id='banner'> 
        <MainBanner></MainBanner>
        </section>
      </div> */
}
