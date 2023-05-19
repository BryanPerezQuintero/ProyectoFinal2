import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from './firebase';

const MostrarCarro = ({carroId}) => {
    const [Carro, setCarro] = useState(null);
    useEffect(() => {
        const carroRef = firebase.database().ref(`Carros/${carroId}`);
        carroRef.on('value', (snapshot) => {
          setCarro(snapshot.val());
        });

        return () => {
            carroRef.off();
          };
        }, [carroId]);
      
        if (!Carro) {
          return null;
        }
      
        return (
          <View>
            <Text>{MostrarCarros.Altura} M</Text>
            <Text>{MostrarCarros.Ancho} M</Text>
            <Text>{MostrarCarros.Colores}</Text>
            <Text>{MostrarCarros.Longitud} M</Text>
            <Text>{MostrarCarros.Marca}</Text>
            <Text>{MostrarCarros.carroId}</Text>
            <Text>{MostrarCarros.Peso} KG</Text>
          </View>
        );
      };

export default MostrarCarro

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  