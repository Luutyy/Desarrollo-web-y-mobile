import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react'

export default function TA2(){

    const [texto, setTexto] = useState('');

    return(
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Texto interactivo</Text>
            <TextInput 
                style={styles.input}
                placeholder={"Ingresar texto"}
                value={texto}
                onChangeText={setTexto}/>

            <Text style={styles.resultado}>Texto ingresado: {texto}</Text>

        </View>
    )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
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
  },  
  resultado: {
    fontSize: 18,
    color: '#2563eb',
    textAlign: 'center',
  },
});