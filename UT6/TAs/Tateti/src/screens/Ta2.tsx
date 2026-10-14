import { Text, View, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import {useTicTacToe} from "./useTicTacToe"
import { SetStateAction, useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Ta2">;

export default function Ta2({ route }: Props) {
    
    const [entrada, setEntrada] = useState("");

    function cambiarTexto(texto: string): void{
     setEntrada(texto)
    }

    return (
    <View style={styles.container}>

      <View style={styles.contenedorBotones}>
      <TextInput  value={entrada} onChangeText={setEntrada}>Ingrese un texto</TextInput >
      <Text>{entrada}</Text>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    fontSize: 100,
    fontWeight: 400,
    marginBlock: 10,
    color: "rgb(100, 27, 86)",
    borderBlockColor: "rgb(100, 27, 86)",
  },
  contenedorBotones: {
    flexDirection:"row",
  }
});