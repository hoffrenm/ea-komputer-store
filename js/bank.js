let balance = 0
let loan = 0

const getBalance = () => balance
const getLoan = () => loan

const withdraw = amount => {
  balance -= amount
}

/*
  Adds money to bank balance and makes deduction
  from outstanding loan if one exists.
*/
const deposit = amount => {
  if (loan > 0) {
    balance += loanDeduction(amount)
  } else {
    balance += amount
  }
}

/*
  Deducts loan by 10% of given amount and returns
  90% plus any surplus when leftover loan amount was less than deduction.
*/
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

/*
  Pays loan with full amount. Any suprlus will be
  transferred to the balance.
*/
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
