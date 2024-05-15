import React, { useState, ChangeEvent, FormEvent } from 'react';
import ProtectedRoute from "./ProtectedRoute.tsx";

const TransferForm: React.FC = () => {
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        amount: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
    };

    return (
        <ProtectedRoute>
        <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Money Transfer</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sender</label>
                    <input
                        type="text"
                        name="sender"
                        value={formData.sender}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Sender Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
                    <input
                        type="text"
                        name="recipient"
                        value={formData.recipient}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Recipient Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Amount"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Message (optional)"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-indigo-600 text-white font-medium text-lg rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                >
                    Transfer
                </button>
            </form>
        </div>
        </ProtectedRoute>
    );
};

export default TransferForm;
