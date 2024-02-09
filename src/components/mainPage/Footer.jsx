import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor:"black", display:"flex", justifyContent:"center", textAlign:"center", py:2}}>
            <Grid>
            <Typography component="a" href="/" sx={{p:5}}>
                <img
                  width={61}
                  height={43}
                  src="images/logo-lina-quesada.png"
                  alt="logo-sst-colores"
                  loading="lazy"
            />
            </Typography>
            <p style={{color:'white', my:2}}>Copyright © 2023 Lina Quesada</p>
            </Grid>
        </Box>
    );
}

export default Footer;