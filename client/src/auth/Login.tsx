import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const theme = useTheme();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView
      className="flex-1 flex"
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="justify-center items-center flex flex-1">
          <View
            className=" w-11/12 h-96 rounded-2xl mx-7"
            style={{ backgroundColor: "#414141" }}
          >
            <View className="flex-col p-5">
              <Text className="text-slate-300 text-2xl font-light text-opacity-95">LOGIN</Text>

            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
