import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export function Principal() {
    return (
        <View  style={styles.Container}>
            <Text>Farma Neuquen</Text>

            <TouchableOpacity onPress={() => console.log("oprimido")}>
                <Text style={styles.forgotPassword1}>Olvide mi contraseña</Text>
            </TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    
});
