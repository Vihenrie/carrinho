import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import logo from '../../../../assets/logo.png'

export default function Detalhe() {
  return (
    <>
      <Text style={estilos.nome}>Carrinho de compras</Text>

      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={logo}></Image>
        <Text style={estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
      </View>

      <Text style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para a sua cozinha.
      </Text>
      <Text style={estilos.preco}>R$40,00</Text>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontFamily: "MontserratItalic",
  },
  preco: {
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
    marginTop: 8,
  },
});
