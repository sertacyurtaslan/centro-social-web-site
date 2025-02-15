import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    TextField,
    Typography,
    Button,
    Box,
    Snackbar,
    Alert,
    CircularProgress,
    DialogTitle,
    DialogActions
} from '@mui/material';
import { Close } from '@mui/icons-material';
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";
import HomeViewModel from '../../viewmodel/HomeViewModel';
import { sendVerificationCode } from '../../../../../utils/EmailVerification';
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';
import { Features } from '../../../../../assets/features/Features';

interface VerificationDialogProps {
    onClose: () => void;
    name: string;
    email: string;
    password: string;
    expectedCode: string;
}

const VerificationDialog: React.FC<VerificationDialogProps> = ({ onClose, name, email, password, expectedCode }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const { registerUser } = HomeViewModel();
    const { language } = useLanguage() as { language: Language };
    const { verification } = Features.AUTH;

    const handleVerify = async () => {
        if (verificationCode === expectedCode) {
            setIsLoading(true);
            try {
                const result = await registerUser(name, email, password);
                if (result) {
                    setRegistrationSuccess(true);
                    setTimeout(() => {
                        onClose();
                        window.location.reload();
                    }, 2000);
                }
            } catch (error: any) {
                setErrorMessage(error.message || 'Erro ao registrar usuário');
                setSnackbarOpen(true);
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage('Código de verificação incorreto');
            setSnackbarOpen(true);
        }
    };

    const handleResendCode = async () => {
        setIsLoading(true);
        try {
            await sendVerificationCode(email); // Resend the verification code
            setErrorMessage('Código de verificação reenviado. Verifique seu email.');
            setSnackbarOpen(true);
        } catch (error: any) {
            setErrorMessage('Erro ao reenviar o código de verificação');
            setSnackbarOpen(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog
            open={true}
            onClose={onClose}
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

            <DialogContent sx={{ padding: 3, width: '100%', position: 'relative' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: 1,
                        cursor: 'pointer',
                    }}
                    onClick={onClose}
                >
                    <Close />
                </Box>

                <Typography
                    textAlign="center"
                    sx={{
                        typography: Type.typography.displayMedium,
                        color: Color.lightBlue.main,
                        fontWeight: 'bold'
                    }}
                >
                    {verification.title[language]}
                </Typography>

                <Typography
                    textAlign="center"
                    sx={{ mt: 2, mb: 4 }}
                >
                    {verification.message[language]}
                </Typography>

                <TextField
                    fullWidth
                    label="Código de Verificação"
                    variant="outlined"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    type="number"
                    InputProps={{
                        inputProps: { 
                            maxLength: 6,
                            pattern: '[0-9]*'
                        }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: Color.lightBlue.main,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: Color.lightBlue.main,
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: Color.lightBlue.main,
                        },
                    }}
                />

                {isLoading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100px', // Adjust height as needed
                        }}
                    >
                        <CircularProgress sx={{ color: Color.lightBlue.main }} />
                    </Box>
                ) : (
                    <>
                        <Button
                            onClick={handleVerify}
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: Color.lightBlue.main,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: Color.lightBlue.main,
                                }
                            }}
                            disabled={verificationCode.length !== 6 || isLoading}
                        >
                            Verificar
                        </Button>

                        <Button
                            onClick={handleResendCode}
                            fullWidth
                            variant="outlined"
                            sx={{
                                mt: 2,
                                color: Color.lightBlue.main,
                            }}
                            disabled={isLoading}
                        >
                            Reenviar Código
                        </Button>
                    </>
                )}

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
            <DialogActions>
                <Button onClick={onClose}>{verification.buttons.close[language]}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default VerificationDialog;