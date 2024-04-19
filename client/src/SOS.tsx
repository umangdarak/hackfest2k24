import { View, Text } from 'react-native';
import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';
const SOS = () => {
  const theme = useTheme();
  const navigate = useNavigation();
  const sos=async()=>{
    const { result } = await SMS.sendSMSAsync(
      ['9652363767'],
      'Akhilesh is gay',);

      console.log(result);
  }

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 7 }}>
       <Button icon={()=>{
        return <MaterialCommunityIcons name="alert"  size={70}/>
       }}  onPress={sos}/>
      <Button onPress={() => { navigate.navigate('Login'); }}>Login</Button>
      <Button onPress={() => { navigate.navigate('Register'); }}>Register</Button>
      <Button onPress={() => { navigate.navigate('Main'); }}>Home</Button>
      </View>
    </View>
  );
};

export default SOS;
