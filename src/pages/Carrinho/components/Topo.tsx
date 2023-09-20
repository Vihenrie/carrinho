import React from "react";
import { Image, Text, StyleSheet, Dimensions } from 'react-native'
import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes do Carrinho</Text>
    </>
  );
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width:"100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        fontFamily: "MontserratBold"
    },
})