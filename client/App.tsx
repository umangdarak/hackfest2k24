import { StatusBar } from "expo-status-bar";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SOS from "./src/SOS";
import { Provider } from "react-native-paper";
import Login from "./src/auth/Login";
import Register from "./src/auth/Register";
import { MD3DarkTheme } from "react-native-paper";
import React from "react";
import { AuthProvider, useAuth } from "./src/helpers/AuthContext"; // Importing AuthProvider and useAuth from correct path

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: "#242424",
    tab: "#414141",
  },
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      {/* AuthProvider wraps the whole app */}
      <Provider theme={theme}>
        <AppContent />
      </Provider>
    </AuthProvider>
  );
}

function AppContent() {
  // New component for content inside AuthProvider
  const { token } = useAuth(); // Using useAuth inside the component where AuthProvider is rendered

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {token ? (
          <Stack.Screen name="Main" component={Main} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
        <Stack.Screen name="SOS" component={SOS} />
      </Stack.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
