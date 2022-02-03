class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [["credit", this.balance]];
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("cannot be negative");
    } else {
      this.balance += amount;
      this.transactionHistory.push(["credit", amount]);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("not enough money in your account");
    } else {
      this.transactionHistory.push(["debit", amount * -1]);
      return (this.balance -= amount);
    }
  }
}
module.exports = BankAccount;
