// rfns
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// El useState será para saber si el usuario está logeado o no.
// Y un useEffect para verificar si el usuario está logeado o no y mostrar x o y pantalla.

// Librerías propias
import { isUserLogged } from '../../utils/actions';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';

import Loading from '../../components/Loading'

export default function Account() {

    const [login, setLogin] = useState(null);

    // Validamos si el usuario esá logeado o no
    useEffect(() => {
        setLogin(isUserLogged())
    }, [])

    // Mostramos una pantalla de carga
    if(login === null) return <Text>Cargando...</Text>

    // if(login === null) {
    //     return <Loading isVisible={true} text={"Cargando..."}/>
    // }

   return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({});
