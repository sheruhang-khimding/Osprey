import { Alert, Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Home from '../assets/icons/Home'
import { theme } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { hp } from '../helpers/common'
import Input from '../components/input'
import { useRouter } from 'expo-router'
import { ActivityIndicator } from 'react-native'
import { wp } from '../helpers/common'
import Button from '../components/Button'
import loading from '../components/Loading'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'


const Signup = () => {
  const router =useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
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
    setLoading(true);

    // Navigate to the home screen or show an error based on your logic
    router.push('/home');
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
            <Text style={styles.welcomeText}>Get Started!</Text>
        </View>

        {/*login form*/}
        <View style={styles.form}>
            <Text style={{fontSize: hp(1.5), color:theme.colors.text}}>
                Please enter the details to create a new account 
            </Text>
            <Input
                icon={<Icon name="user" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your First name"
                onChangeText={value=>nameRef.current = value}
            />
            <Input
                icon={<Icon name="user" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your Last name"
                onChangeText={value=>nameRef.current = value}
            />
            
            <Input
                icon={<Icon name="location" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your Primary Address"
                onChangeText={value=>nameRef.current = value}
            />
            <Input
                icon={<Icon name="call" size={26} strokeWidth={1.6}/>}
                placeholder="Phone number"
                onChangeText={value=>nameRef.current = value}
            />
            <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your Email"
                onChangeText={value=>emailRef.current = value}
            />
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={value=>passwordRef.current=value}
            />

            {/*button*/}
            <Button titles={'Sign Up'} loading={loading} onPress={onSubmit}/>

            {/*footer*/}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
               Already have an account !
              </Text>
              <Pressable onPress={()=>router.push('/login')}>
                <Text style={[styles.footerText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>
                  Sign In
                </Text>
              </Pressable>
              <Pressable onPress={()=>router.push('/profile')}>
                 <Text>profile</Text>
              </Pressable>
              <Pressable onPress={()=>router.push('/homePage')}>
                 <Text>HomePage</Text>
              </Pressable>
            </View>
           
            

        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Signup

const styles = StyleSheet.create({
 
    container:{
      flex:1,
      gap:30,
      paddingHorizontal: wp(2),
      fontWeight:theme.fonts.bold,
      color: theme.colors.text
    },
    welcomeText:{
      fontSize: hp(4),
      fontWeight: theme.fonts.bold,
      color:theme.colors.text,
  
    },
    form:{
      gap:25
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