import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavBar from "../components/NavBar.tsx";

const LastschriftPage = () => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState<Date>(new Date());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Lastschrift abgeschickt:', { recipient, amount, date });
    };

    return (
        <>
        <NavBar/>
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Terminüberweisung</h1>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Betrag</label>
                        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Datum</label>
                        <DatePicker
                            selected={date}
                            onChange={(date: Date) => setDate(date)}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">Lastschrift absenden</button>
                </form>
            </div>
        </div>
            </>
    );
};

export default LastschriftPage;
