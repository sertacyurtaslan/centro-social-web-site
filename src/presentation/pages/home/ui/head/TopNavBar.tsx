import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Home, List, FileCopy, People, CalendarMonth, Mail, School } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import TopBarMenu from "./TopBarMenu";
import Colors from "../../../../../theme/Color";
import Logo from '../../../../../assets/img/logo-school.png';
import { Features } from "../../../../../assets/features/Features";
import { Language } from "../../../../../types/LanguageTypes";
import { useLanguage } from "../../../../../context/LanguageContext";

const TopNavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { language } = useLanguage() as { language: Language };

    const handleNavigation = (path: any) => {
        if (location.pathname !== `/${path}`) {
            navigate(`/${path}`);
        }
    };

    return (
        <AppBar position="sticky" color="default" sx={{ 
            height: { xs: "auto", sm: "126px" },
            justifyContent: "center",
            position: 'relative',
            overflow: 'visible'
        }}>
            <Container disableGutters>
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: { xs: 2, sm: 0 },
                        gap: { xs: 2, sm: 0 },
                    }}
                >
                    {/* Logo Container */}
                    <Box 
                        sx={{ 
                            position: 'relative',
                            height: { xs: 40, sm: 65 },
                            width: { xs: 160, sm: 260 },
                        }}
                    >
                        <Box 
                            component="img" 
                            src={Logo} 
                            alt="Logo" 
                            sx={{ 
                                position: 'absolute',
                                top: { xs: 0, sm: '50%' },
                                left: 0,
                                height: { xs: 40, sm: 65 },
                                width: { xs: 160, sm: 260 },
                                zIndex: 1200,
                                transform: { xs: 'none', sm: 'translateY(-50%)' },
                            }} 
                        />
                    </Box>

                    {/* Menu */}
                    <Box sx={{
                        display: "flex",
                        gap: { xs: 0.8, sm: 1.2 },
                        flexWrap: "wrap",
                        justifyContent: "center",
                        px: { xs: 1, sm: 0 }
                    }}>
                        <TopBarMenu
                            menuIcon={Home}
                            menuColor={Colors.yellow.main}
                            menuName={Features.MENU.home.name[language]}
                            onClick={() => handleNavigation("")}
                        />

                        <TopBarMenu
                            menuIcon={List}
                            menuColor={Colors.red.main}
                            menuName={Features.MENU.institution.name[language]}
                            menuItems={Features.MENU.institution.items.map(item => item[language])}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === Features.MENU.institution.items[0][language]
                                        ? "historia"
                                        : menuItem === Features.MENU.institution.items[1][language]
                                            ? "orgaos_sociais"
                                            : menuItem === Features.MENU.institution.items[2][language]
                                                ? `/docs/Organogramas.pdf`
                                                : menuItem === Features.MENU.institution.items[3][language]
                                                    ? "politica_da_qualidade"
                                                    : menuItem === Features.MENU.institution.items[4][language]
                                                        ? "documentos_institucionais"
                                                        : null;
                                if (targetPath) {
                                    if (menuItem === Features.MENU.institution.items[2][language]) {
                                        window.open(targetPath, "_blank");
                                    } else {
                                        handleNavigation(targetPath);
                                    }
                                }
                            }}
                        />

                        <TopBarMenu
                            menuIcon={FileCopy}
                            menuColor={Colors.green.main}
                            menuName={Features.MENU.socialServices.name[language]}
                            menuItems={Features.MENU.socialServices.items.map(item => item[language])}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === Features.MENU.socialServices.items[0][language]
                                        ? "jardim_infancia"
                                        : menuItem === Features.MENU.socialServices.items[1][language]
                                            ? "creche"
                                            : menuItem === Features.MENU.socialServices.items[2][language]
                                                ? "catl"
                                                : menuItem === Features.MENU.socialServices.items[3][language]
                                                    ? "lar_s_lourenco"
                                                    : menuItem === Features.MENU.socialServices.items[4][language]
                                                        ? "apoio_domiciliario"
                                                        : menuItem === Features.MENU.socialServices.items[5][language]
                                                            ? "formacao_e_emprego"
                                                            : null;

                                if (targetPath) handleNavigation(targetPath);
                            }}
                        />

                        <TopBarMenu
                            menuIcon={People}
                            menuColor={Colors.blue.main}
                            menuName={Features.MENU.projects.name[language]}
                            menuItems={Features.MENU.projects.items.map(item => item[language])}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === Features.MENU.projects.items[0][language]
                                        ? "escolhas_7g"
                                        : menuItem === Features.MENU.projects.items[1][language]
                                            ? "saas"
                                            : menuItem === Features.MENU.projects.items[2][language]
                                                ? "clds4g"
                                                : menuItem === Features.MENU.projects.items[3][language]
                                                    ? "youth_exchange"
                                                    :menuItem === Features.MENU.projects.items[4][language]
                                                        ? "cofinanciados"
                                                        : menuItem === Features.MENU.projects.items[5][language]
                                                            ? "move"
                                                            : null;

                                if (targetPath) handleNavigation(targetPath);
                            }}
                        />

                        <TopBarMenu
                            menuIcon={School}
                            menuColor={Colors.purple.main}
                            menuName={Features.MENU.education.name[language]}
                            menuItems={Features.MENU.education.items.map(item => item[language])}
                            onClick={(menuItem) => {
                                const targetPath =
                                    menuItem === Features.MENU.education.items[0][language]
                                        ? "e2ov"
                                        : menuItem === Features.MENU.education.items[1][language]
                                            ? "centro_qualifica"
                                            : null;

                                if (targetPath) handleNavigation(targetPath);
                            }}
                        />

                        <TopBarMenu
                            menuIcon={Mail}
                            menuColor={Colors.pink.main}
                            menuName={Features.MENU.contacts.name[language]}
                            onClick={() => handleNavigation("contactos")}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopNavBar;
