import React from "react";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import { courseCertification } from "./aboutUsContants";

const Trayectoria1 = () => {
    const goldColor1 = "#d4bc88";
    return (
        <Container sx={{ bgcolor: "", pt: 2 }}>
            <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
                <Grid item md={12} sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
                    <img src="images/trayectoria 3.png" style={{ width: "100%", height: "auto" }}></img>
                </Grid>
                <Grid item md={6} xs={12} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                    <img src="images/trayectoria 3.png" style={{ width: "100%", height: "" }}></img>
                </Grid>
                <Grid
                    item
                    md={6}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: { xs: "center", md: "" },
                        px: 3,
                        pt: { xs: 6, md: 3 },
                        bgcolor: "",
                        fontFamily: "Quicksand",
                        mb: { xs: 2, md: 0 },
                    }}
                >
                    <p style={{ fontSize: "23px" }}>
                        Mis logros incluyen múltiples victorias en campeonatos internacionales y nacionales de
                        Microblading: 1er Lugar en el Campeonato Internacional de México. Soy Artista Royal Phibrows
                        Microblading y Subcampeona en Microblading en Colombia.
                        <br></br>
                        <br></br>Hoy, continúo construyendo mi legado a través de la Academia Lina Quesada PMU, formando
                        a nuevos talentos y consolidando una impresionante trayectoria en el mundo de la
                        micropigmentación.
                    </p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Trayectoria1;
