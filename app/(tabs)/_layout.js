import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#FF2E63',
        tabBarInactiveTintColor: '#8D8DAA',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#1A1A2E',
          height: 80,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        <Tabs.Screen 
          name="Home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            ),
            title: "Home",
          }}
        />
        <Tabs.Screen 
          name="movies"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "film" : "film-outline"} size={24} color={color} />
            ),
            title: "Movies",
          }}
        />
        <Tabs.Screen 
          name="tvShows"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "tv" : "tv-outline"} size={24} color={color} />
            ),
            title: "TV Shows",
          }}
        />
    </Tabs>
  )
}

export default _layout;