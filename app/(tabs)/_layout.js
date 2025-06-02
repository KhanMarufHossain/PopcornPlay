import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name= "Home"/>
        <Tabs.Screen name = "movies"/>
        <Tabs.Screen name = "tvShows"/>
    </Tabs>
  )
}

export default _layout;