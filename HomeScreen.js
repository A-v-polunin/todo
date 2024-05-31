import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      setCurrentTime(formattedTime);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , gap: '20px'}}>
      <Text style={{ fontSize: '30px' }}>2 Лабараторная работа</Text>
      <Text style={{ fontSize: '20px' }}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Go to Todo"
        onPress={() => navigation.navigate('TodoApp')}
      />
    </View>
  );
};

export default HomeScreen;