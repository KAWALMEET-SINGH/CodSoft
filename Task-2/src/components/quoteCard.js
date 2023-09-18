import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const QuoteCard = ({ quote, author ,onPress}) => (
    <View style={styles.card} onPress={onPress}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Text style={styles.authorText}>BY-{author}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    
    card: {
      backgroundColor: '#FCD3FF',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#0000',
      width:300
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