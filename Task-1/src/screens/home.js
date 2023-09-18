// MyApp/HomePage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const HomePage = (props) => {
    const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Manage Your</Text>
      <Text style={styles.title}>Everyday Daily Tasks</Text>
     <Image
        style={styles.heroImage}
        source={require('../../assets/undraw_Reminder_re_fe15.png')}
      />
      
      <TouchableOpacity onPress={() => {navigate("TodoList")}} style={styles.getStartedButton}>
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff",
  },
  heroImage: {
    margin:15,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  getStartedButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6C63FF', 
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title:{
    color:"#323232",
    fontSize:28,
    fontWeight:"700",
   
  }
});

export default HomePage;
