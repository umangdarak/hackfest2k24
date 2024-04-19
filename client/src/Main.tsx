import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Community from './screens/Community';
import Disaster from './screens/Disaster';
import Volunteer from './screens/Volunteer';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();
const Main = () => {
  const theme=useTheme();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: theme.colors.tab,
        height: 50,
        borderTopWidth: 0,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        ...styles.shadow,
      }
    })}
  >
    <Tab.Screen name="Home" component={Home} 
    options={{tabBarIcon:({focused,color,size})=>{
      return <View className="items-center justify-center top-3"><MaterialCommunityIcons name='home' color={color} size={size} className="top-10 flex"/></View>;
    }}}/>
    <Tab.Screen name="Community" component={Community}  options={{tabBarIcon:({focused,color,size})=>{
      return <View className="items-center justify-center top-3"><MaterialCommunityIcons name='account-group' color={color} size={size} className="top-10 flex"/></View>;
    }}}/>
    <Tab.Screen name="Disaster" component={Disaster}  options={{tabBarIcon:({focused,color,size})=>{
      return <View className="items-center justify-center top-3"><MaterialCommunityIcons name='alert' color={color} size={size} className="top-10 flex"/></View>;
    }}}/>
    <Tab.Screen name="Volunteer" component={Volunteer}  options={{tabBarIcon:({focused,color,size})=>{
      return <View className="items-center justify-center top-3"><MaterialCommunityIcons name='hand-extended' color={color} size={size} className="top-10 flex"/></View>;
    }}}/>
  </Tab.Navigator>
  )
}

export default Main
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,}
});

