import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export function ButtonGradient () {
    return(
        <TouchableOpacity styles={styles.Container}>
            <LinearGradient
                color={['#4c669f', '#3b5998', '#192f6a']}
                start={{x: 1, y: 0,}}
                end={{x: 0, y: 1,}}
                styles={styles.Button}
            >
                <Text style={styles.Text}>SIGN IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: 200,
        marginTop: 60, 
        alignItems: 'center'
    },
    Text: {
        fontSize: 20,
        color: '#aqua',
    },
    Button: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    } 
)