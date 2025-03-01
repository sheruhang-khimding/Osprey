import { View, Text, Image, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'

import { StatusBar } from 'expo-status-bar'
import { router, useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Button from '../components/Button'
import Header from '../components/Header'


const Homepage = () => {
    const router=useRouter();
  return (
    
    <ScreenWrapper bg="white">
        <StatusBar style="dark"/>
        <View><Header router={router}/></View>
        
        <View style={styles.container}>
            

            {/*Homepage Image*/}
            <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/Ringfire.avif')}/>
            {/*title*/}
            <View style={{gap: 20}}>
                <Text style={styles.title}> Osprey </Text>
                <Text style={styles.punchline}>Empowering young females!!!</Text>
            </View>

            {/*footer*/}
            <View style= {styles.footer}>
                    <Button 
                        titles={'Get Started'}
                        buttonStyle={{marginHorizontal: wp(3)}}
                        onPress={() => router.push('/signUp')}
                        />
                    <View style={styles.bottomTextContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Pressable onPress={()=>router.push('/login')}>
                        <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>Login</Text>
                    </Pressable>
                    </View>
                 
            </View>   
        </View> 
    </ScreenWrapper>
  )}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: wp(10)
    },

    welcomeImage: {
        width: wp(100),
        height: hp(30),
        alignSelf: 'center'
    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fonts.extrabold,
        color: theme.colors.text,
        textAlign: 'center'

    },
    punchline: {
        fontSize: hp(1.7),
        color: theme.colors.text,
        textAlign: 'center',
        paddingHorizontal: wp(10)

    },
    footer: {
        width: '100%',
        gap: 30,
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText: {
        fontSize: hp(1.6),
        color: theme.colors.text,
        fontWeight: theme.fonts.bold,
        textAlign: 'center'
    },
})
