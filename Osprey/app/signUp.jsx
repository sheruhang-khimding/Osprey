import React, { useState, useRef } from "react";
import { Alert, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import Input from "../components/input"; 
import { useRouter } from "expo-router";
import Button from "../components/Button";
import Icon from "../assets/icons";
import BackButton from "../components/BackButton";
import DateTimePicker from '@react-native-community/datetimepicker';
import Calender from "../assets/icons/calender";

const Signup = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState(new Date()); // Holds the selected date of birth
  const [showDatePicker, setShowDatePicker] = useState(false); // Controls visibility of the date picker

  const onSubmit = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !nameRef.current ||
      !lastNameRef.current ||
      !addressRef.current ||
      !phoneRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/login"); // Redirect to home after successful submission
    }, 2000); // Simulate a 2-second delay
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        {/* Back Button */}
        <BackButton router={router} />

        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Get Started!</Text>
        </View>

        {/* Signup Form */}
        <View style={styles.form}>
          <Text style={styles.formText}>Please enter the details to create a new account</Text>

          {/* First Name and Last Name on the same line */}
          <View style={styles.nameRow}>
            <Input
              icon={<Icon name="user" size={26} strokeWidth={1.6} />}
              placeholder="Enter your First name"
              onChangeText={(value) => (nameRef.current = value)}
            />
            <Input
              icon={<Icon name="user" size={26} strokeWidth={1.6} />}
              placeholder="Enter your Last name"
              onChangeText={(value) => (lastNameRef.current = value)}
            />
          </View>

          {/* Other input fields */}
          <Input
            icon={<Icon name="location" size={26} strokeWidth={1.6} />}
            placeholder="Enter your Primary Address"
            onChangeText={(value) => (addressRef.current = value)}
          />

          {/* Date of Birth Picker */}
          <Pressable style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateText}>{dob.toDateString()}</Text>
            <Calender width={26} height={26} />
          </Pressable>

          {/* DatePicker Modal */}
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dob}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your Email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />

          {/* Sign Up Button */}
          <Button titles={"Sign Up"} loading={loading} onPress={onSubmit} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingHorizontal: wp(5),
    paddingVertical: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
    textAlign: "center",
  },
  formText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: hp(3),
  },
  form: {
    gap: 25,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp(3),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: hp(3),
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(3),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: hp(2),
  },
  dateText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
})

export default Signup;
