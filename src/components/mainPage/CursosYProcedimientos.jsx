import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import { Link } from "react-router-dom";
import { courseCertification } from "./aboutUsContants";

const CursosYProcedimientos = () => {
  const goldColor1 = "#d4bc88";

  return (
    <Container sx={{ py: 10, bgcolor: goldColor1 }}>
      <Grid container sx={{display:"flex", justifyContent:"space-around"}}>
        <Grid md={4} sx={{ textAlign: "center"}}>
          <Grid sx={{textDecoration:"none"}} component={Link} to={"/cursos"} onClick={()=>window.scrollTo(0, 0)}>
            <img src="images/graduation-hat.png" width="120px"></img>
            <Typography variant="h4" sx={{fontWeight:"bold", mb:2, color:"black"}}>Cursos</Typography>
          </Grid>
          <Typography sx={{fontSize:"20px"}}>{courseCertification[0].content}</Typography>
        </Grid>
        <Grid md={4} sx={{ textAlign: "center" }}>
          <Grid sx={{textDecoration:"none"}} component={Link} to={"/procedimientos"} onClick={()=>window.scrollTo(0, 0)}>
            <img src="images/eyebrow.png" width="120px"></img>
            <Typography variant="h4" sx={{fontWeight:"bold", mb:2, color:"black"}}>Procedimientos</Typography>
          </Grid>
          <Typography sx={{fontSize:"20px"}}>{courseCertification[2].content}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CursosYProcedimientos;
