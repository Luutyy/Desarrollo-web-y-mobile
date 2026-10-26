import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react'

export default function TA1(){
    
    const [numero, setNumero] = useState(0);

    return(
        <View style={styles.container}>
            
            <Text style={styles.numero}>{numero}</Text>
            <View style={styles.botones}>
                <TouchableOpacity style={[styles.boton, styles.aumentar]} onPress={() => setNumero(numero + 1)}>
                    <Text>Aumentar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.boton, styles.disminuir]} onPress={() => setNumero(numero - 1)}>
                    <Text>Disminuir</Text>
                </TouchableOpacity>
            </View>

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
  numero:{
    marginBottom:20,
    fontSize:40
  },
  boton: {
    width: '50%',
    padding: 15,
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  botones: {
    gap:10,
    flexDirection:'row',
    justifyContent: 'center',
  },
  disminuir:{
    backgroundColor: 'rgb(231, 105, 105)',
  },
  aumentar: {
    backgroundColor:'#92ec56',
  }
});