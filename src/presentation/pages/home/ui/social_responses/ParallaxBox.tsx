import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Article } from "@mui/icons-material";
import imgBackground from '../../../../../../src/assets/img/background/background_convocatoria.jpg';

const ParallaxBox: React.FC = () => {
    const title = "Convocatória Assembleia Geral";
    const subtitle = "Discussão e votação do Relatório e Contas relativo ao exercício de 2023";
    const buttonLink = "documentos_institucionais.html";
    const buttonText = "Ver Mais";

    return (
        <Box
            py={9}
            sx={{
                backgroundImage: `url(${imgBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
                backgroundAttachment: "fixed",
            }}
        >
            <Container>
                <Box textAlign="center" color="white">
                    <Typography variant="h2">{title}</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>
                        {subtitle}
                    </Typography>
                    <Button variant="contained" color="error" sx={{ mt: 4 }} href={buttonLink} target="_blank">
                        <Article sx={{ mr: 1 }} /> {buttonText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ParallaxBox;
