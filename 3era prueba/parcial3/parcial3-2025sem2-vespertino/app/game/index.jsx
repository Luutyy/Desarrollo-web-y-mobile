import { styles } from '@/components/styles';
import { expoDevServerUri } from '@/components/utils';
import { useFetchRandomCountries } from '@/hooks/api';
import { Image } from 'expo-image';
import { useState, useEffect} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function Home() {
  const router = useRouter()
  const { vidas, nombre, aciertos: aciertosParam, fallos: fallosParam } = useLocalSearchParams()
  const { data, error, isLoading } = useFetchRandomCountries(2);
  const [vidasActuales, setVidasActuales] = useState(vidas)
  const [fallos, setFallos] = useState(Number(fallosParam ?? 0))
  const [aciertos, setAciertos] = useState(Number(aciertosParam ?? 0))
  const [paisCorrecto, setPaisCorrecto] = useState(null)
  const [paisRandom, setPaisRandom] = useState(null)
  const [jugo, setJugo] = useState(false)
  const [acerto, setAcerto] = useState(false)
  const [opcion, setOpcion] = useState()

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return
    }
    setPaisCorrecto(data[Math.floor(Math.random() * data.length)])
    setPaisRandom(data[Math.floor(Math.random() * data.length)])
  }, [data])

  const jugar = (respuesta) => {
    setJugo(true)
    if(respuesta === 'si') {
      if(paisRandom === paisCorrecto){
        setAciertos(aciertos + 1)
        setAcerto(true)
        setOpcion('si')
      } else {
        setFallos(fallos + 1)
        setVidasActuales(vidasActuales - 1)
        setOpcion('si')
      }
    }
    if(respuesta === 'no'){
      if(paisRandom !== paisCorrecto) {
        setAciertos(aciertos + 1)
        setAcerto(true)
        setOpcion('no')
      } else {
        setFallos(fallos + 1)
        setVidasActuales(vidasActuales - 1)
        setOpcion('no')
      }
    }
  }
  
  const nuevaRonda = () => {
    router.push({
      pathname: '/game',
      params: {
        vidas:vidasActuales, nombre: nombre, aciertos, fallos
      }})
  };


  return (
    <View style={styles.container}>
      
      <Stack.Screen options={{ title: `Trivia paises` }} />
      {isLoading && <Text>Cargando paises</Text>}
      {error && (
        <Text style={styles.errorText}>
          Error loading random countries: {error.message}
        </Text>
      )}
      {data && (
        <>
          <Text>{nombre}: {Array.from({length: fallos}, (_,i) => i + 1).map(() => (
            "💀"
          ))}
          {Array.from({length: vidasActuales}, (_,i) => i + 1).map((i) => (
            "❤️"))}</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-between',
              margin: 20,
              alignContent:'center'
            }}
          >
            <Image source={{uri: expoDevServerUri(`/static/maps/${paisCorrecto}.svg`)}} style={{ width: 300, height: 300 }}></Image>
            <View style={{borderWidth:1, borderRadius:20, justifyContent:'center', alignContent:'center'}}>
              <Image source={{uri: expoDevServerUri(`/static/flags/${paisRandom}.svg`)}} style={{ borderRadius:20, width: 400, height: 300, resizeMode:'contain'}}></Image>
            </View>
          </View>
          
          <Text style={{fontSize:20}}>{!jugo ? "La bandera y el mapa son del mismo pais?" : acerto ? `Correcto, el mapa es de ${paisCorrecto} y la bandera de ${paisRandom}` : `Incorrecto, el mapa es de ${paisCorrecto} y la bandera de ${paisRandom}`}</Text>

          <View style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-between',
              marginTop: 10,
              alignContent:'center'}}>
            <TouchableOpacity 
              style={[styles.primaryButton, jugo !== false &&  opcion === 'si' ? acerto ? {backgroundColor: '#4f4'} : {backgroundColor: '#f44'} : '']}
              onPress={() => jugar('si')}
              disabled={jugo}>
              <Text style={styles.buttonText}>Si</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.primaryButton, jugo !== false &&  opcion === 'no' ? acerto ? {backgroundColor: '#4f4'} : {backgroundColor: '#f44'} : '']}
              onPress={() => jugar('no')}
              disabled={jugo}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </>

      )}

      {jugo ? vidas > 0 ? 
      (
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={nuevaRonda}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      ) : (        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push({
            pathname: '/end',
            params: {
              nombre, aciertos, fallos
            }})}
        >
          <Text style={styles.buttonText}>Ir al final</Text>
        </TouchableOpacity>
      ) : (
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => router.push('/')}
        >
        <Text style={styles.buttonText}>Salir</Text>
      </TouchableOpacity>)}

    </View>
  );
}
