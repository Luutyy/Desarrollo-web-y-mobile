import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App() {
    
  const TAs = Array.from({length: 15}, (_,i) => i + 1); // array del 1 al 15
  
  return (
    <ScrollView style={styles.container}>
      {TAs.map((numero) => (
        <TouchableOpacity key={numero} style={styles.boton} onPress={() => router.push(`/screens/TA${numero}`)}>
          <Text>TA{numero}</Text>
        </TouchableOpacity>      
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boton: {
    width: '90%',
    padding: 15,
    marginHorizontal:'auto',
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
  },
});
