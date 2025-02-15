import React from "react";
import { Box, Typography, Grid, Button, IconButton, List, ListItem } from "@mui/material";
import { LinkedIn, CheckCircle, FacebookOutlined, KeyboardDoubleArrowRight } from "@mui/icons-material";
import footerBg from "../../../assets/img/background/footer-bg-img-1.png";
import footerLogo from "../../../assets/img/logo-footer.png";
import footerLogo2 from "../../../assets/img/component/reclamacoes.png";

import CustomInputBox from "../components/CustomInputBox";

import TopColorBar from "../home/ui/head/TopColorBar";
import Color from "../../../theme/Color";
import { useLanguage } from '../../../context/LanguageContext';
import { Language } from '../../../types/LanguageTypes';
import { Features } from '../../../assets/features/Features';

const FooterSection: React.FC = () => {
    const { language } = useLanguage() as { language: Language };
    const { FOOTER } = Features;

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
                            {FOOTER.description[language]}
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
                            {FOOTER.sections.usefulLinks.title[language]}
                        </Typography>
                        <List>
                            {FOOTER.sections.usefulLinks.links.map((item, index) => (
                                <ListItem
                                    key={index}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    sx={{ p: 0, mb: 2, display: "flex", alignItems: "center" }}
                                >
                                    <KeyboardDoubleArrowRight sx={{ color: "white", mr: 1 }} />
                                    <Typography color="white">{item.label[language]}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Highlights Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" color="white" mb={3}>
                            {FOOTER.sections.highlights.title[language]}
                        </Typography>
                        <List>
                            {FOOTER.sections.highlights.links.map((item, index) => (
                                <ListItem key={index} component="a" href={item.link} sx={{ p: 0, mb: 2 }}>
                                    <KeyboardDoubleArrowRight sx={{ color: "white", mr: 1 }} />
                                    <Typography color="white">{item.label[language]}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" color="white" mb={6}>
                            {FOOTER.sections.newsletter.title[language]}
                        </Typography>
                        <Typography variant="body2" color="white" mb={4} align="justify">
                            {FOOTER.sections.newsletter.description[language]}
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
