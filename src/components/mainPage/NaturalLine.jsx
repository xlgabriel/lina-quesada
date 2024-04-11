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
                <Grid item md={6} sx={{display:{xs:"flex", md:"none"}, justifyContent:"center"}}>
                    <img src='images/natural-line-2.png' style={{width:'100%', height:"auto", aspectRatio:'1:1'}}></img>
                </Grid>
                <Grid item md={6} xs={12} sx={{display:"flex", alignItems:"center", px:4, py:{xs:6, md:2}}}>
                    <Typography sx={{fontSize:"30px", fontFamily:'Quicksand', color:goldColor1, textAlign:{xs:'center', md:'initial'}}}>Apasionada por el arte, soy la mente creativa detrás de la técnica "Natural Line", una creación propia que fusiona hiperrealismo con el movimiento natural del vello, destacándome en la vanguardia del sector.</Typography>
                </Grid>
                <Grid item md={6} sx={{display:{xs:"none", md:"flex"}, justifyContent:"center"}}>
                    <img src='images/natural-line-2.png' style={{width:'100%', height:"", aspectRatio:'1:1'}}></img>
                </Grid>
            </Grid>
        </Container>
  )
}

export default NaturalLine