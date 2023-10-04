import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FarmaNeuquen</Text>
      <Text style={styles.subTitle}>Inicie sesión en su cuenta</Text>
      <TextInput
      placeholder='franco@gmail.com'
      style={styles.TextInput}
      />
      <TextInput
      placeholder='password'
      style={styles.TextInput}
      />
      <StatusBar style="auto" />

      <button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center', 
  },
titulo: {
  fontSize: 30,
  color: "#000",
  fontWeight: 'bold'
},
subTitle: {
fontSize: 20,
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
}

});
