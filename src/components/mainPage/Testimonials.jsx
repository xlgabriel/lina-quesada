import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import { motion } from "framer-motion";

const Testimonials = () => {
  const goldColor = "#d3a737";
  const goldColor1 = "#d4bc88";

  return (
    <Container sx={{ py: 4 }}>
      {/* <Typography
        sx={{
          textAlign: "center",
          color: "white",
          mb: 2,
          fontFamily: "Merriweather",
          fontSize: { xs: "3.5rem", md: "3.75rem" },
        }}
        component={motion.div}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Testimonios
      </Typography>
      <Divider
        sx={{
          backgroundColor: goldColor1,
          width: "40%",
          height: 3,
          mx: "auto",
          my: 3,
        }}
        component={motion.div}
        initial={{ translateY: -90, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ translateX: 0 }}
      /> */}
      <Grid container sx={{ my: 3 }} gap={{ xs: 2, md: 0 }}>
        {[0.1, 0.2, 0.3].map((item) => (
          <Grid
            item
            key={item}
            xs={12}
            md={4}
            component={motion.div}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              transition: { delay: item, duration: 1 },
            }}
          >
            <Card sx={{ width: "90%", py: 1, mx: "auto", backgroundImage:"url(images/fondo-marmol-dorado.jpg)",backgroundSize:"cover" }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "red", mx: "auto" }}>R</Avatar>}
                title="Sabrina Marquez"
                subheader="Alumna Master Class"
              />
              <CardContent>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bolder",
                      fontFamily: "Merriweather",
                    }}
                  >
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  fuga nihil iure voluptates ducimus tempora voluptatibus cumque
                  veniam quod, asperiores nostrum, maxime iste, dicta ullam vel
                  et nesciunt ab quos.
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bolder",
                      fontFamily: "Merriweather",
                    }}
                  >
                    "
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
