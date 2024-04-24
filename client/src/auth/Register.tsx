import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Snackbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleRegister = async () => {
    if (username != "" && password != "") {
      try {
        let res = await fetch(`${url}/user/post`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ username: username, password: password }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        navigation.navigate("Login");
        // await AsyncStorage.setItem('token',data['token']);
        // await AsyncStorage.setItem('name',data['name']);
      } catch (error) {
        console.error("Fetch error:", error.message);
        setVisible(true);
      }
    } else {
      setVisible(true);
    }
  };
  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Reset form fields when screen is focused
      resetForm();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="justify-center items-center flex flex-1">
          <View
            className=" w-11/12 h-96 rounded-2xl mx-7"
            style={{ backgroundColor: "#414141" }}
          >
            <View className="flex-col p-5">
              <Text className="text-slate-300 text-2xl font-light text-opacity-95">
                REGISTER
              </Text>
              <View className="h-16"></View>
              <View className="bg-slate-300 rounded-xl w-max h-12 flex justify-center p-3">
                <TextInput
                  className="w-64"
                  placeholder="Username"
                  value={username}
                  onChangeText={(t) => setUsername(t)}
                />
              </View>
              <View className="h-4"></View>
              <View className="bg-slate-300 rounded-xl w-max h-12 flex justify-center p-3">
                <TextInput
                  className="w-64"
                  placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(t) => setPassword(t)}
                />
              </View>
              <View className="h-7"></View>
              <View className="flex-row justify-center items-center">
                <TouchableOpacity onPress={handleRegister}>
                  <View className=" bg-cyan-900 w-24 rounded-lg h-12 flex items-center justify-center">
                    <Text className="text-slate-300 text-2xl font-light text-opacity-95">
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="h-12"></View>
              <View className="flex flex-row ">
                <Text className="text-slate-300 text-base font-light text-opacity-95">
                  Already have an account?
                </Text>
                <TouchableOpacity
                  className="flex justify-center items-center bg-cyan-900 ml-2 w-16 rounded-md"
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text className="text-slate-300 text-base font-light text-opacity-95  font-semibold">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Snackbar
            visible={visible}
            onDismiss={() => {
              setVisible(false);
            }}
            onIconPress={() => {
              setVisible(false);
            }}
          >
            <Text> User already exists</Text>
          </Snackbar>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Register;
