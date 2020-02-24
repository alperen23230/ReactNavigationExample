import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Feed from './components/Feed'
import Detail from './components/Detail'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

const App = () => {
  createHomeStack = () => 
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen name="Detail" component={Detail}
        options={{
          title: "Details",
          headerStyle: {backgroundColor: "blue"},
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs}/>
      <Stack.Screen name="Top Tabs" component={createTopTabs}/>
    </Stack.Navigator>

    createTopTabs = () => {
      return(
        <MaterialTopTabs.Navigator>
          <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{title:"Hello"}} />
          <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
          <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
        </MaterialTopTabs.Navigator>
      )
    }
    createBottomTabs = () => {
      return(
        <MaterialBottomTabs.Navigator>
          <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
          <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
          <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
        </MaterialBottomTabs.Navigator>
      )
    }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack}/>
        <Drawer.Screen name="Settings" component={Screen1}/>
        <Drawer.Screen name="Contacts" component={Screen2}/>
        <Drawer.Screen name="Favorites" component={Screen3}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
