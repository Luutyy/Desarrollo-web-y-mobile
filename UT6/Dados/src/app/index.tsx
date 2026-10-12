import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const dados = '⚀⚁⚂⚃⚄⚅'
  const [dado, setDado] = useState(dados[0])
  
  
  const nuevoDado = () => {
    const random = Math.floor(Math.random() * 6); 
    setDado(dados[random]);
  }
  

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={nuevoDado}>
        <View>
          <Text style={styles.dado}>{dado}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dado : {
    fontSize: 100,
  }
});
