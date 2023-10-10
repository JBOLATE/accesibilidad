import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Login() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Titulo}>FarmaNeuquen</Text>
      <Text style={styles.SubTitle}>Inicie sesión en su cuenta</Text>
      <TextInput
        placeholder='franco@gmail.com'
        style={styles.TextInput}
      />
      <TextInput
        placeholder='Password'
        style={styles.TextInput}
        textContentType='password'
      />
      
      <TouchableOpacity onPress={()=> console.log("oprimido")}>
      <Text style={styles.forgotPassword}>Olvide mi contraseña</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=> console.log("Oprimido")}>
      <Text style={styles.forgotPassword}>No tengo una cuenta</Text>
      </TouchableOpacity>
    </ View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#003366',
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
  TextInput: {
    padding: 10,
    paddingStart: 25,
    width: '80%',
    height: 50,
    marginTop: 35,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  
  forgotPassword: {
    height: 30,
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: '#bdb76b'
    /*color: '#FFB677',
    color: '#FF3CBD',
   */
  },
  
});
