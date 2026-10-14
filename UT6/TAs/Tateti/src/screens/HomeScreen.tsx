import { Text, View, StyleSheet, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Trabajps de aplicación</Text>
      <Text>(˶ᵔ ᵕ ᵔ˶)</Text>
      <Button
        title="1"
        onPress={() => navigation.navigate("Ta1", { id: 1 })}
      />
      <Button
        title="2"
        onPress={() => navigation.navigate("Ta2", { id: 2 })}
      />
      <Button
        title="3"
        onPress={() => navigation.navigate("Ta3", { id: 3 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});