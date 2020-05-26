import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default function Card({ question, answer }) {
    const [placeholder, setPlaceholder] = useState('Answer')

    return (
        <View>
            <View style={myStyles.QuestionContainer}>
                <Text style={myStyles.Question}>{question}</Text>
            </View>
            <View>
                <Text style={myStyles.Answer}> {placeholder} </Text>
            </View>
            <View style={myStyles.buttonCorrect} >
                <Button onPress={() => setPlaceholder(answer)} title='Correct' buttonStyle={{ width: 200, height: 50, borderRadius: 30, backgroundColor: 'green' }} />
            </View>
            <View style={myStyles.buttonInCorrect}>
                <Button onPress={() => setPlaceholder(answer)} title='Incorrect' buttonStyle={{ width: 200, height: 50, borderRadius: 30, backgroundColor: 'red' }} />
            </View>
        </View>
    )

}

const myStyles = StyleSheet.create({
    QuestionContainer: {
        alignContent: 'center',
        paddingTop: 35,
        paddingHorizontal: 80,
    },

    Question: {
        textAlign: 'center',
        fontSize: 35,
    },

    Answer: {
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'red'
    },

    buttonCorrect: {
        margin: 5,
        paddingTop: 25,
        paddingVertical: 20,
        alignSelf: 'center'
    },

    buttonInCorrect: {
        alignSelf: 'center'
    },

})