import React from 'react';
import{View ,Text,Image} from 'react-native';
import hotel1 from '../../assets/hospedagens/hospedagem01.png';
import hotel2 from '../../assets/hospedagens/hospedagem02.png';
import hotel3 from '../../assets/hospedagens/hospedagem03.png';


import estilo from './estilo';

export default function TelaHospedagem() {
    return (
        <View style={estilo.container}>
            <View>
            <Text style= {estilo.titulo}>Pousadas e Hotéis em Paraty</Text>
            <Text style ={estilo.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
            <View style={estilo.card}>
                <Image source={hotel1} style={estilo.Imagemhotel}/>
                <Text style={estilo.cardtitulo}> Pousada Missanga</Text>
                <Text>Valor médio: R$ 350,00</Text>
                <Text>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>
           
            <View style={estilo.card}>
                <Image source={hotel2} style={estilo.Imagemhotel}/>
                <Text style={estilo.cardtitulo}> Pousada Morro do Forte</Text>
                <Text>Valor médio: R$ 450,00</Text>
                <Text>Localização: Próximo à Praia - Pontal</Text>
            </View>

            <View style={estilo.card}>
                <Image source={hotel3} style={estilo.Imagemhotel}/>
                <Text style={estilo.cardtitulo}> Pousada Porto Imperial</Text>
                <Text>Valor médio: R$ 550,00</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>

            </View>
           

        </View>
    );
}


