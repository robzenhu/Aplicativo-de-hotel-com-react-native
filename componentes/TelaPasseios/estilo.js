import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f4fbc3",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    card: {
        backgroundColor: "#fff",
        width: 320,
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
        borderColor: "#979797",
        borderWidth: 1
     },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",       
        marginBottom: 5
    },
    descricao: {        
        padding: 20,
        textAlign: "center",
    },
    imgpasseio: {
        width: 300,
        height: 80,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center"
    },
});

export default estilo;