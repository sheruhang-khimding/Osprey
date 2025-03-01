// ProfileScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { useRouter } from 'expo-router';
import { wp } from '../helpers/common';
import { theme } from '../constants/theme';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Header from '../components/Header';

// Dummy data for profile
const userProfile = {
  name: 'Marie Doe',
  bio: 'A passionate developer who loves coding and coffee. Exploring new technologies every day!',
  profilePicture: '', // Replace with an actual image URL or a local asset
  email: 'mariedoe@example.com',
  phone: '+1 234 567 890',
  location: 'San Francisco, CA',
};

const ProfileScreen = () => {
    const router = useRouter()
  return (
    <ScreenWrapper>
    {/*Back button*/}
          
          <Header router={router}/>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image source={require('../assets/images/homeImage.jpg')} style={styles.profilePicture} />
      </View>

      {/* User Name */}
      <Text style={styles.name}>{userProfile.name}</Text>

      {/* Bio */}
      <Text style={styles.bio}>{userProfile.bio}</Text>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Email:</Text>
        <Text style={styles.detailText}>{userProfile.email}</Text>

        <Text style={styles.detailTitle}>Phone:</Text>
        <Text style={styles.detailText}>{userProfile.phone}</Text>

        <Text style={styles.detailTitle}>Location:</Text>
        <Text style={styles.detailText}>{userProfile.location}</Text>
      </View>

      {/* Edit Button */}
      <Button titles={'Edit Profile'} onPress={() => alert('Edit profile')}>
      </Button>
    </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    gap:30,
    paddingHorizontal: wp(2), 
    fontWeight:theme.fonts.bold,
    color: theme.colors.text
  },
  profilePictureContainer: {
    marginTop:wp(7),
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  detailsContainer: {
    marginBottom: 30,
    alignItems:'center'
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  
});

export default ProfileScreen;
