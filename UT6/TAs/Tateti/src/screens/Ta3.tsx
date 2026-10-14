import { useState } from 'react';
import {View, Text, TextInput, Button,StyleSheet, FlatList} from 'react-native';

export default function TA3() {
  const [texto, setTexto] = useState('');
  const [tareas, setTareas] = useState<string[]>([]);

  function agregarTarea() {
    if (texto.trim() === '') return;

    setTareas([...tareas, texto.trim()]);
    setTexto('');
  }

  function eliminarTarea(indice: number) {
    setTareas(tareas.filter((_, i) => i !== indice));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de tareas</Text>

      <TextInput
        style={styles.input}
        placeholder="Nueva tarea..."
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Añadir tarea" onPress={agregarTarea} />

      <FlatList
        style={styles.lista}
        data={tareas}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={
          <Text style={styles.vacio}>No hay tareas todavía.</Text>
        }
        renderItem={({ item, index }) => (
          <View style={styles.tarea}>
            <Text style={styles.textoTarea}>{item}</Text>
            <Button
              title="Eliminar"
              color="#dc2626"
              onPress={() => eliminarTarea(index)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 40 },
  titulo: {
    fontSize: 27, fontWeight: 'bold', marginBottom: 20,
  },
  input: {
    borderWidth: 1, borderColor: '#999',
    borderRadius: 8, padding: 12, marginBottom: 12,
  },
  lista: { marginTop: 15 },
  tarea: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, marginBottom: 10,
    backgroundColor: '#f0f0f0', borderRadius: 8,
    gap: 10,
  },
  textoTarea: { flex: 1, fontSize: 16 },
  vacio: { marginTop: 20, textAlign: 'center', color: '#666' },
});