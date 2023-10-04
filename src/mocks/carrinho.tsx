import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const carrinho = {
    topo: {
        titulo: "Detalhes do Carrinho",
    },
    detalhes: {
        nome: "Carrinho de Compras",
        nomeFazenda: "Etec Cidade do Livro",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha.",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Tomate",
          imagem: tomate,
        },
        {
          nome: "Brócolis",
          imagem: brocolis,
        },
        {
          nome: "Batata",
          imagem: batata,
        },
        {
          nome: "Pepino",
          imagem: pepino,
        },
        {
          nome: "Abóbora",
          imagem: abobora,
        }
      ]
    }
  }

export default carrinho;