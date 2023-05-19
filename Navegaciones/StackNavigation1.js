import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Pantallas/Inicio';
import MostrarCarro from '../Pantallas/MostrarCarro';
import ListaCarro from '../Pantallas/ListaCarros';

const Stack = createStackNavigator();

export default function StackNavigation1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio}
                options={{ headerShown: false, headerTitle: 'Inicio' }}
            />

            <Stack.Screen name="Mostrar Carro" component={MostrarCarro}
                options={({ route }) => ({ title: route.params.nombre })}
            />

            <Stack.Screen name="Lista de Carro" component={ListaCarro}
                options={{
                    headerStyle: {
                        backgroundColor: 'yellow',
                        borderBottomColor: 'green',
                        borderBottomWidth: 3
                    },
                    headerTitleStyle: {
                        color: 'green',
                        textAlign: 'center'
                    }

                }}
            />

        </Stack.Navigator>

    )
}