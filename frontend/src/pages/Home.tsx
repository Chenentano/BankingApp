import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!isLoggedIn) {
            console.log("User not logged in. Redirecting to /401-not-authorised");
            navigate("/401-not-authorised");
        } else {
            setIsLoading(false);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        console.log("Erfolgreich ausgelogged!")
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Willkommen User!</h1>
            <ul>
                <li>Home</li>
                <li>Platzhalter</li>
                <li>Platzhalter</li>
                <li>Platzhalter</li>
                <li>Platzhalter</li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Home;
