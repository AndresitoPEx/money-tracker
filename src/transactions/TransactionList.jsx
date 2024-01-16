import { useGlobalState } from "../context/GlobalState"
import TransactionItem from "./TransactionItem"

const TransactionList = () => {

    const { transactions } = useGlobalState()

    return (
        <>
            <h3 className="
            text-2xl font-bold text-center 
            ">Historial</h3>
            <ul>
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList
