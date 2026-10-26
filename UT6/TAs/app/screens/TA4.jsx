import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useState} from 'react'

export default function TA4(){
    
    const [texto, setTexto] = useState('Serio')
    const [url, setUrl] = useState('https://i.redd.it/j0ppxvei1shb1.jpg')

    const cambiarImagen = () => {
        if(texto === 'Serio'){
            setTexto('Blehh')
            setUrl('https://i.pinimg.com/736x/5a/9b/12/5a9b12dbc8e32a61bf6ff84533518c87.jpg')
        } else{
            setTexto('Serio')
            setUrl('https://i.redd.it/j0ppxvei1shb1.jpg')
        }
    }

    return(
        <View style={styles.container}>
            <Image style={styles.imagen} source={{ uri: url }}></Image>
                <TouchableOpacity style={styles.boton} onPress={() => cambiarImagen()}>
                    <Text>{texto}</Text>
                </TouchableOpacity>
        </View>

    )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  boton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#92ec56',
  },
});