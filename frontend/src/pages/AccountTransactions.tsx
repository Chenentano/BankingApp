import { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedRoute from "../components/ProtectedRoute";
import NavBar from "../components/NavBar";
import { motion } from 'framer-motion';
import TransactionChart from '../components/TransactionChart';

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
    const [income, setIncome] = useState(0);
    const [outcome, setOutcome] = useState(0);
    const currentAccountNumber = localStorage.getItem('bankAccountNumber');

    useEffect(() => {
        const accountId = localStorage.getItem('accountId');
        axios.get(`/api/bankAccount/getById/${accountId}`)
            .then(response => {
                setTransactions(response.data.transferRequests);
                setBalance(parseFloat(Number(response.data.balance).toFixed(2)));

                let newIncome = 0;
                let newOutcome = 0;
                response.data.transferRequests.forEach((transaction: Transaction) => {
                    if (transaction.senderAccountNumber === currentAccountNumber) {
                        newOutcome += transaction.amount;
                    } else {
                        newIncome += transaction.amount;
                    }
                });
                setIncome(newIncome);
                setOutcome(newOutcome);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [currentAccountNumber]);

    return (
        <ProtectedRoute>
            <div className="flex">
                <NavBar />
                <motion.div className="container mx-auto mt-8 ml-64"
                            initial={{}}
                            animate={{}}
                            transition={{}}
                >
                    <motion.h1 className="text-3xl font-semibold mb-4 text-center"
                               initial={{}}
                               animate={{}}
                               transition={{}}
                    >
                        Umsätze
                    </motion.h1>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-4">Bilanz Grafik</h2>
                            <TransactionChart income={income} outcome={outcome}/>
                        </div>
                    </div>
                    <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
                                initial={{}}
                                animate={{}}
                                transition={{}}
                    >
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaktions-ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaktionsdetails</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Von
                                    Konto
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zu
                                    Konto
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Betrag</th>
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
                    <motion.div className="bg-white shadow-lg rounded-lg p-4 mb-8"
                                initial={{}}
                                animate={{}}
                                transition={{}}
                    >
                        <p className="text-gray-600 text-right">
                            Das aktuelle Guthaben beträgt: <br/>
                            <span className={`font-bold ${balance < 0 ? 'text-red-500' : 'text-green-500'}`}
                                  style={{overflowX: 'auto'}}>
            {balance < 0 ? '-' : ''}{Math.abs(balance).toFixed(2)} €
        </span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </ProtectedRoute>
    );
};

export default AccountTransactionPage;
