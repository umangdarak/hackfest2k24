import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const Register = () => {
  const theme=useTheme();

  return (
    <View style={{backgroundColor:theme.colors.background,flex:1}}>
        <View className="flex flex-1 justify-center items-center">
      <Text className="text-slate-300 ">Register</Text>
      </View>
    </View>
  )
}

export default Register;