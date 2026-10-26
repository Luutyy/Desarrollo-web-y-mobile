import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const clave = 'mi_informacion'


export default function TA14() {
    const [texto, setTexto] = useState('')
    const [informacion, setInformacion] = useState('')
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        cargarInformacion()
    }, [])

    const cargarInformacion = async () => {
        try {
            const datoGuardado = await AsyncStorage.getItem(clave)

            if(datoGuardado !== null){
                setInformacion(datoGuardado)
            }
        } catch (error){
            setMensaje('Hubo un error')
        }
    }

    const guardarInformacion = async() => {
        if(texto.trim() === ''){
            setMensaje('No hay mensaje')
            return;
        }

        try {
            await AsyncStorage.setItem(clave, texto);
            setTexto('');
            setMensaje('Se guardo la informacion')
            await cargarInformacion()
        } catch(error){
            setMensaje('Error al guardar la informacion')
        }
    }

    const limpiarAlmacenamiento = async() => {
        try{
            await AsyncStorage.removeItem(clave);
            setInformacion('');
            setTexto('');
            setMensaje('Se limpio el almacenamiento')
        } catch(error){
            setMensaje('No se pudo limpiar el almacenamiento')
        }
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Almacenamiento</Text>

            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Guardar informacion</Text>
                <TextInput style={styles.input} placeholder="Informacion a guardar" value={texto} onChange={setTexto}/>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={guardarInformacion}
                >
                    <Text style={styles.textoBoton}>Guardar informacion</Text>
                </TouchableOpacity>

                <Text style={styles.subtitulo}>Informacion guardada</Text>
                <Text style={styles.informacion}>{informacion !== "" ? informacion : "No hay informacion guardada"}</Text>

                <TouchableOpacity style={styles.botonEliminar} onPress={limpiarAlmacenamiento}>
                    Limpiar almacenamiento
                </TouchableOpacity>
                {mensaje !== '' ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
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
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#2C3E50',
        textAlign: 'center',
    },

    tarjeta: {
        width: '100%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 5,
    },

    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#2874A6',
    },

    input: {
        borderWidth: 1,
        borderColor: '#BDC3C7',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 15,
    },

    boton: {
        backgroundColor: '#2874A6',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    botonEliminar: {
        backgroundColor: '#E74C3C',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },

    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    informacion: {
        fontSize: 16,
        color: '#333333',
        padding: 12,
        backgroundColor: '#F2F3F4',
        borderRadius: 8,
        minHeight: 45,
    },

    mensaje: {
        fontSize: 14,
        color: '#2874A6',
        textAlign: 'center',
        marginTop: 15,
    },
});