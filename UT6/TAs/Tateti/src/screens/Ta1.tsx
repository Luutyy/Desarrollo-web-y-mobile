import { Text, View, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Ta1">;

export default function Ta1({ route }: Props) {
    
    const [contador, setContador] = useState(0);

    function sumar(): void{
     setContador(contador+1)
    }

     function resta(): void{
     setContador(contador-1)
    }

    return (
    <View style={styles.container}>

      <Text style={{ padding:20,fontSize: 70,backgroundColor:"rgb(100, 27, 86)",color: "rgb(233, 233, 233)",}}>{contador}</Text>
      <View style={styles.contenedorBotones}>
      <TouchableOpacity onPress={() => sumar()}>
             <Text style={styles.botones}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => resta()}>
             <Text style={styles.botones}>-</Text>
        </TouchableOpacity>
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