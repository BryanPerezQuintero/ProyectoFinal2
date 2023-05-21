import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Configuración from '../Pantallas/Configuración';
import Acerca from '../Pantallas/Acerca';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Inicio from '../Pantallas/Inicio';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Configuración"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: { //labelStyle
                    fontSize: 12
                },
                tabBarStyle: {//style
                    paddingBottom: 5,
                    backgroundColor: "#f3f3f1"
                }

            }}
        >

            <Tab.Screen
                name="Home"
                component={Inicio}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}

            />
            <Tab.Screen
                name="Configuración"
                component={Configuración}
                options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-settings"} size={20} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={Acerca}
                options={{
                    tabBarLabel: "Acerca de",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-help-circle"} size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}