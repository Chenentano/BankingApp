import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!isLoggedIn) {
            console.log("User not logged in. Redirecting to /401-not-authorised");
            navigate("/401-not-authorised");
        } else {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [navigate]);

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p className="loading-text">Einen Moment bitte</p>
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
};

export default ProtectedRoute;
