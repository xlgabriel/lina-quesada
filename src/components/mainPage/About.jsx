import {
  Button,
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Card,
  Paper,
  Divider,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

const About = () => {
  const items = [
    {
      title: "Nuestro Master Class",
      content:
        "Una Formación a un alto nivel de aprendizaje para lograr seguridad y profesionalismo a la hora de desempeñar este maravilloso arte. está diseñado de manera que todos puedan entenderlo, incluso aquellos sin conocimientos previos.",
    },
    {
      title: "Nuestra certificación",
      content:
        "Acorde a mis estudios realizados durante estos últimos años con las mejores academias y artistas a nivel mundial.",
    },
    {
      title: "Phiacademy",
      content:
        "Técnica avanzada e hiperrealismo phibrows en microblading. Sviatoslav Otchenash técnicas cómo Magic Shading, Soft Liner y Aquarelle lips.",
    },
    {
      title:
        "Me otorgan el título de Artista Royal de Colombia y nivel mundial.",
      content:
        "Por destacar mis habilidades en trazos perfectos, limpios, manejo de piel y protocolos completos para que el final del procedimiento sea impecable. Por ende, brindo capacitaciones a un alto nivel de aprendizaje.",
    },
  ];
  return (
    <Container sx={{py:2}}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", color: "white", mb: 2, fontFamily: "Merriweather" }}
        component={motion.div} initial={{y:-50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1}}
      >
        Sobre<span style={{color:"#efb810"}}> mí</span>
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#f99f00",
          width: "40%",
          height: 3,
          mx: "auto",
          my: 3,
        }}
        component={motion.div}
        initial={{translateY:-90, opacity:0}}
        whileInView={{translateY:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
      />
      <Box sx={{ width: "100%", mx: "auto", backgroundColor: "" }}>
        <Grid
          container
          gap={1}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {items.map((item) => (
            <Grid item xs={12} md={5}>
              <Paper sx={{ minHeight: 200, my: {xs:1, md:2}, mx:"auto", width: {xs:"80%", md:"auto"}, backgroundColor:"#1d1f20", color:"white"}} component={motion.div} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay: 0.2}} whileHover={{scale:1.05, transition: {duration:0.5}}}>
                <Box sx={{p:2}}>
                <Typography variant="h6" sx={{mb:2, color:"#efb810"}}>{item.title}</Typography>
                <Typography variant="body1" sx={{color:"white"}}>{item.content}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ py: 2, backgroundColor: "#0B0A09" }} >
        <Swiper
          style={{
            backgroundColor: "#0B0A09",
            paddingBottom: 3,
            paddingTop: 3,
            paddingLeft: 3,
            paddingRight: 3,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className=""
        >
          {[1,2,3,4,5].map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: { xs: "50%", md: "80%" },
                backgroundColor: "#0B0A09",
              }}
            >
              <Card
                elevation={6}
                sx={{ height: {xs:"auto", md:350} }}
                component={motion.div}
                whileHover={{
                  boxShadow: "3px 3px 2px 1px #efb810",
                }}
                initial={{scale:0, opacity:0}} whileInView={{opacity:1, scale:1, transition:{delay:index-(index*0.9),duration:0.5}}}
              >
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                      <CardMedia sx={{ }}>
                        <img
                          src="images/logo-lina-quesada.png"
                          alt="{`logo ${item.image}`}"
                          style={{
                            width: "100%",
                            height:"auto",
                            objectFit: "fill",
                          }}
                        />
                      </CardMedia>
                  </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default About;
