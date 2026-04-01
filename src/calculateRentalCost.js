/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const priceDays = 40;
  let sum = days * priceDays;

  if (days >= 7) {
    sum -= 50;
  } else if (days >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
