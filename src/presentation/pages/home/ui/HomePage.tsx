import React, {useEffect, useState} from 'react';
import {
    Typography,
    Button,
    Container, Box, Grid, Card, CircularProgress
} from '@mui/material';
import {
    Article, Work, ChildCare, BabyChangingStation, Elderly
} from '@mui/icons-material';
import CarouselSlide from "../../../components/CarouselSlide";
import img1 from '../../../../../src/assets/img/banner/slider-1/img-1.jpg';
import img2 from '../../../../../src/assets/img/banner/slider-1/img-2.jpg';
import img3 from '../../../../../src/assets/img/banner/slider-1/img-3.jpg';
import img4 from '../../../../../src/assets/img/banner/slider-1/img-4.jpg';
import TopColorBar from "./TopColorBar";
import TopAppBar from "./TopAppBar";
import TopNavBar from "./TopNavBar";
import {AppThemeProvider} from "../../../../theme/Theme";
import CardGrid from "./CardGrid";

const Header: React.FC = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <AppThemeProvider mode={"light"}>
            <Box>
                {/* Preloader */}
                {loading && (
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            zIndex: 9999,
                        }}
                    >
                        <CircularProgress
                            sx={{
                                animation: 'rotate 2s infinite linear',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: '70%',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: 'primary.main',
                            }}
                        >
                            Loading...
                        </Typography>
                    </Box>
                )}

                {/* Header */}
                <TopColorBar/>

                {/* Top Bar */}
                <TopAppBar/>

                {/* Navigation Bar */}
                <TopNavBar/>

                <CarouselSlide
                    autoSlide={true}
                    autoSlideInterval={5000}
                    children={[img1, img2, img3, img4]}
                    texts={["MainText1", "SubText1"],["MainText2", "SubText2"],["MainText2", "SubText2"]}
                    cardGridComponent={<CardGrid/>}
                />

                {/* Call to Action */}
                <Box py={9} sx={{ backgroundImage: `url('assets/img/background/background_convocatoria.jpg')`, backgroundSize: 'cover' }}>
                    <Container>
                        <Box textAlign="center" color="white">
                            <Typography variant="h2">Convocatória Assembleia Geral</Typography>
                            <Typography variant="subtitle1" sx={{ mt: 2 }}>
                                Discussão e votação do Relatório e Contas relativo ao exercício de 2023
                            </Typography>
                            <Button variant="contained" color="error" sx={{ mt: 4 }} href="documentos_institucionais.html" target="_blank">
                                <Article sx={{ mr: 1 }} /> Ver Mais
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* Home Feature Section */}
                <Box pt={9} pb={6}>
                    <Container>
                        <Box textAlign="center" mb={8}>
                            <Typography variant="h2" color="error">Respostas Sociais</Typography>
                        </Box>
                        <Grid container spacing={3}>
                            {[
                                { icon: <Work />, color: "warning.main", title: "FORMAÇÃO EMPREGO", text: "O Centro de Formação e Emprego (CFE) é uma valência do CSE, certificado pela DGERT (Direção Geral do Emprego e das Relações de Trabalho), que foi criado em 2003..." },
                                { icon: <ChildCare />, color: "success.main", title: "JARDIM INFÂNCIA", text: "O jardim-de-infância do Centro Social de Ermesinde é um espaço organizado e estimulante preparado exclusivamente para crianças dos 3 aos 6 anos..." },
                                { icon: <BabyChangingStation />, color: "error.main", title: "CRECHE", text: "A Creche proporciona um atendimento individualizado às crianças que acolhe (dos 4 meses aos 3 anos) numa atmosfera de segurança e conforto: físico e afetivo..." },
                                { icon: <BabyChangingStation />, color: "info.main", title: "CRECHE FAMILIAR", text: "Nasce uma criança… E este acontecimento marca de forma profunda a vida de qualquer progenitor, tanto pelas alegrias que vão acumular daí para o futuro..." },
                                { icon: <Elderly />, color: "secondary.main", title: "LAR S. LOURENÇO", text: "O Lar S. Lourenço é um equipamento que constitui uma resposta social desenvolvida em alojamento colectivo, de utilização temporária ou permanente..." },
                                { icon: <Elderly />, color: "pink.main", title: "APOIO DOMICILIARIO", text: "O Serviço de Apoio Domiciliário consiste na prestação de cuidados individualizados e personalizados no domicílio, a idosos, adultos ou famílias..." },
                            ].map((feature, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 6 }}>
                                        <Box
                                            sx={{
                                                bgcolor: feature.color,
                                                borderRadius: '50%',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                p: 2,
                                                mr: 2,
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" sx={{ color: feature.color }}>
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body2">{feature.text}</Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </AppThemeProvider>
    );
};

export default Header;
