import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    TextField,
    Typography,
    Button,
    Box,
    InputAdornment,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import { ArrowBack, Email, Lock, Person, Close, VisibilityOff, Visibility } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import PasswordValidator from "../../../components/PasswordValidator";
import HomeViewModel from "../../viewmodel/HomeViewModel";
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";
import Lottie from 'lottie-react';
import userRegisteredAnimation from '../../../../../assets/anim/user_registered.json';
import { sendVerificationCode } from '../../../../../utils/EmailVerification';
import VerificationDialog from './VerificationDialog';
import { isSignInWithEmailLink, signInWithEmailLink, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../data/firebase/FirebaseConfig';

interface RegisterDialogProps {
    onClose: () => void;
    onSwitchToLogin?: () => void;
}

const RegisterDialog: React.FC<RegisterDialogProps> = ({ onClose, onSwitchToLogin }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { registerUser, uiState, resetState } = HomeViewModel();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [openDialog, setOpenDialog] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showVerificationDialog, setShowVerificationDialog] = useState(false);

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ0-9]{2,6}$/;

    useEffect(() => {
        return () => {
            resetState(); // Reset HomeViewModel state when component unmounts
        };
    }, [resetState]);

    const handleClose = () => {
        resetState(); // Reset HomeViewModel state
        setName('');
        setEmail('');
        setPassword('');
        setEmailError(null);
        setShowPassword(false);
        setSnackbarOpen(false);
        setIsLoading(false);
        setShowAnimation(false);
        setRegistrationSuccess(false);
        setOpenDialog(false);
        onClose();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // Check if email and password are valid
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 10 && /[^A-Za-z0-9]/.test(password); // Add your own password conditions
    const isFormValid = isEmailValid && isPasswordValid && name.length > 0;

    useEffect(() => {
        if (uiState.errorMessage) {
            setSnackbarOpen(true);
            setIsLoading(false);
        }
    }, [uiState.errorMessage]);

    useEffect(() => {
        // Check if the user has come back from email verification
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let emailFromStorage = window.localStorage.getItem('emailForSignIn');
            
            if (!emailFromStorage) {
                // If email is missing, ask the user for it
                emailFromStorage = window.prompt('Please provide your email for confirmation');
            }

            if (emailFromStorage) {  // Only proceed if we have a valid email
                setIsLoading(true);
                signInWithEmailLink(auth, emailFromStorage, window.location.href)
                    .then((result) => {
                        window.localStorage.removeItem('emailForSignIn');
                        // Complete registration with the confirmed email
                        const confirmedEmail = emailFromStorage as string;
                        return registerUser(name, confirmedEmail, password);
                    })
                    .then(() => {
                        setRegistrationSuccess(true);
                        setTimeout(() => {
                            handleClose();
                            window.location.reload();
                        }, 2000);
                    })
                    .catch((error) => {
                        console.error('Error completing registration:', error);
                        setErrorMessage('Error completing registration');
                        setSnackbarOpen(true);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }
        }
    }, []);

    const handleSendVerification = async () => {
        if (!email || !name || !password) {
            setErrorMessage('Por favor, preencha todos os campos');
            setSnackbarOpen(true);
            return;
        }

        if (!isFormValid) {
            setErrorMessage('Por favor, verifique os dados inseridos');
            setSnackbarOpen(true);
            return;
        }

        setIsLoading(true);
        try {
            const code = await sendVerificationCode(email);
            setVerificationCode(code);
            setShowVerificationDialog(true);
            setOpenDialog(false);
        } catch (error: any) {
            console.error('Error:', error);
            setErrorMessage('Erro ao enviar código de verificação');
            setSnackbarOpen(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Dialog
                open={openDialog}
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
                        backgroundColor: Color.lightBlue.main,
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                    }}
                />

                <DialogContent sx={{ padding: 3, width: '100%' }}>
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

                    <Typography textAlign="center"
                                sx={{ typography: Type.typography.displayMedium,
                                    color: Color.lightBlue.main, fontWeight: 'bold' }}>
                        Inscreva-se
                    </Typography>

                    <Box mt={4} />

                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box mt={2} />

                    <TextField
                        label="E-mail"
                        variant="outlined"
                        type={"email"}
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(null);
                        }}
                        error={!!emailError}
                        helperText={emailError}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email color="action" />
                                </InputAdornment>
                            ),
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
                            startAdornment: <InputAdornment position="start"><Lock color="action" /></InputAdornment>,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <Visibility color="action" />
                                        ) : (
                                            <VisibilityOff color="action" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box mt={1} />

                    <PasswordValidator password={password} />

                    <Box mt={4} />

                    <Button
                        onClick={handleSendVerification}
                        fullWidth
                        variant={isFormValid ? "contained" : "outlined"}
                        sx={{
                            backgroundColor: isFormValid ? Color.lightBlue.main : 'transparent',
                            borderColor: isFormValid ? 'transparent' : Color.lightBlue.main,
                            color: isFormValid ? 'white' : Color.lightBlue.main,
                        }}
                        startIcon={<Person />}
                        disabled={!isFormValid || isLoading}
                    >
                        Registrar
                    </Button>

                    <Box mt={1} />

                    <Button
                        onClick={onSwitchToLogin}
                        fullWidth
                        variant="outlined"
                        startIcon={<ArrowBack />}
                    >
                        Login
                    </Button>

                    {/* Registration Animation */}
                    {showAnimation && (
                        <Box sx={{ 
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
                            zIndex: 1000
                        }}>
                            <Lottie
                                animationData={userRegisteredAnimation}
                                loop={!registrationSuccess}
                                autoplay={true}
                                style={{ width: 200, height: 200 }}
                            />
                            {registrationSuccess && (
                                <Typography
                                    sx={{
                                        color: Color.lightBlue.main,
                                        mt: 2,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Registro realizado com sucesso!
                                </Typography>
                            )}
                        </Box>
                    )}

                    {/* Error Snackbar */}
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

            {showVerificationDialog && (
                <VerificationDialog
                    onClose={() => {
                        setShowVerificationDialog(false);
                        setOpenDialog(true);
                    }}
                    name={name}
                    email={email}
                    password={password}
                    expectedCode={verificationCode}
                />
            )}
        </>
    );
};

export default RegisterDialog;