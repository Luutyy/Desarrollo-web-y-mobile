import {View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList} from 'react-native';
import {useState} from 'react'

export default function TA3(){

    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState('');

    const agregarTarea = () => {
        if(texto.trim() === ""){
            return
        }
        
        setTareas([...tareas, {id: tareas.length + 1, nombre: texto}])
        setTexto('');
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de tareas</Text>
            
            <TextInput 
                style={styles.input}
                placeholder={"Escribi una tarea"}
                value={texto}
                onChangeText={setTexto}/>
            <TouchableOpacity style={styles.botonAgregar} onPress={agregarTarea}>
                <Text>Agregar tarea</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.lista}
                data={tareas}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    <Text>No hay tareas</Text>
                }
                renderItem={({item}) => (
                    <View style={styles.tarea}>
                        <Text style={styles.nombreTarea}>{item.nombre}</Text>
                        <TouchableOpacity style={styles.botonEliminar} onPress = {()=> eliminarTarea(item.id)}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

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
  botonAgregar:{
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  lista: {
    flex:1,
    width:'100%',
    marginTop:20
  },
  tarea:{
    flexDirection: 'row',
    gap:15,
    borderWidth: 1,
    borderRadius:8,
    padding:10,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },
  nombreTarea: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  botonEliminar: {
    backgroundColor: '#e76969',
    padding: 8,
    borderRadius: 6,
  },

});