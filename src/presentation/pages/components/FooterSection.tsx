import React from "react";
import { Box, Typography, Grid, Button, IconButton, List, ListItem } from "@mui/material";
import { LinkedIn, CheckCircle, FacebookOutlined, KeyboardDoubleArrowRight } from "@mui/icons-material";
import footerBg from "../../../assets/img/background/footer-bg-img-1.png";
import footerLogo from "../../../assets/img/logo-footer.png";
import footerLogo2 from "../../../assets/img/component/reclamacoes.png";

import CustomInputBox from "../components/CustomInputBox";

import TopColorBar from "../home/ui/head/TopColorBar";
import Color from "../../../theme/Color";

const FooterSection: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${footerBg})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                minHeight: "400px",
            }}
        >
            <TopColorBar/>

            <Box sx={{ pt: 8, pb: 7, pr:25, pl:25 }}>
                <Grid container spacing={3}>
                    {/* Logo and Description Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                            <Button href="index.html">
                                <Box
                                    component="img"
                                    src={footerLogo}
                                    alt="Logo"
                                    sx={{ width: "260px" }}
                                />
                            </Button>
                        </Box>
                        <Box sx ={{height:"10px"}}/>
                        <Typography variant="body2" color="white" align="justify" mb={8}>
                            O Centro Social de Ermesinde é uma IPSS do concelho de Valongo que promove o bem-estar com
                            a comunidade desde a sua fundação, a 15 de fevereiro de 1955.
                        </Typography>
                        <Box>
                            <IconButton
                                href="https://www.livroreclamacoes.pt/inicio"
                                target="_blank"
                                sx={{ maxHeight: "48px", mb: 2 }}
                            >
                                <Box
                                    component="img"
                                    src={footerLogo2}
                                    alt="Reclamações"
                                    sx={{
                                        height: "48px",
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Useful Links Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" color="white" mb={3}>
                            Ligações úteis
                        </Typography>
                        <List>
                            {[
                                { label: "Jornal a Voz de Ermesinde", link: "http://www.avozdeermesinde.com/" },
                                { label: "Parceiros", link: "index.html" },
                                { label: "Rádio Zona Z", link: "https://www.facebook.com/zonazcomunitaria/" },
                                { label: "Galeria", link: "index.html" },
                            ].map((item, index) => (
                                <ListItem
                                    key={index}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    sx={{ p: 0, mb: 2, display: "flex", alignItems: "center" }} // Align icon with label
                                >
                                    <KeyboardDoubleArrowRight sx={{ color: "white", mr: 1 }} /> {/* Add the icon */}
                                    <Typography color="white">{item.label}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>



                    {/* Highlights Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" color="white" mb={3}>
                            Destaques
                        </Typography>
                        <List>
                            {[
                                { label: "Politica de Privacidade", link: "politica_privacidade.html" },
                                { label: "Contactos", link: "contactos.html" },
                                { label: "Quem somos", link: "about-us.html" },
                                { label: "Recrutamento", link: "mailto:recrutamento@cse.pt" },
                            ].map((item, index) => (
                                <ListItem key={index} component="a" href={item.link} sx={{ p: 0, mb: 2  }}>
                                    <KeyboardDoubleArrowRight sx={{ color: "white", mr: 1 }} /> {/* Add the icon */}
                                    <Typography color= "white" >{item.label}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" color="white" mb={6}>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" color="white" mb={4} align="justify">
                            Mantenha-se informado sobre as novidades e atividades do Centro Social de Ermesinde
                        </Typography>
                        <Box component="form" sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                            <CustomInputBox/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default FooterSection;
