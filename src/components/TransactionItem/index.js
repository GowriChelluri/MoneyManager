import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteTransaction = () => {
    onDelete(id)
  }

  return (
    <div>
      <div>
        <li>
          <p className="table-values">{title}</p>
          <p className="table-values">{amount}</p>
          <p className="table-values">{type}</p>
          <button
            type="button"
            onClick={onDeleteTransaction}
            className="delete-btn"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </li>
      </div>
      <hr className="line" />
    </div>
  )
}
export default TransactionItem
