import { motion } from "framer-motion";
import { useState } from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import NavBar from "../components/NavBar.tsx";

function CurrencyConverterForm() {
    const [from, setFrom] = useState('EUR');
    const [to, setTo] = useState('USD');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];

    const handleConvert = async () => {
        const rate = await CurrencyConverter(from, to);
        setConvertedAmount(amount * rate);
    };

    return (
        <>
            <NavBar/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto p-4 max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4">Währungsrechner</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
                        Von
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    >
                        {currencies.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
                        Zu
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    >
                        {currencies.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Summe
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleConvert}
                    >
                        Umrechnen
                    </button>
                </div>
                {convertedAmount > 0 && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Aktueller Kurs</h2>
                        <p className="text-gray-700">{convertedAmount.toFixed(2)} {to}</p>
                    </div>
                )}
            </motion.div>
        </>
    );
}

export default CurrencyConverterForm;