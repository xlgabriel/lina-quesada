import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "./Banner";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const MainPage = () => {
    return (
        <Box sx={{backgroundColor:''}}>
            <Grid>
                <Grid xs="12" md="12"  id="#">
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