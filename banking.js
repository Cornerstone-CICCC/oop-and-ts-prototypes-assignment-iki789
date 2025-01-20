function Account(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
  } else {
    console.log("Deposit amount must be positive.");
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
  } else {
    console.log("Insufficient balance or invalid amount.");
  }
};

function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.addInterest = function () {
  const interest = this.balance * (this.interestRate / 100);
  this.balance += interest;
};

function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
  } else {
    console.log("Insufficient balance or invalid amount for check withdrawal.");
  }
};

// Savings account
const savingsAccount = new SavingsAccount("123", 1000, 5);
console.log("Savings Account Created!");

savingsAccount.deposit(500);
console.log(`Deposited $500. New balance is ${savingsAccount.balance}`);

savingsAccount.addInterest();
console.log(
  `Added interest of $${savingsAccount.interest}. New balance: $${savingsAccount.balance}`
);

savingsAccount.withdraw(300);
console.log(`Withdrew $300. New balance: $${savingsAccount.balance}`);

// Checking account
const checkingAccount = new CheckingAccount("456", 500);
console.log("Checking Account Created!");

checkingAccount.deposit(200);
console.log(`Deposited $200. New balance is ${checkingAccount.balance}`);

checkingAccount.withdrawUsingCheck(100);
console.log(
  `Withdrew $100 using a check. New balance: $${checkingAccount.balance}`
);
