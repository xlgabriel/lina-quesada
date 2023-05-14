//Liberías
import { Box, Grid } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes
import "./App.css";
import Courses from "./components/Courses/Courses";
import CoursesList from "./components/Courses/CoursesList";
import Footer from "./components/mainPage/Footer";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/Navbar/NavbarDrawer";
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Navbar></Navbar>
        <Grid>
          <Grid item xs={12} md={12}>
            <Box sx={{ pt: 8, backgroundColor: "" }}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/coursesDetails" element={<CoursesList />} />
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
