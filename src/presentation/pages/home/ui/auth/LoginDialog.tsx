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
} from '@mui/material';
import {Email, Lock, Close, ArrowForward, Login, Visibility, VisibilityOff, Person} from '@mui/icons-material';
import HomeViewModel from "../../viewmodel/HomeViewModel";
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";

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
        if (isProcessing) return;

        if (!email || !password) {
            setErrorMessage('Por favor, preencha todos os campos');
            setSnackbarOpen(true);
            return;
        }

        if (!isEmailValid) {
            setErrorMessage('Por favor, insira um email válido');
            setSnackbarOpen(true);
            return;
        }

        try {
            const user = await loginUser(email, password);
            if (user) {
                setLoginSuccess(true);
                setTimeout(() => {
                    handleClose();
                    window.location.reload();
                }, 2000);
            }
        } catch (error: any) {
            setSnackbarOpen(true);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
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
                {(isProcessing || loginSuccess) && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            zIndex: 9999,
                            gap: 2
                        }}
                    >
                        <CircularProgress sx={{ color: Color.lightGreen.main }} />
                        {loginSuccess && (
                            <Typography
                                sx={{
                                    color: Color.lightGreen.main,
                                    fontWeight: 'bold'
                                }}
                            >
                                Login realizado com sucesso!
                            </Typography>
                        )}
                    </Box>
                )}

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
                    Bem-vindo de Volta
                </Typography>

                <Box mt={4} />

                <TextField
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                                        <Visibility sx={{ color: Color.lightGreen.main }} />
                                    ) : (
                                        <VisibilityOff sx={{ color: Color.lightGreen.main }} />
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

                <Box my={2}>
                    <Button
                        onClick={handleLogin}
                        fullWidth
                        variant={isEmailValid ? "contained" : "outlined"}
                        sx={{
                            backgroundColor: isEmailValid ? Color.lightGreen.main : 'transparent',
                            borderColor: isEmailValid ? 'transparent' : Color.lightGreen.main,
                            color: isEmailValid ? 'white' : Color.lightGreen.main,
                        }}
                        disabled={!isEmailValid || isProcessing}
                        startIcon={<Login />}
                    >
                        Entrar
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
                        Cadastre-se
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
    );
};

export default LoginDialog;
