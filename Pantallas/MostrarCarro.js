import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from '../Firebase'

const MostrarCarro = ({ carroId }) => {
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
      <Text>Hola</Text>
      <Text>{carroId}</Text>
      <Text>{Carro.Altura} M</Text>
      <Text>{Carro.Ancho} M</Text>
      <Text>{Carro.Colores}</Text>
      <Text>{Carro.Longitud} M</Text>
      <Text>{Carro.Marca}</Text>
      <Text>{Carro.Peso} KG</Text>
    </View>
  );
};

export default MostrarCarro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
