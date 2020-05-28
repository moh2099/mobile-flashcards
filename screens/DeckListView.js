import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, AsyncStorage, FlatList } from 'react-native';
import { styles } from '../styles/globalStyles'
import { ScrollView } from 'react-native-gesture-handler';
import Deck from './Deck'
import { json2array } from '../utils/json2array'

// import DeckListView from './screens/DeckListView'
// import IndividualDeckView from './screens/IndividualDeckView'
// import NewDeckView from './screens/NewDeckView'
// import NewQuestionView from './screens/NewQuestionView'
// import QuizView from './screens/QuizView'
export default function DeckListView({ navigation }) {  //navigation passed from AddNavigatorDeckStack since it was used in the createStackNavigator function
    return (
        <View style={styles.list}>

            <ScrollView>
                {
                    json2array(navigation.getScreenProps().decks).map(deck => {
                        return (
                            <Deck
                                key={deck.id}
                                id={deck.id}
                                title={deck.title}
                                numOfCards={Object.keys(deck.questions).length}
                                navigationProp={navigation}
                                questions={deck.questions}
                                updateDecks={navigation.getScreenProps().setDecks}
                            />)
                    })
                }
            </ScrollView>

            {/* put the decks in FlatList component */}

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

