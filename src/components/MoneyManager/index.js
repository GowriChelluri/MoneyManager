import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',

    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId, transactionsList} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      title,
      amount: parseInt(amount),
      type: displayText,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onDelete = id => {
    const {transactionsList} = this.state
    const filteredData = transactionsList.filter(eachItem => eachItem.id !== id)
    this.setState({transactionsList: filteredData})
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      } else {
        incomeAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {transactionsList, title, amount} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1>Hi Richard!!</h1>
          <p>Welcome back to your MoneyManager</p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="add-transaction-history-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form onSubmit={this.onAddTransaction}>
              <div className="input-container">
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  onChange={this.onChangeTitle}
                  value={title}
                  className="input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="text"
                  onChange={this.onChangeAmount}
                  value={amount}
                  className="input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select onChange={this.onChangeType} className="input">
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="table-container">
              <div className="table-heading-container">
                <p className="table-heading">Title</p>
                <p className="table-heading">Amount</p>
                <p className="table-heading">Type</p>
              </div>
              <hr />
              <ul className="list-container">
                {transactionsList.map(eachItem => (
                  <TransactionItem
                    transactionDetails={eachItem}
                    key={eachItem.id}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
