import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from "../../../assets/topo.png"
import logo from "../../../assets/logo.png"

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes do Carrinho</Text>
        <View style={estilos.carrinho}>
            <Text style={estilos.nome}>Carrinho de compras</Text>

            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo}></Image>
                <Text style={estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
            </View>
            
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.</Text>
            <Text style={estilos.preco}>R$40,00</Text>
        </View>
    </> 
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
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        fontFamily: "MontserratBold",
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontserratItalic"
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontserratRegular",
        color: "#2A9F85",
        marginTop: 8
    }
})
