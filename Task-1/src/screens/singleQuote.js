import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleQuote = ({ quote, author }) => (
  <View style={styles.container}>
    <Text style={styles.quoteText}>{quote}</Text>
    <Text style={styles.authorText}>- {author}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  quoteText: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SingleQuote;
