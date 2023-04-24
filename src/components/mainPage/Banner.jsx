import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  // color:#bf930d
  const goldColor = "#d3a737";

  return (
    // <Box sx={{ py: 4, overflowY: "hidden", width: "100%" }}>
    <Container sx={{ pt: 3 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          component={motion.div}
          initial={{ x: -900 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          exit={{ x: 0 }}
        >
          <Typography
            variant="h3"
            sx={{ color: goldColor, fontFamily: "Merriweather" }}
          >
            Bienvenidos! Soy Lina Quesada, Artista Royal
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              my: 4,
              fontFamily: "Merriweather",
              textAlign: { xs: "justify" },
            }}
          >
            <p>
              Somos especialistas en {""}
              <span style={{ color: goldColor }}>
                Micropigmentación y Microblading avanzado e hiperrealismo
              </span>
              . Teniendo el conocimiento y las habilidades para enseñar y
              desempeñar este maravilloso arte.
            </p>
            <p>
              Te invito a conocer nuestros cursos.{" "}
              <span style={{ color: goldColor }}>
                Inscríbete y aprende este hermoso arte.
              </span>
            </p>
          </Typography>
          <Box
            component={motion.div}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 0 },
            }}
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ rotate: 0 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: goldColor,
                fontSize: "20px",
                borderColor: "#000",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                },
              }}
              component={Link}
              to={"/courses"}
            >
              Ver cursos
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          spacing={2}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            container
            justifyContent="center"
          >
            <Box
              component={motion.div}
              initial={{ x: 600 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: 0 }}
              sx={{
                width: { xs: 300, md: 300 },
                height: { xs: 500, md: 500 },
              }}
            >
              <img
                src="images/foto-banner-1-removebg.png"
                alt=""
                width="100%"
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
