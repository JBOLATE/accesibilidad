import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Login() {
  return (
    
    <View style={styles.Container}>
      
      { <Text style={styles.Titulo}>Farma Neuquen</Text> }

      <Text style={styles.Usuario}>Usuario</Text>
      <TextInput
        placeholder='franco@gmail.com'
        style={styles.Mail}
      />

      <Text style={styles.contraseña}>contraseña</Text>
      <TextInput
        placeholder='Password'
        style={styles.TextInput}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => console.log("oprimido")}>
        <Text style={styles.forgotPassword1}>Olvide mi contraseña</Text>
      </TouchableOpacity>




      <TouchableOpacity style={styles.prueba} onPress={() => console.log("Oprimido")}>
        <Text style={styles.ButtonText}>iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Oprimido")}>
        <Text style={styles.forgotPassword3}>No tengo una cuenta</Text>
      </TouchableOpacity>
    </ View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 40,
  },

  Mail: {
    padding: 10,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },

  TextInput: {
    padding: 10,
    paddingStart: 25,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },

  Usuario: {
    color: 'gray',
    marginLeft: -190,
    marginTop: 35,
  },

  contraseña: {
    color: 'gray',
    marginLeft: -170,
    marginTop: 35,
  },

  forgotPassword1: {
    height: 30,
    marginTop: 7,
    marginLeft: -120,
    color: 'gray',
  },

  forgotPassword2: {
    height: 30,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 35,
    borderRadius: 30,
  },

  forgotPassword3: {
    color: 'gray',
  },

  ButtonText: {
    height: 30,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 35,
    borderRadius: 30,
  },
});