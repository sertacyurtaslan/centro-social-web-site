import { useState } from 'react';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import User from "../../../../domain/model/User";
import { auth, firestore } from "../../../../data/firebase/FirebaseConfig";
import { v4 as uuidv4 } from 'uuid';

interface HomeState {
    errorMessage?: string;
    successMessage?: string;
    currentUser?: {
        userName: string | null;
        email: string | null;
        uid: string;
    } | null;
}

function HomeViewModel() {
    const [uiState, setUiState] = useState<HomeState>({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSavedAnimation, setShowSavedAnimation] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(true);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const registerUser = async (name: string, email: string, password: string) => {
        if (isProcessing) return false;
        setIsProcessing(true);

        try {
            setUiState({ errorMessage: undefined, successMessage: undefined });

            if (!isValidEmail(email)) {
                setUiState({ errorMessage: 'Por favor, insira um e-mail válido.' });
                return false;
            }

            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if (signInMethods.length > 0) {
                setUiState({ errorMessage: 'Este e-mail já está registrado.' });
                return false;
            }

            const authResult = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(authResult.user, {
                displayName: name
            });

            const userId = uuidv4();
            const user: User = {
                userId,
                userName: name || '',
                userEmail: email || '',
                userCreationDate: new Date().toISOString(),
            };

            await saveUserToFirestore(user, authResult.user.uid);
            setUiState({ successMessage: 'User registered successfully.' });
            
            return true;

        } catch (error: any) {
            console.error('RegisterUser Error:', error.message);
            
            // Handle specific Firebase Auth errors
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setUiState({ errorMessage: 'Este e-mail já está em uso.' });
                    break;
                case 'auth/invalid-email':
                    setUiState({ errorMessage: 'Endereço de e-mail inválido.' });
                    break;
                case 'auth/operation-not-allowed':
                    setUiState({ errorMessage: 'Registro com e-mail e senha não está habilitado.' });
                    break;
                case 'auth/weak-password':
                    setUiState({ errorMessage: 'A senha é muito fraca. Use uma senha mais forte.' });
                    break;
                case 'auth/network-request-failed':
                    setUiState({ errorMessage: 'Erro de conexão. Verifique sua internet.' });
                    break;
                default:
                    setUiState({ errorMessage: 'Ocorreu um erro durante o registro. Tente novamente.' });
            }
            return false;
        } finally {
            setIsProcessing(false);
        }
    };


    const logoutUser = async () => {
        try {
            await signOut(auth);
            setUiState({ successMessage: 'Logged out successfully.' });
            // Reload the page to reflect changes
            window.location.reload();
        } catch (error:any) {
            console.error('Logout Error:', error.message);
        }
    };


    const saveUserToFirestore = async (user: User, firebaseUserId: string) => {
        const docRef = doc(firestore, 'users', firebaseUserId);
        try {
            console.log('Saving user to Firestore:', user);
            await setDoc(docRef, user);
            console.log('User saved to Firestore successfully');
        } catch (error: any) {
            console.error('SaveUserToFirestore Error:', error.message);
            throw new Error('Failed to save user to Firestore.');
        }
    };

    const getUserFromFirestore = async (firebaseUserId: string): Promise<User | null> => {
        try {
            const docRef = doc(firestore, 'users', firebaseUserId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return docSnap.data() as User;
            }
            return null;
        } catch (error) {
            console.error('Error fetching user from Firestore:', error);
            return null;
        }
    };

    const resetState = () => {
        setUiState({});
        setIsProcessing(false);
    };

    const loginUser = async (email: string, password: string) => {
        if (isProcessing) return null;
        setIsProcessing(true);
        setUiState({}); // Reset UI state

        try {
            if (!isValidEmail(email)) {
                setUiState({ errorMessage: 'Por favor, insira um e-mail válido.' });
                setIsProcessing(false); // Make sure to reset processing state
                return null;
            }

            if (!password || password.length < 6) {
                setUiState({ errorMessage: 'A senha deve ter pelo menos 6 caracteres.' });
                setIsProcessing(false);
                return null;
            }

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            if (!firebaseUser) {
                setUiState({ errorMessage: 'Falha no login. Tente novamente.' });
                setIsProcessing(false);
                return null;
            }

            const firestoreUser = await getUserFromFirestore(firebaseUser.uid);
            
            if (!firestoreUser) {
                setUiState({ errorMessage: 'Dados do usuário não encontrados.' });
                setIsProcessing(false);
                return null;
            }

            // Add a small delay to show the success state
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return firebaseUser;

        } catch (error: any) {
            console.error('Login Error:', error.message);
            
            switch (error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setUiState({ errorMessage: 'Email ou senha incorretos.' });
                    break;
                case 'auth/too-many-requests':
                    setUiState({ errorMessage: 'Muitas tentativas de login. Tente novamente mais tarde.' });
                    break;
                case 'auth/user-disabled':
                    setUiState({ errorMessage: 'Esta conta foi desativada.' });
                    break;
                case 'auth/network-request-failed':
                    setUiState({ errorMessage: 'Erro de conexão. Verifique sua internet.' });
                    break;
                default:
                    setUiState({ errorMessage: 'Ocorreu um erro durante o login. Tente novamente.' });
            }
            throw error;
        } finally {
            setIsProcessing(false);
        }
    };

    return { 
        uiState, 
        registerUser, 
        loginUser, 
        logoutUser,
        isProcessing,
        resetState 
    };
}

export default HomeViewModel;
