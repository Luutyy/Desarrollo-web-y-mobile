import {View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, ScrollView, Image} from 'react-native';
import {useState} from 'react'
import ReanimatedSwipeable from'react-native-gesture-handler/ReanimatedSwipeable';

const API_KEY = 'x'

export default function TA7(){

    const [texto, setTexto] = useState('');
    const [pelicula, setPelicula] = useState(null);
    const[error, setError] = useState('')
    const [cargando, setCargando] = useState(false)

    const buscarPelicula = async() => {
        if(texto.trim() === '') {
            return
        };
        setCargando(true);
        setError('');
        setPelicula(null)

        try {
            const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${texto}`
            const respuesta = await fetch(url);
            const data = await respuesta.json();

            if(data.Response === 'False'){
                setError('No se encontro la pelicula')
            } else{
                setPelicula(data)
            }
        } catch(e){
            setError(`Error`)
        } finally{
            setCargando(false)
        }
    }
    

    return(
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.contenido}>
            <Text style={styles.titulo}>Buscar peliculas</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Busca una pelicula'
                value={texto}
                onChangeText={setTexto}
                onSubmitEditing={buscarPelicula}
            />
            <TouchableOpacity style={styles.boton} onPress={buscarPelicula}>
                <Text>Buscar</Text>
            </TouchableOpacity>
            {error !== '' ? <Text style={styles.error}>{error}</Text> : null}
            {pelicula ? 
                <View style={styles.resultado}>
                    {pelicula.Poster !== 'N/A' ? <Image source={{uri: pelicula.Poster}} style={styles.poster}/> : <Text>Sin poster</Text>}
                    <Text style={styles.nombre}>{pelicula.Title}({pelicula.Year})</Text>
                    <Text style={styles.plot}>{pelicula.Plot}</Text>
                </View>:null}
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contenido: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:20
  },
  input: {
    borderWidth:1,
    borderRadius:6,
    borderColor:'#999',
    padding:8,
    fontSize:16,
    marginBottom:20,
    width:'90%',
  },  
  boton:{
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  error: {
    color: '#c0392b',
    fontSize:16,
    marginTop:10
  },
  resultado: {
    width: '90%',
    alignItems:'center'
  },
  poster: {
    width:250,
    height:370,
    marginBottom:16,
  },
  nombre: {
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  },
  plot: {
    fontSize:16,
    textAlign:'justify'
  }

});