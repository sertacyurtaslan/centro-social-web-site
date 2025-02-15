import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Phone, Facebook, EmailRounded, Login, Person, Logout } from '@mui/icons-material';
import Colors from "../../../../../theme/Color";
import RegisterDialog from "../auth/RegisterDialog";
import LoginDialog from "../auth/LoginDialog";
import Type from "../../../../../theme/Type";
import Color from "../../../../../theme/Color";
import HomeViewModel from "../../viewmodel/HomeViewModel";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../../../../data/firebase/FirebaseConfig";
import LanguageSwitch from '../../../../components/LanguageSwitch';
import { Features } from '../../../../../assets/features/Features';
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';
import { useAuth } from '../../../../../context/AuthContext';

interface TopAppBarProps {
    currentUser?: {
        userName: string | null;
        email: string | null;
        uid: string;
    } | null;
}

const topBarStyles = {
    backgroundColor: Colors.topBarColor.main,
    color: 'white',
    paddingLeft: { xs: 8, sm: 18 },
    paddingRight: { xs: 8, sm: 22 },
    justifyContent: 'center',
    height: { xs: 'auto', sm: '56px' },
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const iconStyles = {
    marginRight: '8px',
    fontSize: '1.2rem',
    transition: 'transform 0.2s ease',
    '&:hover': {
        transform: 'scale(1.1)',
    }
};

const buttonStyles = {
    typography: Type.typography.buttonMedium,
    textTransform: 'none',
    color: 'white',
    marginLeft: 2,
    borderRadius: '20px',
    padding: '6px 16px',
    transition: 'all 0.2s ease',
    '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
};

const contactLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '16px',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-1px)',
    },
};

const TopAppBar: React.FC<TopAppBarProps> = ({  }) => {
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const { logoutUser } = HomeViewModel();
    const { currentUser } = useAuth();
    const { language } = useLanguage() as { language: Language };

    const handleOpenRegisterDialog = () => {
        setOpenRegisterDialog(true);
    };

    const handleOpenLoginDialog = () => {
        setOpenLoginDialog(true);
    };

    const handleCloseRegisterDialog = () => {
        setOpenRegisterDialog(false);
    };

    const handleCloseLoginDialog = () => {
        setOpenLoginDialog(false);
    };

    const handleLogout = async () => {
        try {
            await logoutUser(); // Call logoutUser from HomeViewModel
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleSwitchToRegister = () => {
        setOpenLoginDialog(false);
        setOpenRegisterDialog(true);
    };

    const handleSwitchToLogin = () => {
        setOpenRegisterDialog(false);
        setOpenLoginDialog(true);
    };

    return (
        <AppBar position="relative" sx={topBarStyles}>
            <Toolbar 
                sx={{ 
                    minHeight: '56px !important',
                    flexDirection: { xs: 'column', sm: 'row' },
                    py: { xs: 1.5, sm: 0 },
                    gap: { xs: 1.5, sm: 0 },
                }}
            >
                {/* Left section with contact info */}
                <Box sx={{ 
                    display: 'flex', 
                    flexGrow: { xs: 0, sm: 1 },
                    gap: { xs: 1.5, sm: 2 },
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    width: { xs: '100%', sm: 'auto' },
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: 1.5, sm: 2 },
                        alignItems: 'center',
                    }}>
                        <Box
                            component="a"
                            href="mailto:geral@cse.pt"
                            sx={contactLinkStyles}
                        >
                            <EmailRounded 
                                sx={{ 
                                    color: '#FFD700',
                                    marginRight: { xs: 0.75, sm: 1 },
                                    fontSize: { xs: '1.1rem', sm: '1.2rem' }
                                }} 
                            />
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    '&:hover': { color: '#FFD700' }
                                }}
                            >
                                geral@cse.pt
                            </Typography>
                        </Box>

                        <Box
                            component="a"
                            href="tel:229747194"
                            sx={contactLinkStyles}
                        >
                            <Phone 
                                sx={{ 
                                    color: '#4CAF50',
                                    marginRight: { xs: 0.75, sm: 1 },
                                    fontSize: { xs: '1.1rem', sm: '1.2rem' }
                                }} 
                            />
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    '&:hover': { color: '#4CAF50' }
                                }}
                            >
                                229747194
                            </Typography>
                        </Box>

                        <Box
                            component="a"
                            href="https://www.facebook.com/centrosocialdeermesinde/?epa=SEARCH_BOX"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={contactLinkStyles}
                        >
                            <Facebook 
                                sx={{ 
                                    color: '#4267B2',
                                    marginRight: { xs: 0.75, sm: 1 },
                                    fontSize: { xs: '1.1rem', sm: '1.2rem' }
                                }} 
                            />
                            <Typography 
                                sx={{ 
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    '&:hover': { color: '#4267B2' }
                                }}
                            >
                                Facebook
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right section with login/signup or logout */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: { xs: 'center', sm: 'flex-end' },
                    gap: { xs: 1.5, sm: 2 },
                    width: { xs: '100%', sm: 'auto' },
                }}>
                    {currentUser ? (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1.5, sm: 2 },
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}>
                            <Typography 
                                sx={{ 
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    fontSize: { xs: '0.85rem', sm: '1rem' },
                                    whiteSpace: 'nowrap',
                                    textAlign: { xs: 'center', sm: 'left' }
                                }}
                            >
                                <Person sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
                                {Features.MENU.welcome.name[language]}
                                <Typography 
                                    component="span" 
                                    sx={{ 
                                        fontWeight: 600,
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {currentUser.userName}
                                </Typography>
                            </Typography>
                            <Button
                                color="inherit"
                                sx={{
                                    ...buttonStyles,
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    padding: { xs: '5px 14px', sm: '6px 16px' },
                                    background: 'linear-gradient(45deg, #FF4444, #CC0000)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #CC0000, #AA0000)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Logout sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />}
                                onClick={handleLogout}
                            >
                                {Features.MENU.logout.name[language]}
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ 
                            display: 'flex', 
                            gap: 0.2,
                            alignItems: 'center',
                        }}>
                            <Button
                                color="inherit"
                                sx={{
                                    ...buttonStyles,
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    padding: { xs: '5px 14px', sm: '6px 16px' },
                                    background: 'linear-gradient(45deg, #4CAF50, #45a049)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #45a049, #388E3C)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Login sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />}
                                onClick={handleOpenLoginDialog}
                            >
                                {Features.MENU.login.name[language]}
                            </Button>
                            <Button
                                color="inherit"
                                sx={{
                                    ...buttonStyles,
                                    fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                    padding: { xs: '5px 14px', sm: '6px 16px' },
                                    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #1976D2, #1565C0)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Person sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />}
                                onClick={handleOpenRegisterDialog}
                            >
                                {Features.MENU.register.name[language]}
                            </Button>
                        </Box>
                    )}
                </Box>
                <Box sx={{ flexGrow: 0, ml: 2 }}>
                    <LanguageSwitch />
                </Box>
            </Toolbar>

            {/* Dialogs for registration and login */}
            {openRegisterDialog && (
                <RegisterDialog 
                    onClose={handleCloseRegisterDialog}
                    onSwitchToLogin={handleSwitchToLogin}
                />
            )}
            {openLoginDialog && (
                <LoginDialog 
                    onClose={handleCloseLoginDialog}
                    onSwitchToRegister={handleSwitchToRegister}
                />
            )}
        </AppBar>
    );
};

export default TopAppBar;
