import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/globalStyles'
import { ScrollView } from 'react-native-gesture-handler';
import Deck from './Deck'
// import DeckListView from './screens/DeckListView'
// import IndividualDeckView from './screens/IndividualDeckView'
// import NewDeckView from './screens/NewDeckView'
// import NewQuestionView from './screens/NewQuestionView'
// import QuizView from './screens/QuizView'
export default function DeckListView() {
    return (
        <View style={styles.list}>
            {/* put the decks in FlatList component */}
            <ScrollView>
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
                <Deck title={'UniCards'} numOfCards={23} />
                <Deck title={'newDeck'} numOfCards={12} />
                <Deck title={'xefj Deck'} numOfCards={31} />
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

