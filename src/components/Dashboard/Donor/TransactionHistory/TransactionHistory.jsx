

const transactions = [
    {
        id: 1,
        name: "John Doe",
        amount: 150,
        date: "April 4, 2025",
        status: "Success"
    },
    {
        id: 2,
        name: "Jane Smith",
        amount: 250,
        date: "April 2, 2025",
        status: "Pending"
    },
    {
        id: 3,
        name: "Mike Johnson",
        amount: 100,
        date: "March 28, 2025",
        status: "Failed"
    }
];

const statusColor = {
    Success: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Failed: "text-red-600 bg-red-100"
};

const TransactionHistory = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Transaction History</h2>

                <div className="space-y-4">
                    {transactions.map(txn => (
                        <div
                            key={txn.id}
                            className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-shadow"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{txn.name}</h3>
                                <p className="text-sm text-gray-500">{txn.date}</p>
                            </div>

                            <div className="text-center">
                                <p className="text-xl font-bold text-blue-600">${txn.amount}</p>
                                <span
                                    className={`mt-1 inline-block text-xs px-3 py-1 rounded-full font-medium ${statusColor[txn.status]}`}
                                >
                                    {txn.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
