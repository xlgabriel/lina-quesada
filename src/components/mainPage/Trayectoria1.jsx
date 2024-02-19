import React from 'react'
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import { courseCertification } from "./aboutUsContants";

const Trayectoria1 = () => {
    const goldColor1 = "#d4bc88";
    return (
        <Container sx={{ bgcolor: "",  }}>
            <Grid container sx={{display:"flex", justifyContent:"space-around"}}>
                <Grid item md={6} sx={{display:"flex", alignItems:"center", px:4, pt:{xs:6, md:4}, bgcolor:"", fontFamily:"Quicksand"}}>
                    <p style={{fontSize:"23px"}}>Mis logros incluyen múltiples victorias en campeonatos internacionales y nacionales de Microblading, entre ellos el 1er Lugar en el Campeonato Internacional de México. Soy Phibrows artista Royal Microblading y Subcampeona en Microblading en Colombia.
                    <br></br><br></br>Hoy, continúo construyendo mi legado a través de la Academia Lina Quesada PMU, formando a nuevos talentos y consolidando una impresionante trayectoria en el mundo de la micropigmentación.
                    </p>
                </Grid>
                <Grid item md={6} sx={{display:"flex", justifyContent:"center"}}>
                    <img src='images/lina-quesada-verde-sin-fondo.png'></img>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Trayectoria1


