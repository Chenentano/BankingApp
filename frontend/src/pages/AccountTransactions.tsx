import { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import NavBar from "../components/NavBar.tsx";
import { motion } from 'framer-motion';

interface Transaction {
    transactionId: string;
    msg: string;
    amount: number;
    senderAccountNumber: string;
    receiverAccountNumber: string;
}

const AccountTransactionPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [balance, setBalance] = useState(0);
    const balanceClass = balance < 0 ? 'text-red-500' : 'text-green-500';
    const balanceSign = balance < 0 ? '-' : '';
    const currentAccountNumber = localStorage.getItem('bankAccountNumber');

    useEffect(() => {
        const accountId = localStorage.getItem('accountId');
        axios.get(`/api/bankAccount/getById/${accountId}`)
            .then(response => {
                setTransactions(response.data.transferRequests);
                setBalance(parseFloat(Number(response.data.balance).toFixed(2)))
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <ProtectedRoute>
            <NavBar/>
            <motion.div className="container mx-auto mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <motion.h1 className="text-3xl font-semibold mb-4"
                           initial={{ y: -50, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.5 }}
                >
                    Umsätze
                </motion.h1>
                <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                >
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaktions-ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaktionsdetails</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Von Konto</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Zu Konto
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Betrag
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map(transaction => (
                            <tr key={transaction.transactionId}>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.transactionId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.msg}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.senderAccountNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.receiverAccountNumber}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-right ${transaction.senderAccountNumber === currentAccountNumber ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}`}>
                                    {(transaction.senderAccountNumber === currentAccountNumber ? '-' : '') + Math.abs(transaction.amount).toFixed(2)} €
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </motion.div>
                <motion.div className="bg-white shadow-lg rounded-lg p-4"
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                >
                    <p className="text-gray-600 text-right">Das aktuelle Guthaben beträgt: <br/><span
                        className={`font-bold ${balanceClass}`}>
                        {balanceSign}{Math.abs(balance).toFixed(2)} €</span></p>
                </motion.div>
            </motion.div>
        </ProtectedRoute>
    );
};

export default AccountTransactionPage;