import React, { useState } from "react";
import { View, Text, Image, Button, Alert } from "react-native";
import { useAuth } from "../helpers/AuthContext";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "react-native-paper";

const Home = () => {
  const theme = useTheme();
  const { removeToken } = useAuth();
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);

  const imagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64:true
    });
    if (!result.cancelled) {
      setImage(result.base64);

     
      // try {
      //   const response = await fetch("http://192.168.1.104:5000/posts/upload", {
      //     method: 'POST',
      //     body: formData,
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   });
      //   const data = await response.text();
      //   console.log(data);
      // } catch (error) {
      //   console.error("Error uploading file:", error);
      //   Alert.alert("Error", "Failed to upload image.");
      // }
    }
  };

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      {data && <Text>{JSON.stringify(data)}</Text>}
      <Button onPress={() => removeToken()} title="Logout" />
      <Button onPress={imagePicker} title="Upload Image" />
      {image && (
        <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default Home;
