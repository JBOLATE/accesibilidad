import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Login} from './Pantallas/Login';
import {Principal} from './Pantallas/Principal';


export default function App() {
  return(
    <Principal />
  );
}