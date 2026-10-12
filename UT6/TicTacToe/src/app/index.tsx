import { Text, View, StyleSheet, Touchable, TouchableOpacity, Button } from "react-native";
import { useTicTacToe } from './useTicTacToe';

export default function Index() {

  const {
    activePlayer, board, isFinished, move, moves, restart, result, winner, loser,
  } = useTicTacToe();

  const onRestart = () => {
    restart();
  }

  const onPressButton = (key: number) => {
    if(moves.includes(key) && !isFinished){
      move(activePlayer, key)
    }
  }
  
  return (
    <View style={styles.container}>
      {isFinished  ? winner != null ? <Text>El ganador es: {winner}</Text> : <Text>Empate</Text> : <Text></Text>}
      <View style={styles.grilla}>
        { 
          Array.from({length: 9}).map((_, i) => (
          <TouchableOpacity style={styles.item} key= {i} onPress={() => onPressButton(i)}>
            <View>
              <Text>{board[i] === "_" ? "" : board[i]}</Text>
            </View>
          </TouchableOpacity>
        ))
        }
      </View>
      {isFinished ? <Button onPress={onRestart} title="Reiniciar"/> : <Text></Text>}
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  grilla: {
    width:300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width:'25%',
    height:50,
    borderWidth: 1,
    margin:'2%',
    padding:10,
    alignItems: "center",
    borderRadius:9,
    justifyContent: "center",
  }
});
