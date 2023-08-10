import React from "react";
import { Image, StyleSheet } from 'react-native';
import topo from "../../../assets/topo.png"

export default function Carrinho() {

    return <Image source={topo} style={estilos.topo}/>
    
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%"
    }
})