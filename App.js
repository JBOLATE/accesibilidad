import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Login } from './pantallas/Login';
import { principal } from './pantallas/principal';

export default function App() {
  return(
    <principal />
  );
}