import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  // color:#bf930d
  const goldColor = "#d3a737";

  return (
    // <Box sx={{ py: 4, overflowY: "hidden", width: "100%" }}>
    <Container sx={{ pt: 6}}>
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
            variant="h2"
            sx={{ color: "#d4bc88", fontFamily: "palatino-linotype" }}
          >
            Bienvenidos! Soy Lina Quesada, Artista Royal
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              my: 4,
              fontFamily: "palatino-linotype",
              textAlign: { xs: "" },
            }}
          >
            {/* <p>
              Somos especialistas en {""}
              <span style={{ color: "#d4bc88" }}>
                Micropigmentación y Microblading avanzado e hiperrealismo
              </span>
              . Teniendo el conocimiento y las habilidades para enseñar y
              desempeñar este maravilloso arte.
            </p> */}
            <p>
              {/* Te invito a conocer nuestros cursos.{" "} */}
              Inscríbete ahora a nuestros cursos en <span style={{ color: "#d4bc88" }}>Microblanding y Micropigmentación</span>, y aprende este hermoso arte.
            </p>
            <p>
              O agenda tu cita y realizate tus procedimientos con nosotros.
              {/* También te invito a que te realices tus procedimientos con nosotros.{" "}  */}
            </p>
          </Typography>
          <Box
            component={motion.div}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 2 },
              mx:"auto",
              width:"60%",
              bgcolor:"",
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ rotate: 0 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d4bc88",
                fontSize: "20px",
                borderColor: "#000",
                width:"120px",
                height:"120px",
                borderRadius:"50%",
                color: "#000",
                my:1,
                mx:2,
                boxShadow: "0 0 20px #d4bc88",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  boxShadow: "0 0 20px #d4bc88",
                },
              }}
              component={Link}
              to={"/courses"}
            >
              Cursos
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d4bc88",
                fontSize: "13px",
                borderColor: "#000",
                width:"120px",
                height:"120px",
                borderRadius:"50%",
                color: "#000",
                my:1,
                mx:2,
                boxShadow: "0 0 20px #d4bc88",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  boxShadow: "0 0 20px #d4bc88",
                },
              }}
              component={Link}
              to={"/courses"}
            >
              Procedimientos
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
                width: { xs: 300, md: 350 },
                height: { xs: 500, md: 550 },
              }}
            >
              <img
                src="images/lina-quesada-verde-ps.png"
                alt=""
                width="100%"
                style={{borderRadius:5}}
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
