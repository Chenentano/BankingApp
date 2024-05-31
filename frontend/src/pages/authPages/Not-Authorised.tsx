import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotAuthorised = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <motion.div
                className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    401 - Unauthorized
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Sie haben keine Berechtigung, auf diese Seite zuzugreifen.
                </motion.p>
                <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Möglicherweise sind Sie noch nicht angemeldet oder Ihre Sitzung ist abgelaufen.
                </motion.p>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <Link to="/login" className="text-blue-500 hover:text-blue-600">Zurück zum Login</Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default NotAuthorised;
