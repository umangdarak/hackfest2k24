import { StatusBar } from "expo-status-bar";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SOS from "./src/SOS";
import { Provider } from "react-native-paper";
import Login from "./src/auth/Login";
import Register from "./src/auth/Register";
import { MD3DarkTheme } from "react-native-paper";

const theme={...MD3DarkTheme
  ,
  colors: {
    ...MD3DarkTheme.colors, 
    background: '#242424', 
    tab:'#414141'
  },
};
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SOS" screenOptions={{headerShown:false}}>
          <Stack.Screen name="SOS" component={SOS} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
        <StatusBar hidden={true}/>
      </NavigationContainer>
    </Provider>
  
  );
}
