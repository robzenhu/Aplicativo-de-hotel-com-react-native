import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#e1e3e4',
        padding: 20,        
    },
    card: {
        width: 320,
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
        
        
    },
   
    titulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    discricao: {        
        textAlign: "center",
        marginBottom: 20,        
    },
    imgrestaurante: {
        width: 300,
        height: 80,
        marginBottom: 5,
        
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    
});

export default estilos;
    
    