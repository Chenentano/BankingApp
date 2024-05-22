import React from 'react';
import { Link } from 'react-router-dom';
import Welcome_Background from "../assets/Welcome_Page_Background.jpg";
import Mitarbeiter from "../assets/Mitarbeiter.jpg"

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <header className="py-6 px-8 flex justify-between items-center bg-white shadow-md">
                <h1 className="text-3xl font-extrabold text-indigo-600">Basti Bank</h1>
                <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105">Login</Link>
            </header>
            <main className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url(${Welcome_Background})` }}>
                    <h2 className="text-5xl font-bold mb-8 animate-fade-in">Willkommen bei der Basti Bank!</h2>
                    <p className="text-xl mb-8 animate-fade-in delay-2s">SCAM wird hier groß geschrieben!</p>
                    <div className="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Unser Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Account Management</h3>
                                <p className="text-lg text-black">Verwalten Sie Ihre Konten einfach und sicher.</p>
                            </div>
                            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Online Banking</h3>
                                <p className="text-lg text-black">Führen Sie Transaktionen bequem von zu Hause aus durch.</p>
                            </div>
                            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Sichere Transaktionen</h3>
                                <p className="text-lg text-black">Ihre Sicherheit hat bei uns oberste Priorität.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Über uns</h2>
                        <p className="text-lg text-black max-w-3xl mx-auto">
                            Bei der Basti Bank setzen wir auf Transparenz und Vertrauen. Seit unserer Gründung im Jahr 2020 haben wir uns darauf spezialisiert, unseren Kunden innovative und sichere Finanzdienstleistungen anzubieten. Unser Team besteht aus erfahrenen Fachleuten, die sich für Ihre finanziellen Bedürfnisse einsetzen.
                        </p>
                    </div>
                </section>
                <section className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Unser Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Array.from({ length: 3 }, (_, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden transform hover:scale-105">
                                    <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${Mitarbeiter})` }}></div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Mr Krabs {i + 1}</h3>
                                        <p className="text-lg text-black">Spezialist für Finanzdienstleistungen</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-white py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Kontakt</h2>
                        <p className="text-lg text-black">Email: info@bastibank.com</p>
                        <p className="text-lg text-black">Telefon: 123-456-7890</p>
                        <p className="text-lg text-black">Adresse: Musterstraße 1, 12345 Musterstadt</p>
                    </div>
                </section>
                <section className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Kundenstimmen</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                                <p className="text-lg text-black italic">"Basti Bank hat mein Leben verändert. Der Service ist einfach erstklassig."</p>
                                <h3 className="text-xl font-semibold mt-4 text-indigo-600">- Maria Müller</h3>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                                <p className="text-lg text-black italic">"Ich bin seit Jahren Kunde und wurde nie enttäuscht. Absolut empfehlenswert!"</p>
                                <h3 className="text-xl font-semibold mt-4 text-indigo-600">- Peter Schmidt</h3>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                                <p className="text-lg text-black italic">"Die Sicherheit und Einfachheit des Online Bankings ist unschlagbar."</p>
                                <h3 className="text-xl font-semibold mt-4 text-indigo-600">- Laura Becker</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-indigo-600">FAQs</h2>
                        <div className="max-w-3xl mx-auto">
                            <details className="mb-4">
                                <summary className="cursor-pointer text-lg text-indigo-600">Wie eröffne ich ein Konto?</summary>
                                <p className="text-black mt-2">Um ein Konto zu eröffnen, klicken Sie auf den Anmelde-Button oben und folgen Sie den Anweisungen.</p>
                            </details>
                            <details className="mb-4">
                                <summary className="cursor-pointer text-lg text-indigo-600">Welche Gebühren fallen an?</summary>
                                <p className="text-black mt-2">Unsere Gebührenstruktur finden Sie auf unserer Gebührenseite. Wir berechnen faire und transparente Gebühren.</p>
                            </details>
                            <details>
                                <summary className="cursor-pointer text-lg text-indigo-600">Wie kann ich den Kundendienst erreichen?</summary>
                                <p className="text-black mt-2">Unser Kundendienst ist rund um die Uhr per Email und Telefon für Sie erreichbar.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-6 px-8 bg-gray-200 text-center">
                <p className="text-gray-600">© 2024 Basti Bank. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
