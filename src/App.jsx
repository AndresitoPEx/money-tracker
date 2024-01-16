import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./transactions/TransactionForm"
import TransactionList from "./transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"


const App = () => {
  return (
    <GlobalProvider >
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
          <div className="flex gap-x-10">
            <div >
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col justify-between ">
              <TransactionList />
              <ExpenseChart />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider >
  )
}

export default App
