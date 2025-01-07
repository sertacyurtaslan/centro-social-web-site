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
    paddingLeft: 18,
    paddingRight: 22,
    justifyContent: 'center',
    height: '56px',
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

const TopAppBar: React.FC<TopAppBarProps> = ({ currentUser }) => {
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const { logoutUser } = HomeViewModel();

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

    return (
        <AppBar position="relative" sx={topBarStyles}>
            <Toolbar sx={{ minHeight: '56px !important' }}>
                {/* Left section with contact info */}
                <Box sx={{ display: 'flex', flexGrow: 1, gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component="a"
                            href="mailto:geral@cse.pt"
                            sx={contactLinkStyles}
                        >
                            <EmailRounded 
                                sx={{ 
                                    color: '#FFD700',
                                    marginRight: 1,
                                    fontSize: '1.2rem'
                                }} 
                            />
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'white',
                                    '&:hover': { color: '#FFD700' }
                                }}
                            >
                                geral@cse.pt
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component="a"
                            href="tel:229747194"
                            sx={contactLinkStyles}
                        >
                            <Phone 
                                sx={{ 
                                    color: '#4CAF50',
                                    marginRight: 1,
                                    fontSize: '1.2rem'
                                }} 
                            />
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'white',
                                    '&:hover': { color: '#4CAF50' }
                                }}
                            >
                                229747194
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                                    marginRight: 1,
                                    fontSize: '1.2rem'
                                }} 
                            />
                            <Typography 
                                sx={{ 
                                    color: 'white',
                                    '&:hover': { color: '#4267B2' }
                                }}
                            >
                                Facebook
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right section with login/signup or logout */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {currentUser ? (
                        <>
                            <Typography 
                                sx={{ 
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Person sx={{ fontSize: '1.2rem' }} />
                                {`Bem-vindo, `}
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
                                    background: 'linear-gradient(45deg, #FF4444, #CC0000)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #CC0000, #AA0000)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Logout />}
                                onClick={handleLogout}
                            >
                                Log out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                sx={{
                                    ...buttonStyles,
                                    background: 'linear-gradient(45deg, #4CAF50, #45a049)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #45a049, #388E3C)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Login />}
                                onClick={handleOpenLoginDialog}
                            >
                                Entrar
                            </Button>
                            <Button
                                color="inherit"
                                sx={{
                                    ...buttonStyles,
                                    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #1976D2, #1565C0)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                    },
                                }}
                                startIcon={<Person />}
                                onClick={handleOpenRegisterDialog}
                            >
                                Criar Conta
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>

            {/* Dialogs for registration and login */}
            {openRegisterDialog && <RegisterDialog onClose={handleCloseRegisterDialog} />}
            {openLoginDialog && <LoginDialog onClose={handleCloseLoginDialog} />}
        </AppBar>
    );
};

export default TopAppBar;
