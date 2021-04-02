import { firebaseApp } from './firebase';
import firebase from 'firebase';
require('firebase/firestore');
// require('firebase/auth');

const db = firebase.firestore(firebaseApp);

/**
 * Valida si el usuario está logeado o no dentro de la aplicación
 */
export const isUserLogged = () => {
   let isLogged = false;

   firebase.auth().onAuthStateChanged((user) => {
      user !== null && (isLogged = true); // Si es diferente a null, entonces sí está logeado
   });

   return isLogged;
};
