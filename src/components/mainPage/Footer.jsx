import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor:"rgb(20,20,20)", display:"flex", justifyContent:"center", textAlign:"center", py:2}}>
            <Grid>
            <Typography component="a" href="/" sx={{p:5}}>
                <img
                  width={81}
                  height={53}
                  src="images/logo-lina-quesada-2-rec.png"
                  alt=""
                  loading="lazy"
            />
            </Typography>
            <p style={{color:'white', my:2}}>Copyright © 2024 Lina Quesada</p>
            </Grid>
        </Box>
    );
}

export default Footer;