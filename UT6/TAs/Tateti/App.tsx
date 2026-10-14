import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import type { RootStackParamList } from "./src/navigation/types";
import Ta1 from "./src/screens/Ta1"
import Ta2 from "@/screens/Ta2";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ta1" component={Ta1} />
         <Stack.Screen name="Ta2" component={Ta2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}