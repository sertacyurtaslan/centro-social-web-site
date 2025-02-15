import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    TextField,
    Typography,
    Button,
    Box,
    InputAdornment,
    Snackbar,
    IconButton,
    Alert,
    CircularProgress,
    Link,
    Backdrop,
} from '@mui/material';
import {Email, Lock, Close, ArrowForward, Login, Visibility, VisibilityOff, Person, AdminPanelSettings} from '@mui/icons-material';
import HomeViewModel from "../../viewmodel/HomeViewModel";
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";
import AdminLoginDialog from "./AdminLoginDialog";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';
import { Features } from '../../../../../assets/features/Features';
import ForgotPasswordDialog from './ForgotPasswordDialog';

interface LoginDialogProps {
    onClose: () => void;
    onSwitchToRegister?: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ onClose, onSwitchToRegister }) => {
    const navigate = useNavigate();
    const { loginUser, uiState, isProcessing, resetState } = HomeViewModel();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [openAdminLogin, setOpenAdminLogin] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const { language } = useLanguage() as { language: Language };
    const { login } = Features.AUTH;
    const [isLoading, setIsLoading] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ0-9]{2,6}$/;
    const isEmailValid = emailRegex.test(email);

    useEffect(() => {
        if (uiState.errorMessage) {
            setErrorMessage(uiState.errorMessage);
            setSnackbarOpen(true);
        }
    }, [uiState.errorMessage]);

    useEffect(() => {
        return () => {
            resetState();
        };
    }, [resetState]);

    const handleClose = () => {
        resetState();
        setEmail('');
        setPassword('');
        setErrorMessage('');
        setSnackbarOpen(false);
        setShowPassword(false);
        onClose();
    };

    const handleLogin = async () => {
        if (isLoading) return;
        
        setIsLoading(true);

        if (!email || !password) {
            setErrorMessage('Por favor, preencha todos os campos');
            setSnackbarOpen(true);
            setIsLoading(false);
            return;
        }

        if (!isEmailValid) {
            setErrorMessage('Por favor, insira um email válido');
            setSnackbarOpen(true);
            setIsLoading(false);
            return;
        }

        try {
            const user = await loginUser(email, password);
            if (user) {
                handleClose();
                window.location.reload();
            } else {
                setIsLoading(false);
            }
        } catch (error: any) {
            setSnackbarOpen(true);
            setIsLoading(false);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleOpenAdminLogin = () => {
        setOpenAdminLogin(true);
    };

    const handleCloseAdminLogin = () => {
        setOpenAdminLogin(false);
    };

    return (
        <>
            <Dialog
                open={true}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                sx={{
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <Box
                    sx={{
                        height: '5px',
                        backgroundColor: Color.lightGreen.main,
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                    }}
                />

                <DialogContent sx={{ padding: 3, width: '100%', position: 'relative' }}>
                    <Backdrop
                        sx={{
                            color: '#fff',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                            position: 'absolute',
                            borderRadius: 1,
                        }}
                        open={isLoading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            padding: 1,
                            cursor: 'pointer',
                        }}
                        onClick={handleClose}
                    >
                        <Close />
                    </Box>

                    <Typography
                        textAlign="center"
                        sx={{
                            typography: Type.typography.displayMedium,
                            color: Color.lightGreen.main,
                            fontWeight: 'bold',
                        }}
                    >
                        {login.title[language]}
                    </Typography>

                    <Box mt={4} />

                    <TextField
                        label={login.email.label[language]}
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errorMessage}
                        helperText={errorMessage && login.email.error[language]}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email sx={{ color: Color.lightGreen.main }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: Color.lightGreen.main,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: Color.lightGreen.main,
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: Color.lightGreen.main,
                            },
                        }}
                    />

                    <Box mt={2} />

                    <TextField
                        label={login.password.label[language]}
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errorMessage}
                        helperText={errorMessage && login.password.error[language]}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock sx={{ color: Color.lightGreen.main }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff sx={{ color: Color.lightGreen.main }} />
                                        ) : (
                                            <Visibility sx={{ color: Color.lightGreen.main }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: Color.lightGreen.main,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: Color.lightGreen.main,
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: Color.lightGreen.main,
                            },
                        }}
                    />

                    <Box sx={{ width: '100%', textAlign: 'right', mt: 1 }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => setOpenForgotPassword(true)}
                            sx={{
                                color: Color.lightGreen.main,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                }
                            }}
                        >
                            {Features.AUTH.forgot_password.link[language]}
                        </Link>
                    </Box>

                    <Box my={2}>
                        <Button
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            sx={{ 
                                backgroundColor: Color.lightGreen.main,
                                '&.Mui-disabled': {
                                    backgroundColor: `${Color.lightGreen.main}80`,
                                    color: 'white'
                                }
                            }}
                            startIcon={<Login />}
                            disabled={isLoading}
                        >
                            {login.buttons.login[language]}
                        </Button>
                    </Box>

                    <Box my={1}>
                        <Button
                            onClick={onSwitchToRegister}
                            variant="outlined"
                            sx={{ color: Color.lightGreen.main }}
                            fullWidth
                            startIcon={<ArrowForward />}
                        >
                            {login.buttons.register[language]}
                        </Button>
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Button
                            fullWidth
                            startIcon={<AdminPanelSettings />}
                            onClick={handleOpenAdminLogin}
                            sx={{
                                mt: 1,
                                background: 'linear-gradient(45deg, #9C27B0, #7B1FA2)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #7B1FA2, #6A1B9A)',
                                },
                            }}
                        >
                            {language === 'pt' ? 'Login como Admin' : 'Admin Login'}
                        </Button>
                    </Box>

                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => setSnackbarOpen(false)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert
                            severity="error"
                            onClose={() => setSnackbarOpen(false)}
                            sx={{ width: '100%' }}
                        >
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </DialogContent>
            </Dialog>

            {openAdminLogin && (
                <AdminLoginDialog 
                    onClose={handleCloseAdminLogin}
                />
            )}

            {openForgotPassword && (
                <ForgotPasswordDialog
                    onClose={() => setOpenForgotPassword(false)}
                />
            )}
        </>
    );
};

export default LoginDialog;
