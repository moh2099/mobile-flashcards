import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { styles } from '../styles/globalStyles'
import { ScrollView } from 'react-native-gesture-handler';
import Deck from './Deck'
// import DeckListView from './screens/DeckListView'
// import IndividualDeckView from './screens/IndividualDeckView'
// import NewDeckView from './screens/NewDeckView'
// import NewQuestionView from './screens/NewQuestionView'
// import QuizView from './screens/QuizView'
export default function DeckListView({ navigation }) {  //navigation passed from AddNavigatorDeckStack since it was used in the createStackNavigator function
    const [decks, setDecks] = useState({
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    })


    return (
        <View style={styles.list}>
            {/* put the decks in FlatList component */}
            <ScrollView>
                {/* <Button title='try me' /> */}
                <Deck title={decks.React.title} numOfCards={ Object.keys(decks.React.questions).length } navigationProp={navigation} questions={ decks.React.questions }/>
                <Deck title={decks.JavaScript.title} numOfCards={ Object.keys(decks.JavaScript.questions).length } navigationProp={navigation} questions={ decks.JavaScript.questions } />
                <Deck title={'Assemblyx86-64'} numOfCards={2} navigationProp={navigation} questions={ decks.React.questions } />
                <Deck title={'getMe Cards'} numOfCards={7} navigationProp={navigation} questions={ decks.React.questions } />
            </ScrollView>
        </View>
    )
}

// const myStyle = StyleSheet.create({
//     listStyle: {
//         flex: 1,
//         padding: 16,
//         marginTop: 16,
//         backgroundColor: '#f5df64',
//         borderColor: '#bbb',
//         borderWidth: 1,
//         borderStyle: 'dashed',
//         borderRadius: 10
//         //justifyContent: 'space-around',
//         //alignItems: 'center'
//     }

// })

