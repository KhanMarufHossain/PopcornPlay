import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarPosition: 'top'}}>
        <Tabs.Screen name= "moviesHome" />
        <Tabs.Screen name ="tvShowsHome"/>
    </Tabs>
  )
}

export default _layout