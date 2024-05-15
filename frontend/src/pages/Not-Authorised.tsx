import { Link } from "react-router-dom";

const NotAuthorised = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">401 - Unauthorized</h2>
                <p className="text-gray-600 mb-4">Sie haben keine Berechtigung, auf diese Seite zuzugreifen.</p>
                <p className="text-gray-600">Möglicherweise sind Sie noch nicht angemeldet oder Ihre Sitzung ist abgelaufen.</p>
                <div className="mt-6">
                    <Link to="/login" className="text-blue-500 hover:text-blue-600">Zurück zum Login</Link>
                </div>
            </div>
        </div>
    );
}

export default NotAuthorised;
