import React from 'react';
import { Navigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../data/firebase/FirebaseConfig';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAdmin, setIsAdmin] = React.useState<boolean | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const checkAdminStatus = async () => {
            const adminSession = sessionStorage.getItem('adminSession');
            
            if (!adminSession) {
                setIsAdmin(false);
                setIsLoading(false);
                return;
            }

            try {
                const { adminMail, timestamp } = JSON.parse(adminSession);
                
                // Check if session is expired (e.g., after 24 hours)
                const now = new Date().getTime();
                const sessionAge = now - timestamp;
                if (sessionAge > 24 * 60 * 60 * 1000) { // 24 hours
                    sessionStorage.removeItem('adminSession');
                    setIsAdmin(false);
                    setIsLoading(false);
                    return;
                }

                // Verify admin still exists in Firestore
                const adminsRef = collection(db, 'admins');
                const q = query(adminsRef, where('adminMail', '==', adminMail));
                const querySnapshot = await getDocs(q);
                
                setIsAdmin(!querySnapshot.empty);
            } catch (error) {
                console.error('Error checking admin status:', error);
                setIsAdmin(false);
            }
            
            setIsLoading(false);
        };

        checkAdminStatus();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute; 