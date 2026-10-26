import { View, Text, StyleSheet, Platform } from 'react-native';

export default function TA9() {
    const plataforma = Platform.OS === 'android' ? 'Android' : Platform.OS === 'ios' ? 'iOS': 'Web' 
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Detectar plataforma</Text>
            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Sistema operativo</Text>
                <Text style={styles.texto}>Estás utilizando:</Text>
                <Text style={styles.sistema}>{plataforma}</Text>
                <Text style={styles.descripcion}>Aplicación ejecutándose en {plataforma}</Text>
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
        backgroundColor: Platform.OS === 'android' ? '#D5F5E3' : '#D6EAF8',
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
        borderRadius: Platform.OS === 'android' ? 10 : 20,
        backgroundColor: 'white',
        elevation: Platform.OS === 'android' ? 5 : 0,
        shadowColor: '#000',
        shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
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
        marginBottom: 10,
        color: '#333333',
    },

    sistema: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Platform.OS === 'android' ? '#239B56' : '#2874A6',
        marginBottom: 15,
    },

    descripcion: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555555',
    },
});
