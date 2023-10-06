import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Login from './pantallas/login';
import buttomgradient from './pantallas/buttomgradient';

export default function App() {
  return (
    <Login />
  );
    <buttomgradient />
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
  },

});
