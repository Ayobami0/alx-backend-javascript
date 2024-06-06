const Util = {
  calculateNumber: (type, a, b) => {
    let res;
    switch (type) {
      case 'SUM':
        res = Math.round(a) + Math.round(b);
       break;
      case 'SUBTRACT':
        res = Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        if (Math.round(b) === 0) {
          res = 'Error';
          break;
        }
        res = Math.round(a) / Math.round(b);
        break;
      default:
        break;
    }
    return res;
  }
}

module.exports = Util;
