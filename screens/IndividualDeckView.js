import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../styles/globalStyles'

export default function IndividualDeckView({ deckTitle, numOfCards, cards }) {
    return (
        <View style={myStyles.content}>
            <Text style={myStyles.title}>{deckTitle}</Text>
            <Text style={myStyles.numOfCards}>{numOfCards} cards</Text>
            <View style={myStyles.button} >
                <Button title='Add Card' type="outline" buttonStyle={{ width:200, height:50, borderRadius: 30 }} />
            </View>
            <View style={myStyles.button}>
                <Button title='Start Quiz' buttonStyle={{ width: 200, height: 50, borderRadius: 10
                }} />
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
    title: {
        //padding: 20,
        alignSelf: 'center',
        fontSize: 50,

    },
    numOfCards: {
        paddingVertical: 60,
        fontSize: 25,
        alignSelf: 'center',
    },
    content: {
        paddingVertical: 100,
        alignSelf: 'center'
    },
    button: {
        margin: 5,
        paddingTop: 5
    }
})

