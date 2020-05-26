import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './screens/DeckListView'
import IndividualDeckView from './screens/IndividualDeckView'
import NewDeckView from './screens/NewDeckView'
import NewQuestionView from './screens/NewQuestionView'
import QuizView from './screens/QuizView'
import { styles } from './styles/globalStyles'
// import Header from './screens/Header'
import { Header } from 'react-native-elements'


export default function App() { //There are class components also
  return (
    <View style={styles.container}>
      {/* <Header title={'Mobile Flashcards'} /> */}
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Mobile Flashcards', style: { fontSize: 23, color: '#fff' } }}
       // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View style={styles.content}>
        <View style={styles.list} >
          <DeckListView />
          {/* <IndividualDeckView deckTitle={'UniCard'} numOfCards={5} />
          <QuizView />
          <NewQuestionView />
          <NewDeckView /> */}

        </View>
      </View>
    </View>

  );
}
