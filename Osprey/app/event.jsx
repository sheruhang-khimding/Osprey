import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../assets/icons/Search'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper'
import EventSearch from '../components/search'
import Header from '../components/Header'

const event = () => {
    const router= useRouter();
  return (
    <ScreenWrapper>
        <Header router={router}/>
        <EventSearch router ={router}/>
      <Text>event</Text>
    </ScreenWrapper>
  )
}

export default event

const styles = StyleSheet.create({})