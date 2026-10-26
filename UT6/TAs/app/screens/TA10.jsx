import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';

export default function TA10() {
    const [ubicacion, setUbicacion] = useState(null);
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);

    const obtenerUbicacion = async () => {
        setCargando(true);
        setError('');
        setUbicacion(null);

        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permiso denegado. No podemos acceder a tu ubicación.');
                return;
            }
            const posicion = await Location.getCurrentPositionAsync({});
            setUbicacion(posicion.coords);
        } catch (error) {
            setError('Ocurrió un error al obtener la ubicación.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Ubicacion</Text>
            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Ubicación del dispositivo</Text>
                <Text style={styles.texto}>Presioná el botón para obtener tu ubicación.</Text>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={obtenerUbicacion}
                    disabled={cargando}>

                    <Text style={styles.textoBoton}>{cargando ? 'Obteniendo...' : 'Obtener ubicación'}</Text>
                </TouchableOpacity>
                {cargando ? <Text style={styles.info}>Cargando</Text> : null}
                {ubicacion ? 
                    <View>
                        <Text style={styles.resultado}>Acceso garantizado</Text>
                        <Text style={styles.info}>Latitud: {ubicacion.latitude}</Text>
                        <Text style={styles.info}>Longitud: {ubicacion.longitude}</Text>
                        <Text style={styles.info}>Precisión: {ubicacion.accuracy ?? 'No disponible'} metros</Text>
                    </View>
                : null}

                {error !== '' ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#D6EAF8',
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#2C3E50',
        textAlign: 'center',
    },

    tarjeta: {
        width: '100%',
        padding: 25,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 5,
    },

    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#2874A6',
    },

    texto: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333333',
    },

    boton: {
        backgroundColor: '#2874A6',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },

    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    resultado: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#239B56',
        textAlign: 'center',
        marginBottom: 15,
    },

    info: {
        fontSize: 15,
        color: '#333333',
        marginBottom: 10,
    },

    error: {
        fontSize: 16,
        color: '#E74C3C',
        textAlign: 'center',
        marginTop: 10,
    },
});