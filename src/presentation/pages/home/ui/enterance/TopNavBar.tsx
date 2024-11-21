import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Home, List, FileCopy, People, CalendarMonth, Mail } from "@mui/icons-material";
import TopBarMenu from "./TopBarMenu";
import Colors from "../../../../../theme/Color";
import Logo from '../../../../../assets/img/logo-school.png';

const TopNavBar = () => {
    return (
        <AppBar position="sticky" color="default" sx={{ height: "126px", justifyContent: "center" }}>
            <Container disableGutters>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo */}
                    <Box component="img" src={Logo} alt="Logo" sx={{ height: 50, width: 200 }} />

                    {/* Menu */}
                    <Box sx={{ display: "flex", gap: 1.2 }}>
                        <TopBarMenu
                            menuIcon={Home}
                            menuColor={Colors.yellow.main}
                            menuName={"Home"}
                        />

                        <TopBarMenu
                            menuIcon={List}
                            menuColor={Colors.red.main}
                            menuName={"Instituição"}
                            menuItems={[
                                "História",
                                "Órgãos Sociais",
                                "Organograma",
                                "Política da Qualidade",
                                "Documentos Institucionais",
                            ]}
                        />

                        <TopBarMenu
                            menuIcon={FileCopy}
                            menuColor={Colors.green.main}
                            menuName={"Respostas Sociais"}
                            menuItems={[
                                "Jardim Infância",
                                "Creche",
                                "CATL",
                                "Apoio Domiciliário",
                                "Formação e Emprego",
                            ]}
                        />

                        <TopBarMenu
                            menuIcon={People}
                            menuColor={Colors.blue.main}
                            menuName={"Projectos Actividades"}
                            menuItems={[
                                "ESCOLHAS 7G",
                                "SAAS",
                                "CLDS4G",
                                "E2OV",
                                "Projectos Confinanciados",
                            ]}
                        />

                        <TopBarMenu
                            menuIcon={CalendarMonth}
                            menuColor={Colors.purple.main}
                            menuName={"Serviços"}
                            menuItems={[
                                "Administravitos",
                            ]}
                        />

                        <TopBarMenu
                            menuIcon={Mail}
                            menuColor={Colors.pink.main}
                            menuName={"Contactos"}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopNavBar;
