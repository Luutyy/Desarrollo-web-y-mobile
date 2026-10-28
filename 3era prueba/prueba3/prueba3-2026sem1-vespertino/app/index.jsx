import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../common/styles';
import {useState, useEffect} from 'react'

export default function Home() {
  const router = useRouter();
  const [grupos, setGrupos] = useState()

  useEffect(() => {
    fetch('/api/groups')
    .then((response) => response.json())
    .then((data) => setGrupos(data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bienvenido</Text>
      <Text style={styles.titleText}>Figuritas del mundial</Text>
      
      {!grupos ? <Text>Cargando...</Text> : (
        <View style={styles.flagGrid}>
          {grupos.map((grupo) => (
            <TouchableOpacity 
              style={styles.flagGridItem}
              onPress={() => router.push(`/groups/${grupo}`)}
              key={grupo}
              >
              <Text>Grupo {grupo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
