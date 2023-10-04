import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";
import carrinho from '../../mocks/carrinho';

export default function Carrinho() {
  return <>
      <Topo titulo={carrinho.topo.titulo}/>
      <View style={estilos.carrinho}>
        <Detalhe
        nome={carrinho.detalhes.nome}
        nomefazenda={carrinho.detalhes.nomeFazenda}
        descricao={carrinho.detalhes.descricao}
        preco={carrinho.detalhes.preco}
        botao={carrinho.detalhes.botao}
        />
      </View>
    </>
  
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
