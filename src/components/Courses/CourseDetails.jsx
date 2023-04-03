import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Button,
  CardActions
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { motion } from "framer-motion";
import { courseContent } from "./constCourses";

const CourseDetails = ({ word }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{ pt: 2, px: 3, bgcolor: "#04060b" }}
      component={motion.div}
      initial={{ x: -800 }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ mb: 0 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Merriweather",
            color: "#efb810",
          }}
        >
          {courseContent.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Merriweather",
            color: "white",
            my: 2,
          }}
        >
          Microblanding básico y avanzado
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Merriweather",
            color: "#efb810",
          }}
        >
          Personalizado
        </Typography>
      </Box>
      <Box sx={{my:2, display:"flex", justifyContent:"center"}}>
        <img src="images/fondo-lina-quesada.png" alt="" width={300} />
      </Box>
      <Divider sx={{ width: "60%", mx: "auto", bgcolor: "black" }} />
      <Box sx={{ px: 3, pt: 3 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "",
            textAlign: "justify",
            fontFamily: "Merriweather",
            color: "white",
          }}
        >
          {courseContent.description}
        </Typography>
      </Box>
      <Box sx={{my:2, display:"flex", justifyContent:"center"}}>
        <img src="images/fondo-lina-quesada.png" alt="" width={300} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            bgcolor: "black",
            color: "#efb810",
            py: 1,
          }}
        >
          Contenido del curso
        </Typography>
        <List sx={{ px: 2 }}>
          {courseContent.content.map((item) => (
            <ListItem>
              <ListItemIcon>
                <SendIcon sx={{ color: "#efb810" }} />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white" }}
                primary={item}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            fontWeight: "bold",
            fontFamily: "Merriweather",
            textAlign: "center",
            mb: 2,
            bgcolor: "black",
            color: "#efb810",
            py: 1,
          }}
        >
          ¿Qué incluye el curso?
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Merriweather",
                fontWeight: "",
                textAlign: "justify",
                px: 3,
                color: "white",
              }}
            >
              kit básico de bioseguridad
            </Typography>
            <List sx={{ px: 2 }}>
              {[1, 2].map((item) => (
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "#efb810" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="Delantal"
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Merriweather",
                fontWeight: "",
                textAlign: "",
                px: 3,
                color: "white",
              }}
            >
              Kit profesional (si desea adquirirlo)
            </Typography>
            <List sx={{ px: 2 }}>
              {[1, 2, 3].map((item) => (
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "#efb810" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="1 Tebori"
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: "black" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#efb810",
            mb: 2,
            py: 1,
          }}
        >
          Cronograma
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "",
            textAlign: "justify",
            color: "white",
            px: 3,
            pt: 2,
          }}
        >
          El curso tiene una duración de 3 días con horarios de 9 am a 5 pm.
        </Typography>
        {/* <Accordion
          sx={{ px: 1, pt: 2 }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "33%", fontWeight: "bold", color: "#efb810" }}
            >
              Día 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              eaque molestias et cum, minima saepe earum ducimus sequi ipsum
              adipisci labore nemo? Nulla velit sequi odio ea in doloremque
              odit.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        <Timeline position="alternate" sx={{ py: 4 }}>
          {courseContent.days.map((item, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#efb810" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamiliy: "Merriweather",
                    fontWeight: "bold",
                    color: "#efb810",
                  }}
                >
                  {`Día ${index + 1}`}
                  {console.log(`numero ${index}`)}
                </Typography>
                <Box>
                  <List>
                    {item.map((item, index) => (
                      <ListItem>
                        <ListItemText
                          primary={`- ${item}`}
                          sx={{ color: "white" }}
                        >
                          {console.log(index)}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};

export default CourseDetails;
