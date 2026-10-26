import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function TA12() {
    const [imagen, setImagen] = useState(null);
    const [error, setError] = useState('');

    const seleccionarImagen = async () => {
        setError('');

        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                setError('Permiso denegado. No podemos acceder a tu camara.');
                return;
            }

            const resultado = await ImagePicker.launchCameraAsync({allowsEditing: true,quality: 1,});
            if (!resultado.canceled) {
                setImagen(resultado.assets[0].uri);
            }
        } catch (e) {
            setError('Ocurrió un error abrir la camara.');
        }
    };

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Tomar foto</Text>

            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Abrir camera</Text>
                <Text style={styles.texto}>Presioná el botón para abrir la galera.</Text>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={seleccionarImagen}
                >
                    <Text style={styles.textoBoton}>Sacar foto</Text>
                </TouchableOpacity>

                {imagen !== null && (
                    <View>
                        <Text style={styles.resultado}>Imagen seleccionada</Text>
                        <Image
                            source={{ uri: imagen }}
                            style={styles.imagen}
                            resizeMode="contain"
                        />
                    </View>
                )}

                {error !== '' ? 
                    <Text style={styles.error}>{error}</Text>
                : null}
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

    imagen: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        backgroundColor: '#EEEEEE',
    },

    error: {
        fontSize: 16,
        color: '#E74C3C',
        textAlign: 'center',
        marginTop: 10,
    },
});