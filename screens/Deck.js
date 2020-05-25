import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const pressHandlder = () => { 
    //navigiate to individualDeckView, params: deckTitle, deckNumOfCards and cards(questions)
}

export default function DeckListView({ title, numOfCards }) {
    return (
        <TouchableOpacity>
            <View style={myListStyles.deckStyle} onPress={() => pressHandlder}>
                <Text style={myListStyles.title}>{title}</Text>
                <Text style={myListStyles.cardsNum}>{numOfCards} cards</Text>
            </View>
        </TouchableOpacity>
    )
}

const myListStyles = StyleSheet.create({
    deckStyle: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        backgroundColor: '#f5df64',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        //justifyContent: 'space-around',
        //alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    cardsNum: {
        fontSize: 15,
        color: 'grey'
    }


})

