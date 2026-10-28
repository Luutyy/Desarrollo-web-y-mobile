import {View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, ScrollView, Image} from 'react-native';
import {useState, useEffect} from 'react'
import { styles } from '../../common/styles';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { expoDevServerUri } from '../../common/utils';
import { useRouter } from 'expo-router';


export default function Grupo() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [equipos, setEquipos] = useState()
  
  useEffect(() => {
    fetch(expoDevServerUri(`/api/groups/${id}`))
      .then((response) => response.json())
      .then((data) => setEquipos(data))
      .catch((error) => console.log(error));
  }, [id]);


  return (
    <View>
      <Stack.Screen
        options={{title: `Grupo ${id}`, headerLeft: () => (
            <TouchableOpacity style={[styles.primaryButton, {margin:5} ]} onPress={() => router.replace('/')}>
              <Text style={[styles.buttonText]}>
                Inicio
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View>
        <Text>Equipos:</Text>
        {!equipos ? <Text>Cargando...</Text> : (
          <View style={{flex:1}}>
          {equipos.map((equipo) => (
            <TouchableOpacity 
              style={ {width:'99%', flexGrow:'1', borderWidth:1, borderRadius:1, margin:5, borderRadius:8, flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}
              onPress={() => router.push(`/teams/${equipo.code}`)}
              >
              <Text style={{fontSize:20, marginLeft:10}}>{equipo.name}</Text>
              <Image style={[styles.flagImage, {borderRadius:8}]} source={{uri: expoDevServerUri(`/static/flags/${equipo.code}.png`)}}></Image>
            </TouchableOpacity>
          ))}
        </View>
        )}
      </View>

    </View>
)
}