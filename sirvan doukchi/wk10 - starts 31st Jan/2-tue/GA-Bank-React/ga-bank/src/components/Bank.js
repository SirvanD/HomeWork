import { useState } from "react";
import "./Bank.css";

export default function Bank() {
  let [balance, setBalance] = useState(0);
  let [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDeposit = () => {
    setBalance(Number(amount) + Number(balance));
  };

  const handleWithdraw = () => {
    if (
      Number(balance) - Number(amount) < 0 ||
      Number(balance) < Number(amount)
    ) {
      setBalance(
        `You can't withdraw $${amount}, due to low balance. Your Balance is : ${balance}`
      );
    } else {
      setBalance(Number(balance) - Number(amount));
    }
  };

  const isDisabled = balance === 0 || amount > balance;
  return (
    <div className="container">
      <h4 htmlFor="">GA Bank of Australia</h4>
      <span className="display-wrapper">
        <label>AU$ </label>
        <span type="string">{balance}</span>
      </span>

      <section className="input-wrapper">
        <label>Enter Amount </label>
        <input type="number" onChange={handleAmountChange} value={amount} />
      </section>

      <span className="buttons">
        <button onClick={handleDeposit} variant="contained">
          Deposit
        </button>
        <button
          onClick={handleWithdraw}
          disabled={isDisabled}
          variant="contained"
        >
          Withdraw
        </button>
      </span>
    </div>
  );
}
