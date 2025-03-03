import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { theme } from '../constants/theme'; 
import { wp, hp } from '../helpers/common'; 
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { LocalRouteParamsContext } from 'expo-router/build/Route';

const Header = () => {
    const router =useRouter();
  return (
    <View style={styles.container}>
      {/* Osprey Text */}
      <TouchableOpacity onPress={()=> router.push('/about')}>
      <Text style={styles.ospreyText}>Osprey</Text>
      </TouchableOpacity>

      {/* Icons & Search Section */}
      <View style={styles.iconContainer}>
        <Pressable style={styles.icon} onPress={()=> router.push('/homePage')}>
          <Icon name="home" size={hp(3)} color={theme.colors.primaryDark} />
        </Pressable>
        <Pressable style={styles.icon} onPress={()=>router.push('/event')}>
          <Icon name="calendar" size={hp(3)} color={theme.colors.primaryDark} />
        </Pressable>
        <Pressable style={styles.icon} onPress={() => router.push('/profile')}>
          <Image
            source={require('../assets/images/profile.jpeg')} // Replace with your profile image URL
            style={styles.profileImage}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    paddingBottom: hp(2),
    backgroundColor: theme.colors.background, // Set the background color for header
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ospreyText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: theme.colors.primaryDark,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(4), // Space between the icons
  },
  icon: {
    padding: hp(1),
  },
  profileImage: {
    width: hp(7), 
    height: hp(7), 
    borderRadius: hp(9), 
    borderWidth: 1,
    borderColor: theme.colors.primaryDark, 
  },
})

export default Header;
