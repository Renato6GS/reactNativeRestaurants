// Esta será nuestra pantalla modal
// Vamos a utilizar un component de la librería "elementos" llamando "overlay"
//  Doc: https://reactnativeelements.com/docs/overlay
// Y el componente activityindicator, la cual es un círculo de carga
//  Doc: https://reactnative.dev/docs/activityindicator

import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';

export default function Loading({ isVisible, text }) {
   return (
      <Overlay
         isVisible={isVisible}
         windowBackgroundColor="rgba(0,0,0,.5)"
         overlayBackgroundColor="transparent"
         overlayStyle={styles.overlay}
      >
         <View style={styles.view}>
            <ActivityIndicator 
                size="large"
                color="#31b44c"
            />
            {
               // Si tiene texto, pues que se muestra. Recordemos que && es un if sin else
               text && <Text style={styles.text}>{text}</Text>
            }
         </View>
      </Overlay>
   );
}

const styles = StyleSheet.create({
   overlay: {
      height: 100,
      width: 200,
      backgroundColor: '#FFFFFF',
      borderColor: '#31b44c',
      borderWidth: 2,
      borderRadius: 10,
   },

   view: {
      flex: 1, // Todo el ancho disponible
      alignItems: 'center',
      justifyContent: 'center',
   },

   text: {
       color: "#5c5c60",
       marginTop: 10
   }
});
