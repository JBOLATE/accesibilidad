import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FarmaNeuquen</Text>
      <Text style={styles.titulo}>sign in to your account</Text>
      <TextInput
      placeholder='franco@gmail.com'
      />
      <TextInput
      placeholder='password'
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center', 
  },
titulo: {
  fontSize: 30,
  
}

});
