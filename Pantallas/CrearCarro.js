import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from '../Firebase';

const CrearCarro = (props) => {
    const estadoinicial = {
        Altura: '',
        Ancho: '',
        Colores: '',
        Longitud: '',
        Marca: '',
        Peso: '',
    };

    const [Lista, setLista] = useState(estadoinicial);

    const handleTexto=(value, Marca) => {
        setLista({ ...Lista, [Marca]: value });
    };

    const Guardar = async () => {
        if (Lista.Altura!=="") {
            await firebase.db.collection("Carros").add({
                Altura: Lista.Altura,
                Ancho: Lista.Ancho,
                Colores: Lista.Colores,
                Longitud: Lista.Longitud,
                Marca: Lista.Marca,
                Peso: Lista.Peso,
            });
        } else {
            
        }
        alert("Se guardó el carro correctamente")
        props.navigation.navigate("Inicio");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Altura" onchanceText={(value) => handleTexto => ('Altura', value)} value={Lista.Altura} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ancho" onchanceText={(value) => handleTexto => ('Ancho', value)} value={Lista.Ancho}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Color" onchanceText={(value) => handleTexto => ('Colores', value)} value={Lista.Colores} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Longitud" onchanceText={(value) => handleTexto => ('Longitud', value)} value={Lista.Longitud}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Marca" onchanceText={(value) => handleTexto => ('Marca', value)} value={Lista.Marca}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Peso" onchanceText={(value) => handleTexto => ('Peso', value)} value={Lista.Peso}/>
            </View>
            <View>
                <Button title='Guardar carro' onPress={() => Guardar()} />
            </View>
        </ScrollView>
    )
}
export default CrearCarro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottonWidth: 1,
        borderBottomColor: '#cccccc'
    }
})