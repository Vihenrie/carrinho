import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import logo from '../../../../assets/logo.png'

type Props = {
  nome: string
  nomefazenda: string
  descricao: string
  preco: string
}

export default function Detalhe({nome, nomefazenda, descricao, preco}: Props) {
  return (
    <>
      <Text style={estilos.nome}>{nome}</Text>

      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={logo}></Image>
        <Text style={estilos.nomeFazenda}>{nomefazenda}</Text>
      </View>

      <Text style={estilos.descricao}>{descricao}</Text>
      <Text style={estilos.preco}>{preco}</Text>
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
