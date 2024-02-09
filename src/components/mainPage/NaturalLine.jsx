import React from 'react'
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import { courseCertification } from "./aboutUsContants";

const NaturalLine = () => {
    const goldColor1 = "#d4bc88";
    return (
        <Container sx={{ bgcolor: "" }}>
            <Grid container sx={{display:"flex", justifyContent:"space-around"}}>
                <Grid item md={6} sx={{display:"flex", justifyContent:"center"}}>
                    <img src='images/creadora-natural-line.PNG' style={{width:'auto', height:"100vh", aspectRatio:'1:1'}}></img>
                </Grid>
                <Grid item md={6} sx={{display:"flex", alignItems:"center", px:4, bgcolor:""}}>
                    <Typography sx={{fontSize:"30px", fontFamily:'Quicksand', color:goldColor1}}>Apasionada por el arte, soy la mente creativa detrás de la técnica "Natural Line", una creación propia que fusiona hiperrealismo con el movimiento natural del vello, destacándome en la vanguardia del sector.</Typography>
                </Grid>
            </Grid>
        </Container>
  )
}

export default NaturalLine