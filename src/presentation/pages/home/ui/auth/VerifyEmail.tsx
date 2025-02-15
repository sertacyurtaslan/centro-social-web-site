import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../../data/firebase/FirebaseConfig';
import { applyActionCode } from 'firebase/auth';
import { Box, Typography, CircularProgress } from '@mui/material';
import Color from '../../../../../theme/Color';
import Lottie from 'lottie-react';
import successAnimation from '../../../../../assets/anim/user_registered.json';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import User from '../../../../../domain/model/User';

const db = getFirestore();

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [isVerifying, setIsVerifying] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                console.log('Starting verification process...');
                const actionCode = new URLSearchParams(window.location.search).get('oobCode');
                
                if (!actionCode) {
                    throw new Error('No verification code found');
                }

                console.log('Verifying email...');
                await applyActionCode(auth, actionCode);
                console.log('Email verified successfully');

                const pendingRegistration = localStorage.getItem('pendingRegistration');
                console.log('Pending registration data:', pendingRegistration);

                if (pendingRegistration && auth.currentUser) {
                    const userData: User = JSON.parse(pendingRegistration);
                    console.log('Parsed user data:', userData);
                    
                    try {
                        // Register user in Firestore
                        const userRef = doc(db, 'users', userData.userId!);
                        const userDoc = {
                            userName: userData.userName,
                            userEmail: userData.userEmail,
                            userCreationDate: userData.userCreationDate,
                            emailVerified: true,
                            role: 'user'
                        };
                        
                        console.log('Attempting to save to Firestore:', userDoc);
                        await setDoc(userRef, userDoc);
                        console.log('User saved to Firestore successfully');

                        localStorage.removeItem('pendingRegistration');
                    } catch (firestoreError) {
                        console.error('Firestore error:', firestoreError);
                        throw firestoreError;
                    }
                } else {
                    console.warn('No pending registration or current user found');
                }
                
                setTimeout(() => {
                    navigate('/home');
                }, 2000);

            } catch (error: any) {
                console.error('Detailed verification error:', error);
                setError(error.message || 'Failed to verify email. Please try again.');
            } finally {
                setIsVerifying(false);
            }
        };

        verifyEmail();
    }, [navigate]);

    if (error) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            {isVerifying ? (
                <CircularProgress sx={{ color: Color.lightBlue.main }} />
            ) : (
                <>
                    <Lottie
                        animationData={successAnimation}
                        loop={false}
                        style={{ width: 200, height: 200 }}
                    />
                    <Typography
                        sx={{
                            color: Color.lightBlue.main,
                            mt: 2,
                            fontWeight: 'bold'
                        }}
                    >
                        Email verificado com sucesso!
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default VerifyEmail; 