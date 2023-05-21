import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Inicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bienvenido a la aplicación de carros</Text>
            <Button
                title='Lista'
                onPress={() => navigation.navigate('Lista Carros')} />
            <Button
                title='Mostar'
                onPress={() => navigation.navigate('Mostrar Carro')} />
            <Button
                title='Crear'
                onPress={() => navigation.navigate('Crear Carro')} />
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
