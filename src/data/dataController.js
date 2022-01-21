const {
  getDatabase,
  ref,
  child,
  get,
  update,
  push,
  onChildRemoved,
  remove
} = require('firebase/database');
const { v4: uuid } = require('uuid');
const { app } = require('../data/firebase');

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
    .catch(() => {
      return {
        mensagem:
          'Erro ao cadastrar. Tente novamente ou catacte o administrador.',
      };
    });
};

module.exports.updateFinance = (params, key) => {
  console.log(params)
  const dbRef = getDatabase(app);
  const updates = {};

  const financeRef = ref(dbRef, `/finance/${key.id}`)
  // const data = {
  //   nome: params.nome,
  //   valor: params.valor,
	// 	tipo: params.tipo
  // };

  // console.log(dbRef);
  // updates['/finance/' + key.id] = params;

  return update(financeRef, params).then(() => {
      return { mensagem: 'Cadastro alterado.' };
    })
    .catch(() => {
      return {
        mensagem:
          'Erro ao alterar cadastro. Tente novamente ou catacte o administrador.',
      };
    });
};

module.exports.removeFinance = (key) => {
  console.log(key.id)
  const dbRef = getDatabase();
  
  return remove(child(ref(dbRef), 'finance/' + key.id))
    .then(() => {
      return { mensagem: 'Cadastro excluido.' };
    })
    .catch(() => {
      return {
        mensagem:
          'Erro ao excluir cadastro. Tente novamente ou catacte o administrador.',
      };
    });
};