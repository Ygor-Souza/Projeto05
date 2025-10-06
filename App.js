import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import about from "./screens/about";

export default function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#4c689eff",
            width: "60%",
          },
          drawerActiveTintColor: "#b8eeffff",
          drawerActiveBackgroundColor: "#213c71ff",
          drawerInactiveTintColor: "#fff",
        }}
      >
        <Drawer.Screen 
          name="about"
          component={about}
          options={{
            headerShown: false,
            drawerItemStyle: {display : "none"},
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
