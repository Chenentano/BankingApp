// src/App.tsx
import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <header className="py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Your Bank</h1>
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Link>
            </header>
            <main className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center py-40">
                    <h2 className="text-4xl font-bold mb-8">Willkommen bei der Basti Bank!</h2>
                    <p className="text-lg mb-8">SCAM wird hier groß geschrieben!</p>
                    <div className="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500 mx-auto animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </div>
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Unser Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Account Management</h3>
                                <p className="text-lg">Manchmal verliert man Daten... passiert</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Online Banking</h3>
                                <p className="text-lg">20% Transaktionsgebühr auf Ehrenlos</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Sichere Transaktionen</h3>
                                <p className="text-lg">Klartext aber. Praktikant muss noch Encryption lernen.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-40">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Über uns</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                            ipsum. Praesent
                            mauris. Fusce nec tellus sed augue semper porta.
                        </p>
                    </div>
                </section>
                <section className="py-20 bg-gray-200">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Array.from({length: 3}, (_, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-64 bg-gray-300"></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">John Doe</h3>
                                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Kontakt</h2>
                        <p className="text-lg">Email: info@yourbank.com</p>
                        <p className="text-lg">Phone: 123-456-7890</p>
                    </div>
                </section>
            </main>
            <footer className="py-4 px-8 bg-gray-200 text-center">
                <p>© 2024 Your Bank. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
