import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../common/styles';
import {useState} from 'react'

export default function Home() {
  const router = useRouter();

  const iniciarJuego = (dificultad, vidas) => {
    router.push({
      pathname: '/game',
      params: {
        dificultad: dificultad,
        vidas:vidas
      }})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bienvenido</Text>

      <Text>Elegir la dificultad del juego</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => iniciarJuego('facil', 8)}
      >
        <Text style={styles.buttonText}>Facil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => iniciarJuego('media', 5)}
      >
        <Text style={styles.buttonText}>Media</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => iniciarJuego('dificil', 3)}
      >
        <Text style={styles.buttonText}>Dificil</Text>
      </TouchableOpacity>
    </View>
  );
}
