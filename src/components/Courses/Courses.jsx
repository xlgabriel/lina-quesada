import { AspectRatio } from "@mui/joy";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
  Hidden,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/joy/Card";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Courses = () => {
  const courses = [
    {
      title: "Master Class",
      subtitle1: "Personalizado",
      subtitle2: "Microblanding Básico & Avanzado",
    },
    {
      title: "Master Class Micropigmentación",
      subtitle1: "Personalizado",
      subtitle2: "Técnicas: Efectos Powder Brows + Sombreado + Compacto",
    },
    {
      title: "Master Class VIP en Cejas",
      subtitle1: "Microblanding y micropigmentación",
      subtitle2: "Técnicas: Pelo a pelo + Powder Brows + Hibrida y Compacto",
    },
    {
      title: "Master Class",
      subtitle1: "Perfeccionamiento en trazos microblanding",
      subtitle2: "Técnicas hiper realistas",
    },
    {
      title: "Master Class",
      subtitle1: "Micro Lips",
      subtitle2:
        "Técnicas: Hidra-BBLips + neutralización + revitalización + full color",
    },
  ];

  return (
    <Container sx={{ backgroundColor: "", height: "" }}>
      <Typography
        variant="h3"
        sx={{ color: "#efb810", fontFamily: "Merriweather", textAlign:"center" }}
      >
        Cursos
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Grid container spacing={2} sx={{ my: 2 }}>
          {courses.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Paper
                elevation={3}
                sx={{
                  height: 300,
                  overflowX: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "150px", backgroundSize: "contain" }}
                  src="images/logo-lina-quesada.png"
                  srcSet="images/logo-lina-quesada.png 2x"
                  loading="lazy"
                  alt="asf"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Merriweather" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{fontFamily: "Merriweather"}}>
                    {item.subtitle1}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
                <Button
                  key={`title+${1}`}
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 600, width: "100%" }}
                  to={"/coursesD"}
                  component={Link}
                >
                  Ver más
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Courses;
