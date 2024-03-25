import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
      />
    </li>
  )
}
export default TransactionItem
