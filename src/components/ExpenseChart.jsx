import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'



const ExpenseChart = () => {

    const {transactions} = useGlobalState()

    const totalIncome = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0).toFixed(2)

    console.log(totalIncome);

    const totalExpense = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0).toFixed(2) * -1
    
    console.log(totalExpense);

    const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100).toFixed(2)
    const totalIncomePercentage = (100 - totalExpensePercentage).toFixed(2);
    
    console.log(totalExpensePercentage);
    console.log(totalIncomePercentage);

    return (
        <VictoryPie
            data={[
                { x: 'Gastos', y: totalExpensePercentage },
                { x: 'Ingresos', y: totalIncomePercentage },
            ]}
            colorScale={[
                '#60A5FA',
                '#A78BFA',
            ]}
            labels={({ datum }) => `${datum.x}: % ${datum.y}`}
            labelComponent={<VictoryLabel renderInPortal dy={-20} />}
            style={{
                labels: {
                    fill: 'white',
                    fontSize: 20,
                    fontWeight: 'lighter',
                },
            }}
            animate={{ duration: 2000 }}
        />
    )
}

export default ExpenseChart
