import './index.css'

const MoneyDetails = () => (
  <div className="amount-container">
    <div className="money-bg-container balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="icon"
      />
      <div className="rupees-container">
        <p className="type-name">Your Balance</p>
        <p className="rupees">Rs 0</p>
      </div>
    </div>
    <div className="money-bg-container income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="icon"
      />
      <div className="rupees-container">
        <p className="type-name">Your Income</p>
        <p className="rupees">Rs 0</p>
      </div>
    </div>
    <div className="money-bg-container expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="icon"
      />
      <div className="rupees-container">
        <p className="type-name">Your Expenses</p>
        <p className="rupees">Rs 0</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
