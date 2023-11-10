import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Registro() {
    return (
        <View  style={styles.Container}>
            <Text>FARMA NEUQUEN</Text>

            <Text style={styles.Nombre}>Nombre</Text>
            <TextInput
            placeholder='franco'
                style={styles.Mail}
            />
            
            <Text style={styles.Apellido}>Apellido</Text>
            <TextInput
                placeholder='molina'
                style={styles.Mail}
            />

            <Text style={styles.FechaNacimiento}>fecha de nacimiento</Text>
            <TextInput
            placeholder='01/01/2000'
                style={styles.Mail}
            />


            <Text style={styles.correo}>ingrese un correo</Text>
            <TextInput
            placeholder='Joaquin@Gimail.com'
                style={styles.Mail}
            />       

            <Text style={styles.contraseña}>elija la contraseña</Text>
            <TextInput
            placeholder='Password'
            style={styles.TextInput}
            secureTextEntry={true}
            />
            <Text style={styles.contraseña1}>confirme la contraseña</Text>
            <TextInput
                placeholder='Password'
                style={styles.TextInput}
                secureTextEntry={true}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    
});