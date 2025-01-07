import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Home, List, FileCopy, People, CalendarMonth, Mail } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import TopBarMenu from "./TopBarMenu";
import Colors from "../../../../../theme/Color";
import Logo from '../../../../../assets/img/logo-school.png';

const TopNavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: any) => {
        if (location.pathname !== `/${path}`) {
            navigate(`/${path}`);
        }
    };

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
                            onClick={() => handleNavigation("")}
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
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === "História"
                                        ? "historia"
                                        : menuItem === "Órgãos Sociais"
                                            ? "orgaos_sociais"
                                            : menuItem === "Organograma"
                                                ? `/docs/Organogramas.pdf`
                                                : menuItem === "Política da Qualidade"
                                                    ? "politica_da_qualidade"
                                                    : menuItem === "Documentos Institucionais"
                                                        ? "documentos_institucionais"
                                                        : null;
                                if (targetPath) {
                                    if (menuItem === "Organograma") {
                                        window.open(targetPath, "_blank"); // Open PDF file in a new tab
                                    } else {
                                        handleNavigation(targetPath); // Handle navigation for other items
                                    }
                                }
                            }}
                        />

                        <TopBarMenu
                            menuIcon={FileCopy}
                            menuColor={Colors.green.main}
                            menuName={"Respostas Sociais"}
                            menuItems={[
                                "Jardim Infância",
                                "Creche",
                                "CATL",
                                "Lar S. Lourenço",
                                "Apoio Domiciliário",
                                "Formação e Emprego",
                            ]}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === "Jardim Infância"
                                        ? "jardim_infancia"
                                        : menuItem === "Creche"
                                            ? "creche"
                                            : menuItem === "Lar S. Lourenço"
                                                ? "lar_s_lourenco"
                                                : menuItem === "CATL"
                                                    ? "catl"
                                                    : menuItem === "Apoio Domiciliário"
                                                        ? "apoio_domiciliario"
                                                        : menuItem === "Formação e Emprego"
                                                            ? "formacao_e_emprego"
                                                            : null;

                                if (targetPath) handleNavigation(targetPath);
                            }}
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
                                "Projectos Cofinanciados",
                                "CENTRO QUALIFICA",
                            ]}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === "ESCOLHAS 7G"
                                        ? "escolhas_7g"
                                        : menuItem === "SAAS"
                                            ? "saas"
                                            : menuItem === "CLDS4G"
                                                ? "clds4g"
                                                : menuItem === "E2OV"
                                                    ? "e2ov"
                                                    : menuItem === "Projectos Cofinanciados"
                                                        ? "cofinanciados"
                                                        : menuItem === "CENTRO QUALIFICA"
                                                            ? "centro_qualifica"
                                                            : null;

                            if (targetPath) handleNavigation(targetPath);
                            }}
                        />

                        <TopBarMenu
                            menuIcon={CalendarMonth}
                            menuColor={Colors.purple.main}
                            menuName={"Serviços"}
                            menuItems={["Administrativos"]}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === "Administrativos" ? "administrativos" : null;

                                if (targetPath) handleNavigation(targetPath);
                            }}
                        />

                        <TopBarMenu
                            menuIcon={Mail}
                            menuColor={Colors.pink.main}
                            menuName={"Contactos"}
                            onClick={() => handleNavigation("contactos")}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopNavBar;
