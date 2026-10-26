import {View, Text, FlatList, Image ,TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react'

export default function TA5(){
    
    const imagenes = [
        {
            id:'1',
            url:'https://i.pinimg.com/736x/08/0a/fb/080afbcc2ed1022bbdc59446190164d8.jpg',
            descripcion:'Tanto vas a pensar? viejo duditativo'
        },
        {
            id:'2',
            url:'https://i.pinimg.com/736x/d2/d7/cd/d2d7cd14034aafab5e66028f4b57582c.jpg',
            descripcion:'Gato formal, es su primer dia de laburo'
        },
        {
            id:'3',
            url:'https://i.pinimg.com/1200x/5e/e1/43/5ee1430347c51ae72b7f7bbad3ffc2b9.jpg',
            descripcion:'Gato conspiranoico, cree en los aliens'
        },
        {
            id:'4',
            url:'https://i.pinimg.com/736x/33/72/f5/3372f5e7d7642babfffb889e5fd90133.jpg',
            descripcion:'Carpincho laburando en un callcenter, pobrecito...'
        },
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Galería de imágenes</Text>
           
            <FlatList 
                data={imagenes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Image 
                            source={{uri: item.url}}
                            style={styles.imagen}
                            resizeMode="cover"/>
                        <Text style={styles.descripcion}>{item.descripcion}</Text>
                    </View>
                )}/>

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
  titulo:{
    marginBottom:20,
    fontSize:40
  },
  card:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:10,
    marginBottom:15
  },
  imagen:{
    width:"100%",
    height:300,
    borderRadius:6
  },
  descripcion:{
    fontSize:16,
    textAlign:'center',
    marginTop:10
  }
});