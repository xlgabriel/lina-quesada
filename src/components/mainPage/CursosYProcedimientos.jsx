import { Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import { Link } from "react-router-dom";
import { courseCertification } from "./aboutUsContants";
import { motion } from "framer-motion";

const CursosYProcedimientos = () => {
  const goldColor1 = "#d4bc88";

  return (
    <Container sx={{ py: 10, bgcolor: goldColor1 }}>
      <Grid container sx={{display:"flex", justifyContent:"space-around"}}>
        <Grid md={4} sx={{ textAlign: "center", px:{xs:3, md:0}, mb:{xs:2, md:0}}}>
          <Grid sx={{textDecoration:"none", display:"flex", justifyContent:"center", mb:{xs:4, md:0}}} component={Link} to={"/cursos"} onClick={()=>window.scrollTo(0, 0)}>
            <Box component={motion.div}
            initial={{ scale: 1}}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            sx={{bgcolor:"", width:"130px"}}
            >
              
              <img src="images/graduation-hat.png" width="120px"></img>
              <Typography variant="h4" sx={{fontWeight:"bold", mb:{xs:0, md:2}, color:"black"}}>Cursos</Typography>
            </Box>
          </Grid>
          <Typography sx={{fontSize:"20px"}}>{courseCertification[0].content}</Typography>
        </Grid>
        <Grid md={4} sx={{ textAlign: "center", px:{xs:3, md:0}}}>
          <Grid sx={{textDecoration:"none", display:"flex", justifyContent:"center"}} component={Link} to={"/procedimientos"} onClick={()=>window.scrollTo(0, 0)}>
            <Box component={motion.div}
              initial={{ scale: 1}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              sx={{bgcolor:"", width:"auto"}}
              >
                <img src="images/eyebrow.png" width="120px"></img>
                <Typography variant="h4" sx={{fontWeight:"bold", mb:2, color:"black"}}>Procedimientos</Typography>
            </Box>
          </Grid>
          <Typography sx={{fontSize:"20px"}}>{courseCertification[2].content}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CursosYProcedimientos;
