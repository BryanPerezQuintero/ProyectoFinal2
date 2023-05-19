import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Inicio from './StackNavigation1';
import Configuración from '../Pantallas/Configuración';
import Acerca from '../Pantallas/Acerca';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle:{
                    backgroundColor:'#ffff',
                    width:'80%'
                },
                drawerActiveTintColor:"#ff6600",
                drawerInactiveTintColor:"#060606"
            }}
            drawerContent={(props)=>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                    <View style={{flexDirection:'row', marginLeft: 20, marginTop:15}}>
                        <Ionicons name='md-exit' size={25} color={'#060606'}/>
                        <Text style={{marginLeft:30}} onPress={()=>alert("Cerrando sesión")}>Cerrar sesión</Text>
                    </View>
                </DrawerContentScrollView>
            }
        
        >
            <Drawer.Screen
                name="Home"
                component={Inicio}
                options={{
                    headerShown:false,
                    drawerLabel:"Inicio",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="Configuración"
                component={Configuración}
                options={{
                    headerShown:false,
                    drawerLabel:"Configuración",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={10} color={color}/>
                    )
                }}
            />

            <Drawer.Screen
                name="About"
                component={Acerca}
                options={{
                    headerShown:false,
                    drawerLabel:"Acerca de",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}