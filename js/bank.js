let balance = 0
let loan = 0

const getBalance = () => balance
const getLoan = () => loan

const withdraw = amount => {
  balance -= amount
}

const deposit = amount => {
  if (loan > 0) {
    balance += loanDeduction(amount)
  } else {
    balance += amount
  }
}

const loanDeduction = (amount) => {
  const deduction = amount * 0.1
  const toBalance = amount - deduction

  if (loan <= deduction) {
    const surplus = deduction - loan
    loan = 0
    return surplus + toBalance
  } else {
    loan -= deduction
    return toBalance
  }
}

const loanMoney = amount => {
  balance += amount
  loan += amount
}

const payLoan = (amount) => {
  if (loan <= 0) return

  if (amount >= loan) {
    const surplus = amount - loan
    loan = 0
    balance += surplus
  } else {
    loan -= amount
  }
}

const bank = {
  getBalance,
  getLoan,
  deposit,
  withdraw,
  loanMoney,
  payLoan,
}

export default bank
