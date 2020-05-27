import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const pressHandlder = () => {
    //console.log('y');
    //navigiate to individualDeckView, params: deckTitle, deckNumOfCards and cards(questions)
}

export default function Deck({ title, numOfCards, navigationProp, questions }) { //NOTE: we passed navigation as props from DeckListView since this compoenent is not in the screen object in the DeckNavigatorStack, otherwise I shouldn't do that, instead I just access it directly as prop

    let navigation = navigationProp;
    let deck = {
        title,
        numOfCards,
        questions
    }
    return (
        <TouchableOpacity onPress={() => navigation.navigate('IndividualDeckView', deck)}>
            {/* Note: since you cannpt use onPress on View component, you may use it with TouchableOpacity as alternative <TouchableOpacity onPress={() => console.log()} /> by wrapping View in it */}

            <View style={myListStyles.deckStyle} >
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

