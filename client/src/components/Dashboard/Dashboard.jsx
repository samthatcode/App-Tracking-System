import { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div className={`bg-gray-100`}>
            <InnerLayout>
                <div className={`max-w-7xl mx-auto py-6 sm:px-6 lg:px-8`}>
                    <h1 className={`text-3xl font-bold mb-8`}>All Transactions</h1>
                    <div className={`grid grid-cols-5 gap-8`}>
                        <div className={`col-span-3`}>
                            <Chart />
                            <div className={`grid grid-cols-4 gap-8 mt-8`}>
                                <div className={`bg-white border border-gray-200 p-6 rounded-lg`}>
                                    <h2 className={`text-xl font-bold mb-4`}>Total Income</h2>
                                    <p className={`text-4xl font-bold`}>{dollar}  {totalIncome()}</p>
                                </div>
                                <div className={`bg-white border border-gray-200 p-6 rounded-lg`}>
                                    <h2 className={`text-xl font-bold mb-4`}>Total Expense</h2>
                                    <p className={`text-4xl font-bold`}>{dollar}  {totalExpenses()}</p>
                                </div>
                                <div className={`bg-white border border-gray-200 p-6 rounded-lg col-span-2 flex flex-col justify-center items-center`}>
                                    <h2 className={`text-xl font-bold mb-4`}>Total Balance</h2>
                                    <p className={`text-4xl font-bold text-green-600 opacity-60`}>{dollar}  {totalBalance()}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-span-2`}>
                            <History />
                            <div className={`mt-8`}>
                                <h2 className={`text-lg font-bold mb-2`}>Min Salary / Max Salary</h2>
                                <div className={`flex justify-between bg-white border border-gray-200 p-6 rounded-lg mb-4`}>
                                    <p className={`font-semibold text-lg`}>${Math.min(...incomes.map(item => item.amount))}</p>
                                    <p className={`font-semibold text-lg`}>${Math.max(...incomes.map(item => item.amount))}</p>
                                </div>
                                <h2 className={`text-lg font-bold mb-2`}>Min Expense / Max Expense</h2>
                                <div className={`flex justify-between bg-white border border-gray-200 p-6 rounded-lg`}>
                                    <p className={`font-semibold text-lg`}>${Math.min(...expenses.map(item => item.amount))}</p>
                                    <p className={`font-semibold text-lg`}>${Math.max(...expenses.map(item => item.amount))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </InnerLayout>
    </div>
);
}

export default Dashboard;