import { Chart as ChartJs, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

// Register necessary Chart.js components
ChartJs.register(Title, Tooltip, Legend, ArcElement);


function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: 'red',
                tension: 0.2
            }
        ]
    };

    return (
        <div className={`bg-gray-100 border border-white shadow-md p-4 rounded-lg h-full`}>
            <Line data={data} />
        </div>
    );
}

export default Chart;
