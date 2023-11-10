import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Registro() {
    return (
        <View  style={styles.Container}>
            <Text style={styles.volver}>volver</Text>
            
            <Text style={styles.titulo}>FARMA NEUQUEN</Text>

            <Text style={styles.Text1}>Nombre</Text>
            <TextInput
            placeholder='franco'
                style={styles.Nom}
            />
            
            <Text style={styles.Text1}>Apellido</Text>
            <TextInput
                placeholder='molina'
                style={styles.Apel}
            />

            <Text style={styles.Text1}>fecha de nacimiento</Text>
            <TextInput
            placeholder='01/01/2000'
                style={styles.Naci}
            />


            <Text style={styles.Text1}>ingrese un correo</Text>
            <TextInput
            placeholder='Joaquin@Gimail.com'
                style={styles.Mail}
            />       

            <Text style={styles.Text1}>elija la contraseña</Text>
            <TextInput
            placeholder='Password'
            style={styles.TextInput}
            secureTextEntry={true}
            />
            <Text style={styles.Text1}>confirme la contraseña</Text>
            <TextInput
                placeholder='Password'
                style={styles.TextInput}
                secureTextEntry={true}
            />

            
            <TouchableOpacity style={styles.prueba} onPress={() => console.log("Oprimido")}>
            <Text style={styles.ButtonText}>Crear</Text>
            </TouchableOpacity>

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

    titulo: { 
   color: "#000",
    fontWeight: 'bold',
    fontSize: 40,
    },

    Text1: {
        marginTop: 25,
    },

    Nom:{
    padding: 5,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    },
    
    Apel: {
    padding: 5,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    },

    Naci: {
    padding: 5,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    },

    Mail: {
    padding: 5,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    },

    TextInput: {
    padding: 5,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    },

    prueba:{
            height: 30,
            backgroundColor: '#f5f5f5',
            padding: 20,
            marginTop: 35,
            borderRadius: 30,
        
    },    

});