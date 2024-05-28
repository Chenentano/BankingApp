import React from 'react';
import { motion } from 'framer-motion';
import LandingNavBar from "../components/LandingNavBar.tsx";
import LandingPageVideoSection from "../components/LandingPageVideoSection.tsx";
import Mitarbeiter from "../assets/Mitarbeiter.jpg";

const LandingPage: React.FC = () => {
    return (
        <>
            <LandingNavBar />
            <div className="min-h-screen flex flex-col ">
                <main id="home" className="flex-1 overflow-y-auto">
                    <LandingPageVideoSection/>
                    <section id="service" className="py-20 bg-white text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Unser Service
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[
                                    { title: 'Kontoverwaltung', description: 'Verwalten Sie Ihre Konten einfach und sicher.' },
                                    { title: 'Online Banking', description: 'Führen Sie Transaktionen bequem von zu Hause aus durch.' },
                                    { title: 'Sichere Transaktionen', description: 'Ihre Sicherheit hat bei uns oberste Priorität.' },
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 * index }}
                                    >
                                        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{service.title}</h3>
                                        <p className="text-lg text-gray-700">{service.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className="py-20 bg-gray-100 text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Über uns
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-700 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Seit unserer Gründung im Jahr 2020 haben wir uns darauf spezialisiert, unseren Kunden innovative und sichere Finanzdienstleistungen anzubieten. Unser Team besteht aus erfahrenen Fachleuten, die sich für Ihre finanziellen Bedürfnisse einsetzen.
                            </motion.p>
                        </div>
                    </section>

                    <section id="team" className="py-20 bg-white text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Unser Team
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {Array.from({ length: 3 }, (_, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                                        initial={{opacity: 0, y: 50}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1, delay: 0.3 * i}}
                                    >
                                        <div
                                            className="h-64 bg-cover bg-center"
                                            style={{backgroundImage: `url(${Mitarbeiter})`}}
                                        ></div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Mitarbeiter {i + 1}</h3>
                                            <p className="text-lg text-gray-700">Spezialist für
                                                Finanzdienstleistungen</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="py-20 bg-gray-100 text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Kontakt
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-700"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Email: info@bastibank.com
                            </motion.p>
                            <motion.p
                                className="text-lg text-gray-700"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                Telefon: 123-456-7890
                            </motion.p>
                            <motion.p
                                className="text-lg text-gray-700"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                Adresse: Musterstraße 1, 12345 Musterstadt
                            </motion.p>
                        </div>
                    </section>

                    <section id="testimonials" className="py-20 bg-white text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
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
                                        className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y:                                        0 }}
                                        transition={{ duration: 1, delay: 0.3 * index }}
                                    >
                                        <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                                        <h3 className="text-xl font-semibold mt-4 text-indigo-600">- {testimonial.name}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="faqs" className="py-20 bg-gray-100 text-center">
                        <div className="container mx-auto">
                            <motion.h2
                                className="text-4xl font-bold mb-12 text-indigo-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
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
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 * index }}
                                    >
                                        <summary className="cursor-pointer text-lg text-indigo-600">{faq.question}</summary>
                                        <p className="text-gray-700 mt-2">{faq.answer}</p>
                                    </motion.details>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="py-6 px-8 bg-gray-200 text-center">
                    <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        © 2024 Basti Bank. Alle Rechte vorbehalten.
                    </motion.p>
                </footer>
            </div>
        </>
    );
};

export default LandingPage;
