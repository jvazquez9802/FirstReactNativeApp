import React from 'react';
import { Button, Text, View, Alert, Image } from 'react-native';

const styles = {
  mainTitle:{
    fontSize:20,
    fontWeigt:'bold'
  },
  logoImage: {
    width: 240,
    height: 240,
    resizeMode: 'center'
  },
  ctaButton: {
    backgroundColor: '#194350',
    color: '#9dbeb9',
    borderRadius: 50
  },
  txtnombre: {
    color: '#7b113a'
  }
}

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
        <Image style={styles.logoImage} source={require('./assets/itcolima.jpg')}></Image>
        <Text>Ingeniería en informática</Text>
        <Text>17460654</Text>
        <Text style={styles.txtnombre}>Juan Luis Vázquez Hernández</Text>
        <Text>Marzo-Junio 2021</Text>
      </View>
      <Button style={styles.ctaButton} title="Ingresar" onPress={() => {Alert.alert("No me estés picoteando")}}/>
    </View>
  );
}
