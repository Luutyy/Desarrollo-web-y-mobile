import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../common/styles';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';


export default function End() {
    
  const {aciertos, fallos} = useLocalSearchParams()
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Fin del juego</Text>
      <Text style={{fontSize:14}}>Luego de {Number(fallos) + Number(aciertos)} intentos</Text>
      <Text style={{fontSize:14}}>-Acertaste {aciertos} veces</Text>
      <Text style={{fontSize:14}}>-Erraste {fallos} veces</Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}
