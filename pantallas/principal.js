import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function principal() {
 return (
    <View style={StyleSheet.container}>
    <Text>Farma Neuquen</Text>
    <StatusBar style="auto" />
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

