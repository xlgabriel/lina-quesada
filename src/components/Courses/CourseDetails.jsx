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
  CardActions,
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { courseContent } from "./constCourses";

const CourseDetails = ({ courseDetail = courseContent[0]}) => {
  const [expanded, setExpanded] = useState(false);
  const [course, setCourse] = useState();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    console.log("Holaaaaaaa")
    console.log(courseDetail)
  }, []);

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
          {courseDetail.title}
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
          {courseDetail.subtitle1}
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
          {courseDetail.subtitle2}
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
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
          {courseDetail.description}-
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
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
          Técnicas
        </Typography>
        <List sx={{ px: 2 }}>
          {courseDetail.techniques.map((item) => (
            <ListItem>
              <ListItemText
                sx={{ color: "white" }}
              >
                <span style={{color:"#efb810"}}>{item.name} {item.description !== ''? ':':''} </span>{item.description}
              </ListItemText>
            </ListItem>
          ))}
        </List>
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
          {courseDetail.content.map((item) => (
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
              kit básico de bioseguridad (incluído)
            </Typography>
            <List sx={{ px: 2 }}>
              {courseDetail.kits[0].map((item) => (
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
              {courseDetail.kits[1].map((item) => (
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
          El curso tiene una duración de <span style={{color:"#efb810"}}>{courseDetail.days.length} {courseDetail.days.length > 1? 'días':'día'}</span> con {courseDetail.days.length > 1? 'horarios':'horario'} de 9 am a 5 pm.
        </Typography>
        <Timeline position="alternate" sx={{ py: 4 }}>
          {courseDetail.days.map((item, index) => (
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
      <Box sx={{backgroundColor: "#efb810"}}>
      <Grid container sx={{py:1}}>
        <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            mb: 2,
            py: 1,
          }}
        >
          Valor
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            mb: 2,
            py: 1,
          }}
        >
          {courseDetail.price.group !== ''? `Grupal: ${courseDetail.price.group}`: ''} {courseDetail.price.group !== '' && <br/>}
          {courseDetail.price.personalized !== ''? `Personalizado: ${courseDetail.price.personalized}`: ''}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            mb: 2,
            py: 1,
            px:1
          }}
        >
          Separa tu cupo con $500.000. El valor restante lo pagas 3 días antes de iniciar el Master Class.
        </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            mb: 2,
            py: 1,
          }}
        >
          Medios de pago
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            mb: 2,
            py: 1,
          }}
        >
          <img src="images/logo-bancolombia.png" alt="" width={30} style={{marginRight:3}}/>
          Bancolombia
        </Typography>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default CourseDetails;
