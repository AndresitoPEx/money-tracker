import { useGlobalState } from "../context/GlobalState"


const IncomeExpenses = () => {

    const {transactions} = useGlobalState()
    
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)

    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1

    return (
        <>
            <div >
                <div className="flex justify-between my-2">
                    <h4>Ingresos</h4>
                    <p id="money-plus" className="money plus">S/. {income}</p>
                </div>
                <div className="flex justify-between my-2">
                    <h4>Egresos</h4>
                    <p id="money-minus" className="money minus">S/. {expense}</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses
