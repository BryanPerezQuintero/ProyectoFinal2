import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Acerca() {
    return (
        <View style={styles.container}>
            <Text>Creador de la aplicación: Bryan Jair Pérez Quintero
                Materia: Desarrollo de aplicaciones móviles. 2023
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});