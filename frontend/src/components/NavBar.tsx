import {Link, useNavigate} from "react-router-dom";

export default function NavBar (){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        console.log("Erfolgreich ausgelogged!");
    };

    return(
        <>
            <nav className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white text-xl font-semibold">Banking-App</Link>
                    <div>
                        <Link to="/home" className="text-white mr-4">Startseite</Link>
                        <Link to="/transfer-form" className="text-white mr-4">Überweisung</Link>
                        <Link to="/dauerauftrag" className="text-white mr-4">Dauerauftrag</Link>
                        <Link to="/account-transactions" className="text-white mr-4">Umsätze anzeigen</Link>
                        <button onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">Logout
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
}