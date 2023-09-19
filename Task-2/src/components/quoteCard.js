import React, { useState,useEffect } from 'react'
import { View, Text, Button, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';

const QuoteCard = ({ quote, author }) => {
    const [scale,setScale] = useState(1);
    const [isScaling, setIsScaling] = useState(false);

    const startScaling = () => {
        setIsScaling(true);
        setScale(1.2); // Increase the scale to make everything bigger
      };
    
      useEffect(() => {
        let timer;
    
        if (isScaling) {
          // After 30 seconds, stop the scaling animation
          timer = setTimeout(() => {
            setScale(1); // Reset the scale back to normal
            setIsScaling(false);
          }, 30000);
        }
        return () => clearTimeout(timer);
    }, [isScaling]);

return(
    <View style={styles.container}>
    <TouchableOpacity onPress={startScaling}>
        <View style={[styles.card, { transform: [{ scale }] }]} onPress={startScaling}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Text style={styles.authorText}>BY-{author}</Text>
    </View></TouchableOpacity>
    </View>
  );}

 
 const styles = StyleSheet.create({
    
    card: {
      backgroundColor: '#FCD3FF',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#0000',
      width:350
      
    },
    quoteText: {
      fontSize: 18,
      marginBottom: 8,
    },
    authorText: {
      fontSize: 14,
      textAlign: 'right',
    },
  });
  export default QuoteCard;