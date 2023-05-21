import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Acerca from '../Pantallas/Acerca';
import Configuración from '../Pantallas/Configuración';
import Inicio from '../Pantallas/Inicio';
import Mostrar from '../Pantallas/MostrarCarro';
import Lista from '../Pantallas/Lista';
import CrearCarro from '../Pantallas/CrearCarro';

  const Stack = createStackNavigator();
  
  export default function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Crear Carro" component={CrearCarro} />
        <Stack.Screen name="Lista Carros" component={Lista} />
        <Stack.Screen name="Mostrar Carro" component={Mostrar} />
        <Stack.Screen name="Acerca" component={Acerca} />
        <Stack.Screen name="Configuración" component={Configuración} />
      </Stack.Navigator>
    );
  }
  