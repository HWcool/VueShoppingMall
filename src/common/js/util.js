function toMoney(val) {
  let newMoney;
  if(!val) {
    return ''
  }
  newMoney = val.toFixed(2);
  return newMoney;
}

export {toMoney}