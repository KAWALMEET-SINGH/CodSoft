import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import QuoteCard from '../components/quoteCard';


const QuoteOfTheDay = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    // Make an API call to fetch all quotes
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {quotes.map((quoteData, index) => (
        <QuoteCard
          key={index}
          quote={quoteData.text}
          author={quoteData.author}
        />
      ))}
      <Button title="Refresh" onPress={() => fetchQuotes()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default QuoteOfTheDay;