import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import Input from '../components/input'
import { useRouter } from 'expo-router'
import { Alert } from 'react-native'
import Loading from '../components/Loading'
import Button from '../components/Button'
import { ActivityIndicator } from 'react-native'
import BackButton from '../components/BackButton'
import { useEffect } from 'react'
import Icon from '../assets/icons'


const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);
  const onSubmit =async()=>{
    if (!emailRef.current || !passwordRef.current){
      Alert.alert('login', "please fill all the fields!");
      return;
    }
     // Start loading (show the loading spinner)
  setLoading(true);

  // Simulate an async action (like an API call)
  setTimeout(() => {
    // Stop loading once the action is completed
    setLoading(false);

    // Navigate to the home screen or show an error based on your logic
    router.push('/homePage');
  }, 2000); // Simulate a delay (2 seconds)

  }


  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/*back Button*/}
        <BackButton router={router}/>
        

        {/*welcme back*/   }
        <View>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        {/*login form*/}
        <View style={styles.form}>
            <Text style={{fontSize: hp(1.5), color:theme.colors.text}}>
                Please Log In to continue
            </Text>
            <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your email"
                onChangeText={value=>emailRef.current = value}
            />
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={value=>passwordRef.current=value}
            />
            <Text style={styles.forgotPassword}>
                Forgot Password?
            </Text>
            {/*button*/}
            <Button titles={'Login'} loading={loading} onPress={onSubmit}/>

            {/*footer*/}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account?
              </Text>
              <Pressable onPress={()=>router.push('/signUp')}>
                <Text style={[styles.footerText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>
                  Sign Up
                </Text>
              </Pressable>
            </View>
            

        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:30,
    paddingHorizontal: wp(2), 
    fontWeight:theme.fonts.bold,
    color: theme.colors.text,
    
  },
  welcomeText:{
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color:theme.colors.text,

  },
  form:{
    gap:20
  },
  forgotPassword:{
    textAlign:'right',
    fontWeight:theme.fonts.semibold,
    color: theme.colors.text

  },
  footer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },
  footerText:{
    textAlign:'center',
    color: theme.colors.text,
    fontSize: hp(1.6)

  }


})