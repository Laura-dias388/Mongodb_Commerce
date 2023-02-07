db.produtos.updateOne({
  nome: { $regex: /Mac/i },
}, {
  $currentDate: {
    ultimaModificacao: true,
  },
});

db.produtos.find({ 
  ultimaModificacao: { $exists: true } },
   { _id: 0, nome: 1,
});
