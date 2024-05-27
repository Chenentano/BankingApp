import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import ProtectedRoute from "../components/ProtectedRoute.tsx";
import NavBar from "../components/NavBar.tsx";

const TransferForm: React.FC = () => {
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        amount: '',
        message: '',
    });

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        const bankAccountNumber = localStorage.getItem('bankAccountNumber');
        setFormData(prevState => ({ ...prevState, sender: bankAccountNumber || '' }));
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const senderAccountNumber = formData.sender;
        const receiverAccountNumber = formData.recipient;
        const amount = parseFloat(formData.amount);
        const amountFee = amount * 0.15;

        try {
            await axios.post('/api/bankAccount/transfer', {
                senderAccountNumber,
                receiverAccountNumber,
                amount,
                msg: formData.message,
                transactionId: uuidv4(),
            });

            setFormData({
                sender: senderAccountNumber,
                recipient: '',
                amount: '',
                message: '',
            });

            setMessage("Überweisung an " + receiverAccountNumber + " erfolgreich. Summe: " + amount + "€."
                + " Transaktionsgebühr: " + amountFee + "€."
            );
            setMessageType('success');

        } catch (error : unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    setMessage(`Überweisung fehlgeschlagen: ${error.response.data}`);
                } else if (error.request) {
                    setMessage('Transfer fehlgeschlagen.');
                } else {
                    setMessage(`Transfer failed: ${error.message}`);
                }
                setMessageType('error');
            }
        }
    };



    return (
        <ProtectedRoute>
            <NavBar/>
            <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Überweisung</h2>
                {message && <div className={`text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sender-Nummer</label>
                        <input
                            type="text"
                            name="sender"
                            value={formData.sender}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Sender Name"
                            required
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Empfänger-Nummer</label>
                        <input
                            type="text"
                            name="recipient"
                            value={formData.recipient}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Empfänger Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Betrag</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Betrag"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Nachricht (optional)"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-indigo-600 text-white font-medium text-lg rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                    >
                        Überweisen
                    </button>
                </form>
            </div>
        </ProtectedRoute>
    );
};

export default TransferForm;