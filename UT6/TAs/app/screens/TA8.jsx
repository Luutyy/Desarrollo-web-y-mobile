import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const pantallaGrande = width >= 600;

export default function TA8() {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Dimensiones</Text>

            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Diseño adaptable</Text>
                <Text style={styles.texto}>Ejemplo</Text>
                <Text style={styles.info}>Ancho: {width.toFixed(0)}px</Text>
                <Text style={styles.info}>Alto: {height.toFixed(0)} px</Text>
                <Text style={styles.info}>Dispositivo: {pantallaGrande ? 'Pantalla grande' : 'Pantalla pequeña'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: pantallaGrande ? 'lightblue' : '#DC143C',
        justifyContent: 'center',
        alignItems: 'center',
        padding: pantallaGrande ? 40 : 20,
    },

    titulo: {
        fontSize: pantallaGrande ? 32 : 24,
        fontWeight: 'bold',
        marginBottom: pantallaGrande ? 30 : 20,
        color: '#2C3E50',
        textAlign: 'center',
    },

    tarjeta: {
        width: pantallaGrande ? '70%' : '100%',
        backgroundColor: 'white',
        padding: pantallaGrande ? 30 : 20,
        borderRadius: 15,
        elevation: 5,
    },

    subtitulo: {
        fontSize: pantallaGrande ? 26 : 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#2874A6',
    },

    texto: {
        fontSize: pantallaGrande ? 20 : 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333333',
    },

    info: {
        fontSize: pantallaGrande ? 18 : 14,
        marginBottom: 10,
        color: '#555555',
    },
});
