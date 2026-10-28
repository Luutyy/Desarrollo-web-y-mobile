import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../components/styles';
import { useRouter } from 'expo-router';
import {useState} from 'react'
import {Stack} from 'expo-router'

export default function Index() {
  const router = useRouter();
  const [texto, setTexto] = useState()

  const iniciarJuego = (vidas) => {
    router.push({
      pathname: '/game',
      params: {
        vidas:vidas,
        nombre: texto
      }})
  }
  return (
    <View style={styles.container}>
      
      <Stack.Screen options={{ title: `Bienvenido` }} />
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#888"
        value={texto}
        onChangeText={setTexto}
      />
      <TouchableOpacity onPress={() => iniciarJuego(8)} style={styles.primaryButton}>
        <Text style={styles.buttonText}>Nivel facil, 9 vidas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => iniciarJuego(8)} style={styles.primaryButton}>
        <Text style={styles.buttonText}>Nivel medio, 6 vidas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => iniciarJuego(8)} style={styles.primaryButton}>
        <Text style={styles.buttonText}>Nivel dificil, 3 vidas</Text>
      </TouchableOpacity>
    </View>
  );
}
