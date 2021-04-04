// Esta pantalla va a ser para aquellos usuario que no se han logeado
import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native'


export default function UserGuest() {

    const navigation = useNavigation();

   return (
      // Nos sirve para que se pueda scrollear
      <ScrollView centerContent style={styles.viewBody}>
         {/* Colcoamos require porque es una imagen local */}
         <Image source={require('../../assets/restaurant-logo.png')} resizeMode="contain" style={styles.image} />
         <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
         <Text style={styles.description}>
            ¿Cómo describirías tu mejor restuarante? Busca y visualiza los mejores restaurantes de una forma sencilla,
            vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.
         </Text>

         {/* Sería bueno que cuando el usuario de click al botón, cambie el texto a un circulo de carga */}
         {/* El .navigate("login") nos permite crear ese efecto como una pantalla encima de la otra */}
         <Button 
            title="Ver perfil"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("login")}
         />
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   viewBody: {
      marginHorizontal: 30,
   },

   image: {
      height: 300,
      width: '100%', // "100" = 100%
      marginBottom: 10,
   },

   title: {
      fontWeight: 'bold',
      fontSize: 19,
      marginVertical: 10,
      textAlign: 'center',
   },

   description: {
      textAlign: 'justify',
      marginBottom: 20,
      color: '#5c5c60',
   },

   button: {
       backgroundColor: "#31b44c"
   }
});
