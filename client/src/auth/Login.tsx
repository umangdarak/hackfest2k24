import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";


export default function Login() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit=()=>{}
const forgetPassword=()=>{

}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <View
           className="flex items-center  flex-col max-w-full max-h-full mt-20"
        > 
          <View  className="flex-col justify-center">
            <Text  className=" text-3xl text-slate-300">Sign in</Text>
            <View>
              <View style={[ { width: 290 }]} className="h-12 my-5 bg-white rounded-xl">
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <TextInput
                    placeholder="Your Email"
                    className="h-12 ml-5  "
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </KeyboardAvoidingView>
              </View>
              <View style={[ { width: 290 }]} className="h-12  bg-white rounded-xl">
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <TextInput
                    placeholder="Password"
                    className="h-12 ml-5"
                    style={[ { width: 250 }]}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                  />
                </KeyboardAvoidingView>
              </View>
              <View  className="justify-end items-end my-2">
                <TouchableOpacity
                  onPress={forgetPassword}
                  className="justify-end"
                >
                  <Text className="text-red-600">Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex flex-row items-center my-10 justify-between"></View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  //navigation.navigate("Register");
                }}
               className=" text-blue-700"
              >
                {
                  <Text className="text-lg text-slate-300"
                    style={[
                    
                      {
                        fontSize: 20,
                        textShadowColor: "rgba(0, 0, 0, 0.75)",
                        textShadowOffset: { width: 2, height: 2 },
                        textShadowRadius: 5,
                      },
                    ]}
                  >
                    Sign Up?
                  </Text>
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit}>
                <View
                  className=" w-12 h-12 bg-blue-700 rounded-full justify-center items-center"
                >
                  <AntDesign name="arrowright" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
