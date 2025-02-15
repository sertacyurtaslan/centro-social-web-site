import React from 'react';
import Router from "./presentation/routes/Router";
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
    return (
        <LanguageProvider>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </LanguageProvider>
    );
}
