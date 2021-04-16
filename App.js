import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer as Nc } from '@react-navigation/native';
import { createStackNavigator as Ns } from '@react-navigation/stack';

const styles = {
  mainView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
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

const Stack = Ns();

function main({ navigation }){
  return (
    <View style={{flex:1}}>
      <View style={styles.mainView}>
        <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
        <Image style={styles.logoImage} source={require('./assets/itcolima.jpg')}></Image>
        <Text>Ingeniería en informática</Text>
        <Text>17460654</Text>
        <Text style={styles.txtnombre}>Juan Luis Vázquez Hernández</Text>
        <Text>Marzo-Junio 2021</Text>
      </View>
      <Button style={styles.ctaButton} title="Acerca" onPress={()=>{navigation.navigate('About')}}/>
    </View>
  );
}

function aboutUs({ navigation }){
  return(
    <View style={{flex:1}}>
      <View style={styles.mainView}>
        <Text style={styles.mainTitle}>Acerca</Text>
      </View>
    <Button style={styles.ctaButton} title="Regresar" onPress={()=>navigation.goBack()} />
    <Button style={styles.ctaButton} title="Regresar a la pagina principal" onPress={()=>navigation.navigate('Main')} />
    <Button style={styles.ctaButton} title="Regresar acerca" onPress={()=>navigation.navigate('About')} />
    <Button style={styles.ctaButton} title="Forzar regresar" onPress={()=>navigation.push('About')} />
    <Button style={styles.ctaButton} title="Regresar al inicio" onPress={()=>navigation.popToTop()} />
  </View>
  );
}

function App() {
  return(
    <Nc>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={main} />
        <Stack.Screen name="About" component={aboutUs} />
      </Stack.Navigator>
    </Nc>
  );
}

export default App;
