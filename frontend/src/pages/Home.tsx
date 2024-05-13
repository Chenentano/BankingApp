import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

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