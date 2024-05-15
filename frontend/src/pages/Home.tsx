import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        console.log("Erfolgreich ausgelogged!");
    };

    return (
        <>
            <h1>Willkommen User!</h1>
            <ul>
                <li><Link to="/home" className="text-blue-500">Home</Link></li>
                <li><Link to="/transfer-form" className="text-blue-500">Überweisung</Link></li>
                <li>Platzhalter</li>
                <li>Platzhalter</li>
                <li>Platzhalter</li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
    </>
            );
};

export default Home;
