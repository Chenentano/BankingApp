import React from 'react';
import { motion } from 'framer-motion';
import Welcome_Background from "../assets/Welcome_Page_Background.jpg";
import Mitarbeiter from "../assets/Mitarbeiter.jpg";
import LandingNavBar from "../components/LandingNavBar.tsx"

const LandingPage: React.FC = () => {
    return (
        <>
            <LandingNavBar/>
        <div className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <main id="home" className="flex-1 overflow-y-auto">
                <motion.div
                    className="flex flex-col items-center py-40 bg-cover bg-center text-center text-white"
                    style={{backgroundImage: `url(${Welcome_Background})`}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <motion.h2
                        className="text-5xl font-bold mb-8"
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                    >
                        Willkommen bei der Basti Bank!
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        DIE BANK!
                    </motion.p>
                    <motion.div
                        className="animate-bounce"
                        initial={{y: 0}}
                        animate={{y: [0, -20, 0]}}
                        transition={{repeat: Infinity, duration: 1}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </motion.div>
                </motion.div>
                <section id="service" className="bg-gray-100 py-20">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            Unser Service
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {['Account Management', 'Online Banking', 'Sichere Transaktionen'].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.3}}
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{service}</h3>
                                    <p className="text-lg text-black">
                                        {service === 'Account Management' && 'Verwalten Sie Ihre Konten einfach und sicher.'}
                                        {service === 'Online Banking' && 'Führen Sie Transaktionen bequem von zu Hause aus durch.'}
                                        {service === 'Sichere Transaktionen' && 'Ihre Sicherheit hat bei uns oberste Priorität.'}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            Über uns
                        </motion.h2>
                        <motion.p
                            className="text-lg text-black max-w-3xl mx-auto"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.5}}
                        >
                            Bei der Basti Bank setzen wir auf Transparenz und Vertrauen. Seit unserer Gründung im Jahr
                            2020 haben wir uns darauf spezialisiert, unseren Kunden innovative und sichere
                            Finanzdienstleistungen anzubieten. Unser Team besteht aus erfahrenen Fachleuten, die sich
                            für Ihre finanziellen Bedürfnisse einsetzen.
                        </motion.p>
                    </div>
                </section>
                <section id="team" className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            Unser Team
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Array.from({length: 3}, (_, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden transform hover:scale-105"
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: i * 0.3}}
                                >
                                    <div className="h-64 bg-cover bg-center"
                                         style={{backgroundImage: `url(${Mitarbeiter})`}}></div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Mr
                                            Krabs {i + 1}</h3>
                                        <p className="text-lg text-black">Spezialist für Finanzdienstleistungen</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="bg-white py-20">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            Kontakt
                        </motion.h2>
                        <motion.p
                            className="text-lg text-black"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.5}}
                        >
                            Email: info@bastibank.com
                        </motion.p>
                        <motion.p
                            className="text-lg text-black"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.7}}
                        >
                            Telefon: 123-456-7890
                        </motion.p>
                        <motion.p
                            className="text-lg text-black"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.9}}
                        >
                            Adresse: Musterstraße 1, 12345 Musterstadt
                        </motion.p>
                    </div>
                </section>
                <section id="testimonials" className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            Kundenstimmen
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "Basti Bank hat mein Leben verändert. Der Service ist einfach erstklassig.",
                                    name: "Maria Müller"
                                },
                                {
                                    quote: "Ich bin seit Jahren Kunde und wurde nie enttäuscht. Absolut empfehlenswert!",
                                    name: "Peter Schmidt"
                                },
                                {
                                    quote: "Die Sicherheit und Einfachheit des Online Bankings ist unschlagbar.",
                                    name: "Laura Becker"
                                }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300                               transform hover:scale-105"
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.3}}
                                >
                                    <p className="text-lg text-black italic">"{testimonial.quote}"</p>
                                    <h3 className="text-xl font-semibold mt-4 text-indigo-600">- {testimonial.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="faqs" className="py-20 bg-white">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-indigo-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            FAQs
                        </motion.h2>
                        <div className="max-w-3xl mx-auto">
                            {[
                                {
                                    question: "Wie eröffne ich ein Konto?",
                                    answer: "Um ein Konto zu eröffnen, klicken Sie auf den Anmelde-Button oben und folgen Sie den Anweisungen."
                                },
                                {
                                    question: "Welche Gebühren fallen an?",
                                    answer: "Unsere Gebührenstruktur finden Sie auf unserer Gebührenseite. Wir berechnen faire und transparente Gebühren."
                                },
                                {
                                    question: "Wie kann ich den Kundendienst erreichen?",
                                    answer: "Unser Kundendienst ist rund um die Uhr per Email und Telefon für Sie erreichbar."
                                }
                            ].map((faq, index) => (
                                <motion.details
                                    key={index}
                                    className="mb-4"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: index * 0.3}}
                                >
                                    <summary className="cursor-pointer text-lg text-indigo-600">{faq.question}</summary>
                                    <p className="text-black mt-2">{faq.answer}</p>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-6 px-8 bg-gray-200 text-center">
                <motion.p
                    className="text-gray-600"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    © 2024 Basti Bank. Alle Rechte vorbehalten.
                </motion.p>
            </footer>
        </div>

            </>
    );
};

export default LandingPage;