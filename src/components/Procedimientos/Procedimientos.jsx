import {
    Box,
    Button,
    CardContent,
    Container,
    IconButton,
    Typography,
    Hidden,
    CardMedia,
    Dialog,
    DialogContent,
    DialogActions,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReactWhatsapp from "react-whatsapp";
import { motion } from "framer-motion";
import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { courseContent } from "../Courses/constCourses";
import CourseDetails from "../Courses/CourseDetails";

const Procedimientos = () => {
    const procedimientos = [
        {
            title: "Técnica Natural Line",
            image: "images/tecnica-natural-line-1.webp",
        },
        {
            title: "Técnica Hidra BB-Lips",
            image: "images/microlips-1.jpg",
        },
        {
            title: "Técnica Sombreado Powder Brows",
            image: "images/sombreado-powder-brows.JPEG",
        },
    ];
    const goldColor = "#d3a737";
    const goldColor1 = "#d4bc88";
    const [course, setCourse] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const openDrawer = (item) => {
        // setOpen(true);
        // setCourse(item);
        setMessage(`${item.title}`);
        console.log("drawer openned");
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container
            sx={{
                backgroundColor: "",
                height: "auto",
                pt: 8,
                backgroundImage: "url(images/logo-lina-quesada-2-ps.png)",
                backgroundSize: { xs: "100% 50%", md: "auto 100%" },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: goldColor1,
                    fontFamily: "Merriweather",
                    textAlign: "center",
                }}
            >
                Procedimientos
            </Typography>
            <Divider
                sx={{
                    backgroundColor: goldColor1,
                    width: "40%",
                    height: 3,
                    mx: "auto",
                    my: 2,
                }}
                component={motion.div}
                initial={{ translateY: -90, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ translateX: 0 }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        my: 2,
                        justifyContent: { xs: "center", md: "center", lg: "normal" },
                    }}
                >
                    {procedimientos.map((item, index) => (
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: { sm: 400, md: 500 },
                                    overflowX: "hidden",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignContent: "space-between",
                                    cursor: "pointer",
                                }}
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => openDrawer(item)}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: { sm: "100%", md: "100%" },
                                        height: { sm: "280px", md: "auto" },
                                        aspectRatio: "1/1",
                                    }}
                                    src={item.image}
                                    srcSet={`${item.image} 2x`}
                                    loading="lazy"
                                    alt="asf"
                                ></CardMedia>
                                <CardContent sx={{ width: "100%", textAlign: "center" }}>
                                    <Typography
                                        variant=""
                                        sx={{ fontWeight: "600", fontFamily: "Merriweather", fontSize: "20px" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    {/* <Typography
                    variant="body1"
                    sx={{ fontFamily: "Merriweather", my: 1 }}
                  >
                    {item.subtitle1}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Merriweather" }}
                  >
                    {item.subtitle2}
                  </Typography> */}
                                </CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
                                <Button
                                    key={`title+${index}`}
                                    variant="contained"
                                    size="sm"
                                    endIcon={<WhatsAppIcon />}
                                    aria-label="Explore Bahamas Islands"
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        bgcolor: goldColor1,
                                        ml: "auto",
                                        py: 1,
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        width: "100%",
                                        color: "black",
                                        "&:hover": { color: goldColor1, bgcolor: "black" },
                                    }}
                                    // onClick={() => openDrawer(item)}
                                    component={ReactWhatsapp}
                                    number="57-312-571-9950"
                                    message={item.title}
                                >
                                    Agenda tu cita
                                </Button>
                                <Button
                                    key={`title+${index}`}
                                    size="sm"
                                    endIcon={<WhatsAppIcon />}
                                    aria-label="Explore Bahamas Islands"
                                    sx={{
                                        display: { xs: "flex", md: "none" },
                                        bgcolor: goldColor1,
                                        ml: "auto",
                                        py: 1,
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        width: "100%",
                                        color: "black",
                                        "&:hover": { color: goldColor1, bgcolor: "black" },
                                    }}
                                    component={ReactWhatsapp}
                                    number="57-312-571-9950"
                                    message={item.title}
                                    // onClick={() => openDrawer(item)}
                                >
                                    Agenda tu cita
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                    <Hidden>
                        <Dialog
                            open={open}
                            scroll="paper"
                            onClose={() => handleClose()}
                            sx={{
                                height: { xs: "auto", md: 650 },
                                my: { xs: 0, md: 4 },
                                mx: { xs: 0, md: 10 },
                                mt: { xs: 5, md: 4 },
                            }}
                            fullScreen
                        >
                            <IconButton
                                edge="start"
                                onClick={handleClose}
                                aria-label="close"
                                sx={{ position: "fixed", color: "#fff", ml: 1, mt: 1 }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent
                                sx={{
                                    backgroundColor: "#04060b",
                                    height: "450px",
                                }}
                            >
                                <CourseDetails courseDetail={course}></CourseDetails>
                            </DialogContent>
                            <DialogActions
                                sx={{
                                    position: "sticky",
                                    bottom: 0,
                                    backgroundColor: "black",
                                    display: "flex",
                                    justifyContent: "center",
                                    py: 1,
                                    width: "100%",
                                }}
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: { xs: "100%", md: "30%" },
                                        backgroundColor: goldColor1,
                                        fontSize: "18px",
                                        borderColor: "#000",
                                        color: "#000",
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#ffffff",
                                            color: "#000000",
                                        },
                                    }}
                                    component={ReactWhatsapp}
                                    number="57-322-617-4846"
                                    message={message}
                                >
                                    Solicitar información
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Hidden>
                </Grid>
            </motion.div>
        </Container>
    );
};

export default Procedimientos;
