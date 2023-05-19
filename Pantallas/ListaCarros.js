import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MostrarCarro from './MostrarCarro';

const ListaCarros = (navegation) => {
    const [carros, setCarros] = useState([]);
  
    useEffect(() => {
      const carrosRef = firebase.database().ref('carros');
      carrosRef.on('value', (snapshot) => {
        const carrosData = snapshot.val();
        const nuevosCarros = [];
  
        for (let id in carrosData) {
          nuevosCarros.push({ id, ...carrosData[id] });
        }
  
        setCarros(nuevosCarros);
      });
  
      return () => {
        carrosRef.off();
      };
    }, []);
  
    if (carros.length === 0) {
      return (
        <View>
          <Text>No hay carros disponibles</Text>
        </View>
      );
    }
  
    return (
      <View>
        {carros.map((carro) => (
          <Carro key={carro.id} carroId={carro.id} />
        ))}
      </View>
      /*<View style={styles.container}>
            <Text>Another Screen</Text>
            <Button 
                title="Regresar al Carro"
                onPress={()=>navigation.goBack()}
            />
        </View>*/
    );
  };

export default ListaCarro

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});