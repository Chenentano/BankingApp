import ProtectedRoute from "../components/ProtectedRoute.tsx";
import NavBar from "../components/NavBar.tsx";

const transactions = [
    { id: 1, date: '2024-05-15', description: 'Einkauf bei Supermarkt', amount: -25.99 },
    { id: 2, date: '2024-05-14', description: 'Gehaltseingang', amount: 2500.0 },
    { id: 3, date: '2024-05-12', description: 'Restaurantbesuch', amount: -40.0 },
    { id: 4, date: '2024-05-10', description: 'Online-Bestellung', amount: -55.0 },
];

const balance = 3500.0;

const UmsatzPage = () => {

    return (
<ProtectedRoute>
    <NavBar/>
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Umsätze</h1>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Betrag</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">{transaction.amount.toFixed(2)} €</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Aktuelles Guthaben</h2>
                <p className="text-gray-600">Das aktuelle Guthaben beträgt: <span className="font-bold">{balance.toFixed(2)} €</span></p>
            </div>
        </div>
</ProtectedRoute>
    );
};

export default UmsatzPage;
