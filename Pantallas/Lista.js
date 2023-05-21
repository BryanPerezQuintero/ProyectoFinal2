import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import firebase from '../Firebase'
import { ListItem } from 'react-native-elements'

const Lista = (props) => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    firebase.db.collection("Carros").onSnapshot((querySnapshot) => {
      const Carros = [];
      querySnapshot.docs.forEach((doc) => {
        const { Altura, Ancho, Colores, Longitud, Marca, Peso, Modelo } = doc.data();
        Carros.push({
          id: doc.id,
          Altura: Altura, Ancho: Ancho, Colores: Colores, Longitud: Longitud, Marca: Marca, Peso: Peso, Modelo:Modelo
        });
      });
      setCarros(Carros);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Crear Carro"
        onPress={() => props.navigation.navigate("CrearCarro")} />

      {carros.map(carro => {
        return (
          <ListItem key={carro.id}>
            <ListItem.Content>
              <ListItem.Title>{carro.Marca}</ListItem.Title>
              <ListItem.Title>{carro.Altura}</ListItem.Title>
              <ListItem.Title>{carro.Ancho}</ListItem.Title>
              <ListItem.Title>{carro.Colores}</ListItem.Title>
              <ListItem.Title>{carro.Longitud}</ListItem.Title>
              <ListItem.Title>{carro.Marca}</ListItem.Title>
              <ListItem.Title>{carro.Peso}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default Lista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});