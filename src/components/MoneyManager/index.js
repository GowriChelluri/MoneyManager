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
      amount,
      type: displayText,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: 0,
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
    this.setState({type: event.target.value})
  }

  render() {
    const {transactionsList, title, amount} = this.state
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1>Hi Richard!!</h1>
          <p>Welcome back to your MoneyManager</p>
        </div>
        <MoneyDetails />
        <div className="add-transaction-history-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form onSubmit={this.onAddTransaction}>
              <div className="input-container">
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  type="text"
                  onChange={this.onChangeTitle}
                  value={title}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount">AMOUNT</label>
                <input
                  id="amount"
                  type="text"
                  onChange={this.onChangeAmount}
                  value={amount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="type">TYPE</label>
                <select onChange={this.onChangeType}>
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
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="table-container">
              <div className="table-heading-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>

              {transactionsList.map(eachItem => (
                <TransactionItem
                  transactionDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
