import { styles } from '@/components/styles';
import { expoDevServerUri } from '@/components/utils';
import { useFetchRandomCountries } from '@/hooks/api';
import { Image } from 'expo-image';
import { useState, useEffect} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function Home() {
  const router = useRouter()
  const {nombre, aciertos, fallos } = useLocalSearchParams()

  return (
    <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center', gap:10}}>
       <Stack.Screen options={{ title: `Felicitaciones` }} />
        <Text style={{fontSize:22}}>Gracias por jugar {nombre}</Text>
        <Text style={{fontSize:22}}>Jugaste con {fallos} vidas y pudiste acertar {aciertos} preguntas</Text>
        <Text style={{fontSize:22}}>Felicitaciones!!</Text>
        <TouchableOpacity 
          style={styles.primaryButton}  
          onPress={() => router.push('/')}
        >
          <Text style={styles.buttonText}>Volver a jugar</Text>
        </TouchableOpacity>
    </View>
  );
}
