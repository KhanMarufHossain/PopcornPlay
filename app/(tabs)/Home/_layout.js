import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarPosition: 'top',
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          height: 120,
        },
        tabBarActiveTintColor: '#FF2E63',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FF2E63',
          height: 3,
        },
      
        headerShown: false, 
      }}
    >
        <Tabs.Screen 
          name="moviesHome" 
          options={{
            title: "Movies",
          }}
        />
        <Tabs.Screen 
          name="tvShowsHome"
          options={{
            title: "TV Shows",
          }}
        />
    </Tabs>
  )
}

export default _layout