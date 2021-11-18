import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import TelaInicial  from "./componentes/TelaInicial/";
import Hospedagem from './componentes/TelaHospedagem/';
import Restaurantes from './componentes/TelaRestaurantes/';
import Passeios from './componentes/TelaPasseios/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>    
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Hospedagem" component={Hospedagem} />
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Passeios" component={Passeios} />
        
      </Stack.Navigator>
    
    </NavigationContainer>
  )
};
