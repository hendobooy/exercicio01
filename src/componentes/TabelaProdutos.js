import React from "react";

const TabelaProdutos = () => {
  // Dados para a tabela (exemplo)
  const produtos = [
    { id: 1,  nome: "Caneta",       preco: "R$ 2,99" },
    { id: 2,  nome: "Lápis",        preco: "R$ 1,99" },
    { id: 3,  nome: "iPad",         preco: "R$ 5899,99" },
    { id: 4,  nome: "Samsung S20 Ultra", preco: "R$ 6599,99" },
    { id: 5,  nome: "Notebook",     preco: "R$ 3409,99" },
    { id: 6,  nome: "Caderno",      preco: "R$ 19,99" },
    { id: 7,  nome: "Borracha",     preco: "R$ 4,99" },
    { id: 8,  nome: "Impressora",   preco: "R$ 889,99" },
    { id: 9,  nome: "Monitor 27",   preco: "R$ 799,99" },
    { id: 10, nome: "Cadeira",      preco: "R$ 1239,99" },
  ];

  return (
    <table className="tabela-produtos">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.nome}</td>
            <td>{prod.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaProdutos;
