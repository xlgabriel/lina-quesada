//Liberias
import { Box, Grid } from "@mui/material";

//Componentes
import Trayectoria from "./Trayectoria";
import Banner from "./Banner";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import CursosYProcedimientos from "./CursosYProcedimientos";
import NaturalLine from "./NaturalLine";
import Trayectoria1 from "./Trayectoria1";

const MainPage = () => {
    const goldColor1 = "#d4bc88";

    return (
        <Box sx={{backgroundColor:'', overflow:"hidden"}}>
            <Grid>
                <Grid xs="12" md="12"  id="#" sx={{backgroundImage:"url(images/logo-lina-quesada-2-ps.png)", backgroundSize:{xs: "100% 70%", md:"auto 100%"}, backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundColor:"black"}}>
                    {/* <img src="images/logo-lina-quesada-2.png" style={{position: "absolute", top:0, left:0, opacity: 0.6}}></img> */}
                    <Banner/>
                </Grid>
                <Grid xs="12" md="12" id="testimonials" sx={{bgcolor:goldColor1}}>
                   <CursosYProcedimientos/>                     
                </Grid>
                <Grid xs="12" md="12" id="testimonials" sx={{bgcolor:"white"}}>
                   <Trayectoria1/>                     
                </Grid>
                <Grid xs="12" md="12" id="testimonials" sx={{bgcolor:"white"}}>
                   <NaturalLine/>                     
                </Grid>
                {/* <Grid xs="12" md="12" id="trayectoria" sx={{backgroundColor:"#0B0A09"}}>
                    <Trayectoria/>                    
                </Grid> */}
                <Grid xs="12" md="12" id="testimonios">
                   <Testimonials/>                     
                </Grid>
                <Grid xs="12" md="12" id="contacto" sx={{backgroundColor:"#0B0A09", backgroundImage:"url(images/fondo-marmol.jpg)", backgroundSize:"contain"}}>
                   <Contact/>                     
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;