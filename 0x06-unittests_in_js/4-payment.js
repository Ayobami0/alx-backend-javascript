const Util = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Util.calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The total is: ${total}`)
}

module.exports = sendPaymentRequestToApi;
