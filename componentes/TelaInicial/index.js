import React from 'react';
import { Text, View, Image, Button } from 'react-native';

import Capa from '../../assets/01.png';
import  estilos from './estilos';

export default function TelaInicial(props) {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
      <Text style={estilos.titulo}>Paraty</Text>
      <Text style={estilos.descricao}>Saiba o que visitar em paraty.</Text>

        <Image source={Capa} style={estilos.imgCapa} />

      <View style={estilos.boxBotao}>
        <Button
          title="Ver Restaurantes"
          onPress={() => props.navigation.navigate("Restaurantes")}
          color="#fff"
        />
      </View>

      <View style={estilos.boxBotao}>
        <Button
          title="Ver Passeios"
          onPress={() => props.navigation.navigate("Passeios")}
          color="#fff"
        />
      </View>

      <View style={estilos.boxBotao}>
        <Button
          title="Ver Hospedagem"
          onPress={() => props.navigation.navigate("Hospedagem")}
          color="#fff"          
        />
      </View>
    </View>


    </View>
  );
}