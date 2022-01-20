const {
  getDatabase,
  ref,
  child,
  get,
  update,
  push,
} = require('firebase/database');
const { v4: uuid } = require('uuid');
const app = require('../data/firebase');

module.exports.getFinance = () => {
  const dbRef = ref(getDatabase());
  const data = get(child(dbRef, 'finance'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return { mensagem: 'Sem dados para exibir!' };
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

module.exports.addFinance = (params) => {
  const dbRef = getDatabase();
  const updates = {};

  const data = {
    id: uuid(),
    nome: params.nome,
    valor: params.valor,
    tipo: params.tipo,
  };

  const newFinance = push(child(ref(dbRef), 'finance')).key;

  updates['/finance/' + newFinance] = data;

  return update(ref(dbRef), updates)
    .then(() => {
      return { mensagem: 'Cadastro realizado.' };
    })
    .catch((error) => {
      return {
        mensagem:
          'Erro ao cadastrar. Tente novamente ou catacte o administrador.',
      };
    });
};
