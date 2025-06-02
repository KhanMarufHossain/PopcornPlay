import { View, Text } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router/stack';

const _layout = () => {
  return (
   
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            title: "Main Menu",
            headerShown: false
          }}
        />
      </Stack>
    
  )
}

export default _layout;