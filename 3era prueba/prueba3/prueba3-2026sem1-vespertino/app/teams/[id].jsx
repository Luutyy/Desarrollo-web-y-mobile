import { expoDevServerUri } from '@/common/utils';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../common/styles';
import { useRouter } from 'expo-router';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { useTeamData } from '../stickers/utils';
import { useState } from 'react';

export default function Equipo() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const teamCode = id
  const [stickers, setStickers] = useState(null);
  const { data, error } = useTeamData(teamCode, stickers);

  return (
    <View style={styles.container}>
        <Stack.Screen
        options={{title: `Equipo: ${data.name}`, headerLeft: () => (
            <TouchableOpacity style={[styles.primaryButton, {margin:5} ]} onPress={() => router.replace('/')}>
              <Text style={[styles.buttonText]}>
                Inicio
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      {!data && !error && <Text>Cargando...</Text>}
      {error && <Text style={styles.errorText}>{`Fallo al cargar equipo ${teamCode}: ${error.message}`}</Text>}
      {data && (<>
        <Text style={styles.normalText}>Equipo: {data.name}</Text>
        <Text style={styles.normalText}>Grupo: {data.group}</Text>
        <Text style={styles.normalText}>Continente: {data.continent}</Text>
        <Text style={styles.normalText}>Confederacion: {data.confed}</Text>
        <Image source={{ uri: expoDevServerUri(`/static/flags/${teamCode}.png`) }} style={styles.flagImage} />
        <View style={styles.flagGrid}>
          {(data.stickers ?? []).map((hasSticker, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.flagGridItem, hasSticker && styles.flagGridItemSelected]}
              onPress={() => setStickers((prevStickers) => {
                const newStickers = [...(prevStickers ?? data.stickers)];
                newStickers[index] = !newStickers[index];
                return newStickers;
              })}
            >
              <Text style={styles.normalText}>{index + 1}</Text>
            </TouchableOpacity>

            
          ))}
        </View>
        
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setStickers(data.stickers.map(() => true))}
          >
            <Text style={styles.buttonText}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setStickers(data.stickers.map(() => false))}
          >
            <Text style={styles.buttonText}>Ninguna</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push(`/groups/${data.group}`)}
        >
          <Text style={styles.buttonText}>Volver al grupo</Text>
        </TouchableOpacity>
        </>)}
    </View>
  );
};
