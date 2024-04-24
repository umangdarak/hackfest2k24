import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { useAuth } from "../helpers/AuthContext";
import * as ImagePicker from "expo-image-picker";
import { Avatar, Button, Icon, useTheme } from "react-native-paper";
import { url } from "../../config";

const Home = () => {
  const theme = useTheme();
  const { removeToken ,getToken} = useAuth();
  const [data,setData]=useState();

  useEffect(()=>{
    const data=getToken();
    setData(data);
  },[])


  const imagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
      base64: true,
    });
    if (!result.cancelled) {
      try {
        const response = await fetch(`${url}/posts/upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: result.assets[0].base64,author:data.name,content:'IT WORKS!!',id:data.id}),
        });

        console.log(await response.text());
      } catch (error) {
        console.error("Error uploading image:", error);
        Alert.alert("Error", "Failed to upload image.");
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1   
      }}
    >
    <View className="flex flex-col justify-center items-center">
      <View className="flex flex-row justify-end items-end mt-4 w-full">
        <Button onPress={() => {removeToken() } }><Avatar.Icon icon="account" size={40} theme={theme} color="grey" style={{backgroundColor:theme.colors.tab}}/></Button>
      </View>
      <View style={{backgroundColor:theme.colors.tab}} className="w-11/12 h-36 rounded-2xl">
        {data && <Text className="text-white ">Welcome {data.name}</Text>}
      </View>
    </View>
    </View>
  );
};

export default Home;
