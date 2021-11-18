import React from "react";
import { View, Text, Image } from "react-native";
import estilos from "./estilos";
import img1 from "../../assets/restaurantes/restaurante01.png";
import img2 from "../../assets/restaurantes/restaurante02.png";
import img3 from "../../assets/restaurantes/restaurante03.png";

export default function TelaRestaurantes() {
  return (
    <View style={estilos.container}>
      <View>
      <Text style={estilos.titulo}> Bares e Restaurantes</Text>
      <Text style={estilos.discricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>
      
      <View style={estilos.card}>
        <Image source={img1} style={estilos.imgrestaurante} />
        <Text style={estilos.cardTitle}>Armazén Mar</Text>
        <Text>Localização: Rod Rio-Santos</Text>
      </View>

      <View style={estilos.card}>
        <Image source={img2} style={estilos.imgrestaurante}/>
        <Text style={estilos.cardTitle}>Bendita's Restaurante</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>

      <View style={estilos.card}>
        <Image source={img3}style={estilos.imgrestaurante} />
        <Text style={estilos.cardTitle}>SEREIA DO MAR PIZZA-BAR</Text>
        <Text>Localização: Praia do Jabaquara</Text>
      </View>

      </View>

    </View>

  );
}