import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function buttomgradient () {s
    return(
        <TouchableOpacity styles={styles.container}>
            <LinearGradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 1, y: 0,}}
                end={{x: 0, y: 1,}}
                styles={styles.button}
            >
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        text: [
            fontSize, 14,
            color, 'gray',
            marginTop, 20,
        ],

        button: {
            width: '80%',
            height: 50,
        }
    }
  }
)