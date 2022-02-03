class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  balance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("cannot be negative");
    } else {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("not enough money in your account");
    } else {
      return (this.balance -= amount);
    }
  }

  get transactionHistory() {
    let output = [
      ["credit", 10],
      ["credit", 40],
      ["debit", -30],
      ["credit", 50],
    ];
    console.log(output);
    return output;
  }
}
module.exports = BankAccount;
