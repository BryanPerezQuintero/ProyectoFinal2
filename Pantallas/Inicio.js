import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';

const Inicio = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Inicio', style: { color: '#fff' } }}
            />

            <View style={styles.container2}>
                <Button 
                    title="No" 
                    onPress={()=>navigation.navigate('MostrarCarro',{nombre:'Bryan'})}
                />
            </View>
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
  