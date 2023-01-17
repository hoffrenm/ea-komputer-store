let balance = 0
const salary = 100

const getBalance = () => balance
const goToWork = () => balance += salary

const withdraw = () => {
  const temp = balance
  balance = 0;
  return temp
}

const work = {
  getBalance,
  goToWork,
  withdraw,
}

export default work
