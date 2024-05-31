import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from "./HomeScreen"
import 'react-native-reanimated';
import TodoApp from './todo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Главная"}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: "Профиль"}} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: "Настройки"}}/>
        <Stack.Screen name="TodoApp" component={TodoApp} options={{title: "Список дел"}}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
};

export default App;