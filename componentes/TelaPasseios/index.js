import React from "react";
import { View, Text,Image } from "react-native";
import passeio1 from "../../assets/passeios/passeio01.png";
import passeio2 from "../../assets/passeios/passeio02.png";
import passeio3 from "../../assets/passeios/passeio03.png";
import estilo from "./estilo";

export default function TelaPasseios() {
  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Passeios em Paraty</Text>
        <Text style = {estilo.descricao}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:</Text>
      
      <View style={estilo.card}>
        <Text style= {estilo.cardTitle}>Tirolesa</Text>
        <Image source={passeio1} style={estilo.imgpasseio}/>
      </View>

      <View style={estilo.card}>
        <Text style= {estilo.cardTitle}>Rafting</Text>
        <Image source={passeio2}style={estilo.imgpasseio}/>
      </View>
      
      <View style={estilo.card}>
        <Text style= {estilo.cardTitle}>Canoagem no mangue</Text>
        <Image source={passeio3}style={estilo.imgpasseio}/>
      </View>       
       

      </View>
    </View>
  );
}