const app = require('../src/app');
const porta = normalizaPort(process.env.PORTA || '3000');

function normalizaPort(val) {
  const porta = parseInt(val, 10);
  if (isNaN(porta)) {
    return val;
  }
  if (porta >= 0) {
    return porta;
  }
  return false;
}
app.listen(porta, function () {
  console.log(`App sendo executado na porta ${porta}`);
});
