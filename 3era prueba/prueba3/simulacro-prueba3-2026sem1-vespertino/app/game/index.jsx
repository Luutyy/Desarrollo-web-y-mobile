import { expoDevServerUri } from '@/common/utils';
import { useFetchRandomCountries } from '@/common/api';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../common/styles';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Trivia() {
  const { dificultad, vidas, aciertos: aciertosParam, fallos: fallosParam } = useLocalSearchParams()
  const router = useRouter();
  const { data, error, isLoading } = useFetchRandomCountries(9);
  const [vidasActuales, setVidas] = useState(vidas)
  const [paisCorrecto, setPaisCorrecto] = useState(null)
  const [errorCountry, setErrorCountry] = useState(null)
  const [correctCountry, setCorrectCountry] = useState(null)
  const [acerto, setAcerto] = useState(false)
  const [fallos, setFallos] = useState(Number(fallosParam ?? 0))
  const [aciertos, setAciertos] = useState(Number(aciertosParam ?? 0))
  

  useEffect(() => {
    if (!data || data.length === 0 ){
      return
    }
    const ccaCorrecto = data[Math.floor(Math.random() * data.length)]
    fetch(expoDevServerUri(`api/countries/${ccaCorrecto}`))
      .then((response) => response.json())
      .then((data) => setPaisCorrecto(data))
      .catch((error) => console.log(error))
  }, [data])

  const jugar = (cca3) => {
    if ((!paisCorrecto || !cca3) || acerto) {
      return;
    }
    if(cca3 === paisCorrecto.cca3 && !acerto){
      setCorrectCountry(cca3)
      setAcerto(true)
      setAciertos(aciertos + 1)
    } else{
      setVidas(vidasActuales - 1)
      setFallos(fallos + 1)
      setErrorCountry(cca3)
    }
  }

  const nuevaRonda = () => {
    router.push({
      pathname: '/game',
      params: {
        dificultad:dificultad, vidas:vidasActuales, aciertos, fallos
      }})
  };
  

  return (
    <View style={styles.container}>
      
      {isLoading && <Text>Cargando...</Text>}
      {error && <Text style={styles.errorText}>Fallo al cargar países aleatorios: {error.message}</Text>}
      {data && (<>
        {console.log(data)}
        {paisCorrecto && (
          <Text style={styles.errorText}>Cual de los siguientes paises tiene de capital a: {paisCorrecto.capital}</Text>
        )}
        <Text style={{fontSize:12}}>Te quedan {vidasActuales} vidas</Text>
        
        <View style={styles.flagGrid}>
          {data.map((cca3) => (
            <TouchableOpacity
              key={cca3}
              style={[styles.flagGridItem, cca3 === errorCountry && {backgroundColor:'#f44'}, cca3 === correctCountry && {backgroundColor:'#4f4'}, vidasActuales <= 0 && {backgroundColor:'#ccc'}]}
              onPress={() => jugar(cca3)}
              disabled={acerto || vidasActuales <= 0}
            >
              <Image source={{ uri: expoDevServerUri(`/static/flags/${cca3}.svg`) }} style={styles.flagImage} />
              <Text style={styles.normalText}>{cca3}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </>)}

      {acerto ? (
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={nuevaRonda}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      ) : vidasActuales > 0 ? (
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push({
            pathname: '/end',
            params: {
              aciertos, fallos
            }})}
        >
          <Text style={styles.buttonText}>Ir al final</Text>
        </TouchableOpacity>
        )}
    </View>
  );
};
