let BankAccount = require("./bankAccount.js");

test("newly open bank account has 0 balance", () => {
  expect(new BankAccount().balance).toBe(0);
});

test("new bank account can be set with initial balance", () => {
  expect(new BankAccount(100).balance).toBe(100);
});

test("can deposit", () => {
  let account = new BankAccount(0);
  account.deposit(50);
  expect(account.balance).toBe(50);
});

test("cannot deposit negative amount", () => {
  let account = new BankAccount(0);
  expect(() => account.deposit(-50)).toThrowError();
});

test("can withdraw", () => {
  let account = new BankAccount(100);
  account.withdraw(1);
  expect(account.balance).toBe(99);
});

test("cannot withdraw more than balance", () => {
  let account = new BankAccount(100);
  expect(() => {
    account.withdraw(101);
  }).toThrowError();
});

test("transaction history includes opening amount", () => {
  let account = new BankAccount(10);
  account.deposit(40);
  account.withdraw(30);
  account.deposit(50);
  console.log(account.transactionHistory);
  expect(account.transactionHistory).toEqual([
    ["credit", 10],
    ["credit", 40],
    ["debit", -30],
    ["credit", 50],
  ]);
});
