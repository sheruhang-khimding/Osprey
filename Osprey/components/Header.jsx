import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can change this to any other icon set
import { theme } from '../constants/theme'; // Assuming you have a theme file
import { wp, hp } from '../helpers/common'; // Responsive helper
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

const Header = () => {
    const router =useRouter();
  return (
    <View style={styles.container}>
      {/* Osprey Text */}
      <Text style={styles.ospreyText}>Osprey</Text>

      {/* Icons & Search Section */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon} >
          <Icon name="search" size={hp(3)} color={theme.colors.primaryDark} />
        </TouchableOpacity>
        <Pressable style={styles.icon} onPress={()=> router.push('/homePage')}>
          <Icon name="home" size={hp(3)} color={theme.colors.primaryDark} />
        </Pressable>
        <TouchableOpacity style={styles.icon}>
          <Icon name="calendar" size={hp(3)} color={theme.colors.primaryDark} />
        </TouchableOpacity>
        <Pressable style={styles.icon} onPress={() => router.push('/profile')}>
          <Icon name="user" size={hp(3)} color={theme.colors.primaryDark} />
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
});

export default Header;
