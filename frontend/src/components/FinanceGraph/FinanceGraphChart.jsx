import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'JAN',
        income: 40000,
        spend: 24000,
    },
    {
        name: 'FEB',
        income: 60000,
        spend: 40000,
    },
    {
        name: 'MAR',
        income: 30000,
        spend: 20000,
    },
    {
        name: 'APR',
        income: 55000,
        spend: 35000,
    },
    {
        name: 'MAY',
        income: 70000,
        spend: 30000,
    },
    {
        name: 'JUNE',
        income: 80000,
        spend: 45000,
    },
    {
        name: 'JULY',
        income: 20000,
        spend: 10000,
    },
    {
        name: 'AUG',
        income: 20000,
        spend: 10000,
    },
    {
        name: 'SEPT',
        income: 20000,
        spend: 10000,
    },
    {
        name: 'OCT',
        income: 20000,
        spend: 10000,
    },
    {
        name: 'NOV',
        income: 20000,
        spend: 10000,
    },
    {
        name: 'DEC',
        income: 20000,
        spend: 10000,
    },
];
function FinanceGraphChart() {
    return (
        <div className='w-full h-full'>
            {/* Titile */}
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl font-semibold text-gray-800 mb-5'>Finance</h1>
            </div>
            {/* Chart */}
            <ResponsiveContainer minWidth="inherit" minHeight="400px">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={7} />
                    <Line type="monotone" dataKey="spend" stroke="#82ca9d" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default FinanceGraphChart