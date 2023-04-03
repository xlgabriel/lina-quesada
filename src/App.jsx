import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Banner from "./components/mainPage/Banner";
import Button from 'react-bootstrap/Button';
import Courses from "./components/Courses/Courses";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div class="container text-center bg-primary">
  <div class="row">
  {['a', 'b'].map(task => <h1>{task}</h1>)}
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
    
  );
}

export default App;

{/* <NavbarComponent></NavbarComponent>
      <div className='my-3'>
        <a href="#banner">Banner</a>
        <section id='banner'> 
        <MainBanner></MainBanner>
        </section>
      </div> */}
      