import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    TextField,
    Typography,
    Box,
    Button,
    InputAdornment,
    Alert,
} from '@mui/material';
import { Close, Email } from '@mui/icons-material';
import { auth } from '../../../../../data/firebase/FirebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import Color from '../../../../../theme/Color';
import Type from '../../../../../theme/Type';
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';
import { Features } from '../../../../../assets/features/Features';

interface ForgotPasswordDialogProps {
    onClose: () => void;
}

const ForgotPasswordDialog: React.FC<ForgotPasswordDialogProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { language } = useLanguage() as { language: Language };
    const { forgot_password } = Features.AUTH;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError(forgot_password.email.error.required[language]);
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/;
        if (!emailRegex.test(email)) {
            setError(forgot_password.email.error.invalid[language]);
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess(true);
            setError('');
            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <Dialog
            open={true}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    position: 'relative',
                }
            }}
        >
            <DialogContent sx={{ p: 3 }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
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
                        color: Color.lightGreen.main,
                        fontWeight: 'bold',
                        mb: 3
                    }}
                >
                    {forgot_password.title[language]}
                </Typography>

                {success ? (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {forgot_password.success[language]}
                    </Alert>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label={forgot_password.email.label[language]}
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!error}
                            helperText={error}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={{ color: Color.lightGreen.main }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 3,
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

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: Color.lightGreen.main,
                                '&:hover': {
                                    bgcolor: Color.lightGreen.main,
                                },
                                py: 1.5,
                                borderRadius: 2,
                            }}
                        >
                            {forgot_password.button[language]}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ForgotPasswordDialog; 