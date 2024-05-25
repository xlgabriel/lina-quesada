import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
    // color:#bf930d
    const goldColor = "#d3a737";

    return (
        // <Box sx={{ py: 4, overflowY: "hidden", width: "100%" }}>
        <Container sx={{ pt: { xs: 0, md: 6 } }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    lg={7}
                    component={motion.div}
                    initial={{ x: -900 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    exit={{ x: 0 }}
                    sx={{ mt: 7, px: { xs: 1, md: 0 }, textAlign: { xs: "center", md: "left" } }}
                >
                    <Typography variant="h2" sx={{ color: "#d4bc88", fontFamily: "palatino-linotype" }}>
                        Soy Lina Quesada, Master Royal.
                    </Typography>
                    <Typography
                        sx={{
                            color: "white",
                            my: 4,
                            fontFamily: "Quicksand",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Esteticista y Cosmetóloga con más de 15 años de experiencia, con una trayectoria de 7 años en el
                        gremio de la micropigmentación. Formándose y especializándose en diversas técnicas con artistas
                        nacionales e internacionales. Ha participado y ganado diferentes campeonatos alrededor del mundo
                        en la modalidad de la técnica Microblading. Siempre a la vanguardia de las nuevas
                        actualizaciones, ofreciendo lo mejor a los clientes y especializando a estudiantes en Colombia,
                        Latinoamérica y Europa.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center">
                        <Box
                            component={motion.div}
                            initial={{ x: 600 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                            exit={{ x: 0 }}
                            sx={{
                                width: { xs: 350, md: 450 },
                                height: { xs: "auto", md: "auto" },
                                // mb: -9.5,
                                mt: 4,
                            }}
                        >
                            <img
                                src="images/foto-banner-7.webp"
                                alt=""
                                width="100%"
                                style={{ borderRadius: 5 }}
                                component={motion.div}
                                animate={{ y: [5, -5, 5, -5, 5] }}
                                transition={{ delay: 1, duration: 4, repeat: Infinity }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        // </Box>
    );
};

export default Banner;

//<div className="container">
//     <section id="inicio">
//     <div className="row">
//         <div className="col-lg-6 col-sm-12 bg-danger d-flex justify-content-center">
//             <h1>Hola soy Lina Quesada</h1>
//             <Button variant="contained" color="warning">Inscribete</Button>
//         </div>
//         <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
//             <img src="images/persona.png" alt="persona" width={300}/>
//         </div>
//     </div>
//     </section>
//     <section id="about">
//     <div className="row">
//         <div className="col-lg-6 col-sm-12 bg-primary d-flex justify-content-center">
//             <h1>About</h1>
//         </div>
//         <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
//             <img src="images/persona.png" alt="persona" width={300}/>
//         </div>
//     </div>
//     </section>
//     <section id="skills" style={{backgroundColor: 'white'}}>
//     <div className="row">
//         <div className="col-lg-6 col-sm-12 bg-warning d-flex justify-content-center">
//             <h1>Skills</h1>
//         </div>
//         <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
//             <img src="images/persona.png" alt="persona" width={300}/>
//         </div>
//     </div>
//     </section>
// </div>
