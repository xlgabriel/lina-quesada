//Liberias
import { Box, Grid } from "@mui/material";

//Componentes
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

const MainPage = () => {
    return (
        <Box sx={{backgroundColor:'', overflow:"hidden"}}>
            <Grid>
                <Grid xs="12" md="12"  id="#" sx={{backgroundImage:"url(images/fondo-1.jpg)", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
                    <Banner/>
                </Grid>
                <Grid xs="12" md="12" id="about" sx={{backgroundColor:"#0B0A09"}}>
                    <About/>                    
                </Grid>
                <Grid xs="12" md="12" id="testimonials">
                   <Testimonials/>                     
                </Grid>
                <Grid xs="12" md="12" id="contact" sx={{backgroundColor:"#0B0A09"}}>
                   <Contact/>                     
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;