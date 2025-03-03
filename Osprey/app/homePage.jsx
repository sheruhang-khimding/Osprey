import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../helpers/common'; // Adjust to your helper for responsive scaling
import { theme } from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/Header';

const MainPage = () => {
  const router = useRouter();

  // Sample event data
  const eventList = [
    {
      id: '1',
      image: 'https://example.com/event1.jpg',
      title: 'Event 1',
      description: 'This is a description of event 1.',
      user: 'User1',
      likes: 24,
      comments: 5,
    },
    {
      id: '2',
      image: 'https://example.com/event2.jpg',
      title: 'Event 2',
      description: 'This is a description of event 2.',
      user: 'User2',
      likes: 17,
      comments: 2,
    },
    {
      id: '3',
      image: 'https://example.com/event3.jpg',
      title: 'Event 3',
      description: 'This is a description of event 3.',
      user: 'User3',
      likes: 33,
      comments: 9,
    },
    {
      id: '4',
      image: 'https://example.com/event4.jpg',
      title: 'Event 4',
      description: 'This is a description of event 4.',
      user: 'User4',
      likes: 12,
      comments: 1,
    },
    {
      id: '5',
      image: 'https://example.com/event5.jpg',
      title: 'Event 5',
      description: 'This is a description of event 5.',
      user: 'User5',
      likes: 5,
      comments: 0,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventList);

  // Filter events based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = eventList.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filteredData);
  };

  // Render each event item
  const renderEventItem = ({ item }) => (
    <View style={styles.card}>
      {/* Event Image */}
      <Image source={{ uri: item.image }} style={styles.eventImage} />

      <View style={styles.cardContent}>
        {/* Title and User */}
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventUser}>Hosted by {item.user}</Text>
        
        {/* Event Description */}
        <Text style={styles.eventDescription}>{item.description}</Text>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="heart" size={24} color={theme.colors.primaryDark} />
            <Text style={styles.actionText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="comment" size={24} color={theme.colors.primaryDark} />
            <Text style={styles.actionText}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="share" size={24} color={theme.colors.primaryDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <Header router={router} />
      <View style={styles.container}>
        <StatusBar style="dark" />

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for events"
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={theme.colors.secondaryText}
          />
        </View>

        {/* Event List */}
        <FlatList
          data={filteredEvents}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  list: {
    paddingBottom: hp(10), // Space at the bottom to avoid content being cut off
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
  eventImage: {
    width: '100%',
    height: hp(30),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: wp(4),
  },
  eventTitle: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  eventUser: {
    fontSize: hp(1.8),
    color: theme.colors.secondaryText,
    marginVertical: hp(1),
  },
  eventDescription: {
    fontSize: hp(1.6),
    color: theme.colors.text,
    marginVertical: hp(1),
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  actionText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
  searchContainer: {
    marginBottom: hp(3),
    marginTop: hp(1),
    paddingHorizontal: wp(4),
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: theme.radius.xl,
    paddingVertical: hp(1.5),
  },
  searchInput: {
    fontSize: hp(1.8),
    color: theme.colors.text,
    paddingLeft: wp(4),
  },
})

export default MainPage;
