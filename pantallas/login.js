import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigator = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function iniciarSesion() {
    console.log(usuario) 
    if (usuario != "" && password != "") {
      navigator.navigate("Principal")
    } else {
      alert("La cuenta no existe")
    }
  }
  
  return (
    <View style={styles.Container}>
      {<Text style={styles.Titulo}>Farma Neuquen</Text>}

      <Text style={styles.Usuario}>Usuario</Text>
      <TextInput
        placeholder='franco@gmail.com'
        style={styles.Mail}
        onChangeText={e => setUsuario(e)}
      />

      <Text style={styles.contraseña}>contraseña</Text>
      <TextInput
        placeholder='Password'
        style={styles.TextInput}
        secureTextEntry={true}
        onChangeText={e => setPassword(e)}
      />

      <TouchableOpacity onPress={() => console.log("oprimido")}>
        <Text style={styles.forgotPassword1}>Olvide mi contraseña</Text>
      </TouchableOpacity>

      <Button
        onPress={() => iniciarSesion()}
        title="Iniciar Sesion"
        color="#f5f5f5"
        style={styles.iniciarSesion}
      />

      <TouchableOpacity title='no cuenta' onPress={() => navigator.navigate("Registro")}>
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

});