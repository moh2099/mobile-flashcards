import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './screens/DeckListView'
import IndividualDeckView from './screens/IndividualDeckView'
import NewDeckView from './screens/NewDeckView'
import NewQuestionView from './screens/NewQuestionView'
import QuizView from './screens/QuizView'


export default function App() {
  return (
    <View style={styles.container}>
      <DeckListView />
      {/* <IndividualDeckView />
      <QuizView />
      <NewQuestionView />
      <NewDeckView /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
