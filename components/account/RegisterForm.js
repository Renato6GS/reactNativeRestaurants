import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { size } from 'lodash'

// Funciones propias
import { validateEmail } from '../../utils/helpers';

export default function RegisterForm() {

    // Este estado será para mostar la contraseña tras presionar en el ojo
    const [showPassword, setShowPassword] = useState(false);

    // Guardara el objeto de los datos ingresados por el usuario    
    const defaultFormValues = () => {
        return { email: "", password: "", confirm: ""}
    }

    // Este objeto será para guardar los datos del formulario
    const [formData, setFormData] = useState(defaultFormValues())

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text}); // Colocamos el type en [] para que el .json no ponga type, sino apute a la propiedad
    }
    
    // Estados para validar los inputs
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");

    const validateData = () => {
        setErrorEmail("");
        setErrorPassword("");
        setErrorConfirm("");

        let isValid = true;

        if(!validateEmail(formData.email)) {
            setErrorEmail("Debes de ingresar un email válido.");
            isValid = false;
        }

        if(size(formData.password) < 6){
            setErrorPassword("Debe de ingresar una contraseña mayor a 6 letras.");
            isValid = false;
        }

        if(size(formData.confirm) < 6){
            setErrorConfirm("Debe de ingresar una confirmación de contraseña mayor a 6 letras.");
            isValid = false;
        }

        if(formData.password !== formData.confirm){
            setErrorPassword("Las contraseñas no coinciden.");
            isValid = false;
        }

        return isValid;
    }
    

    const registerUser = () => {
        if(!validateData()) return;
        console.log("Procedo a XD")
    }
    

    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email..."
                keyboardType="email-address"
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu contraseña..."
                password={true}
                secureTextEntry={!showPassword}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon
                       type="material-community"
                       name={ showPassword ? "eye-off-outline" : "eye-outline"}
                       iconStyle={styles.icon}
                       onPress={() => setShowPassword(!showPassword)}
                    />
                }
                onChange={(e) => onChange(e, "password")}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu contraseña..."
                password={true}
                secureTextEntry={!showPassword}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={
                    <Icon
                       type="material-community"
                       name={ showPassword ? "eye-off-outline" : "eye-outline"}
                       iconStyle={styles.icon}
                    />
                }
                onChange={(e) => onChange(e, "confirm")}
            />
            <Button
                title="Registrar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={() => registerUser()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    form: {
        marginTop: 30
    },

    input: {
        width: "100%"
    },

    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },

    btn: {
        backgroundColor: "#31b44c"
    },

    icon: {
        color: "#c1c1c1"
    }

})
