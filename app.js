import work from './js/work.js'
import bank from './js/bank.js'
import laptop from './js/laptops.js'
import { renderValueAsCurrency } from './js/utils.js'

const earn = () => {
  work.goToWork()
  updateEarnings()
}

const depositEarnings = () => {
  const earnings = work.withdraw()
  bank.deposit(earnings)
  updateEarnings()
  updateBalance()
  updateLoan()
}

const getLoan = () => {
  const amount = Number(window.prompt("Enter loan amount"))

  if (isNaN(amount)) return

  if (amount < 0 || amount > 2 * bank.getBalance()) return window.alert("Loan must be positive and maximum 2 times your bank balance")

  bank.loanMoney(amount)
  updateLoan()
  updateBalance()
}

const payLoan = () => {
  bank.payLoan(work.withdraw())
  updateEarnings()
  updateBalance()
  updateLoan()
}

const buyLaptop = () => {
  const price = laptop.getSelectedLaptopPrice()

  if (price > bank.getBalance()) return window.alert("You cannot afford this laptop")

  bank.withdraw(price)
  updateBalance()
  window.alert("Congratulations on your purchase")
}

const updateEarnings = () => renderValueAsCurrency(payBalanceElement, work.getBalance())

const updateBalance = () => renderValueAsCurrency(bankBalanceElement, bank.getBalance())

const updateLoan = () => {
  renderValueAsCurrency(loanBalanceElement, bank.getLoan())

  if (bank.getLoan() > 0) {
    getLoanButton.style.visibility = 'hidden'
    loanBalanceWrapper.style.visibility = 'visible'
    payLoanButton.style.visibility = 'visible'
  } else {
    getLoanButton.style.visibility = 'visible'
    loanBalanceWrapper.style.visibility = 'hidden'
    payLoanButton.style.visibility = 'hidden'
  }
}

const payBalanceElement = document.getElementById("payBalance")
const bankBalanceElement = document.getElementById("bankBalance")
const loanBalanceElement = document.getElementById("loanBalance")
const loanBalanceWrapper = document.getElementById("loanBalanceWrapper")

const workButton = document.getElementById("workButton")
const bankButton = document.getElementById("bankButton")
const payLoanButton = document.getElementById("payLoanButton")
const getLoanButton = document.getElementById("getLoanButton")
const buyLaptopButton = document.getElementById("buyButton")

workButton.addEventListener('click', earn)
bankButton.addEventListener('click', depositEarnings)
getLoanButton.addEventListener('click', getLoan)
payLoanButton.addEventListener('click', payLoan)
buyLaptopButton.addEventListener('click', buyLaptop)
