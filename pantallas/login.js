import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Login() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Titulo}>FarmaNeuquen</Text>
      <Text style={styles.SubTitle}>Inicie sesión en su cuenta</Text>

      <Text style={styles.Usuario}>Usuario</Text>
      <TextInput
        placeholder='franco@gmail.com'
        style={styles.Mail}
      />

      <Text style={styles.contraseña}>contraseña</Text>
      <TextInput
        placeholder='Password'
        style={styles.TextInput}
        textContentType='password'
      />
      
      <TouchableOpacity onPress={()=> console.log("oprimido")}>
      <Text style={styles.forgotPassword1}>Olvide mi contraseña</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.forgotPassword2} onPress={()=> console.log("Oprimido")}>
      <Text style={{color:"#fff"}}>iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> console.log("Oprimido")}>
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
  SubTitle: {
    color: 'gray'
  },

  Mail: {
    padding: 10,
    paddingStart: 25,
    width: '80%',
    height: 50,
    marginTop: 35,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },

  TextInput: {
    padding: 10,
    paddingStart: 25,
    width: '80%',
    height: 50,
    marginTop: 35,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },
  
  Usuario: {
    color: 'gray',
    marginLeft: -190,
  },

  contraseña: {
    color: 'gray',
    marginLeft: -170,
    
  },

  forgotPassword1: {
    height: 30,
    marginLeft: -120,
    color: 'gray',
  },
  
  forgotPassword2: {
    height: 30,
    backgroundColor: 'gray',
    padding: 20,
    marginTop: 35,
    borderRadius: 30,
  },
  
  forgotPassword3: {
    color: 'gray',
  }
});
