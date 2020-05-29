import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './Card'
import { clearLocalNotification, setLocalNotification} from '../utils/NotificationHelper'

export default function Results({ navigation }) {

    let questions = navigation.getParam('quizQuestions').questions //This will not be accessable in the next component if it was not passed to it through navigation.navigate('component', passedVariable)
    let deckID = navigation.getParam('quizQuestions').deckID

    let quizQuestions = {
        deckID,
        questions,
    }

    let answers = navigation.getParam('answers')

    const getResults = (allAnswers) => {

        //console.log(allAnswers)

        let counter = 0
        let totalAnswers = allAnswers.length
        allAnswers.map(answer => {
            if (answer.isCorrect == true && answer.answer === "correct") {
                counter++
            } else if (answer.isCorrect == false && answer.answer === "incorrect") {
                counter++
            }
        })

        //AsyncStorage.setItem('hasSolvedQuiz', JSON.stringify(true))
        clearLocalNotification().then(
            setLocalNotification
        )
        // AsyncStorage.getItem('hasSolvedQuiz').then(res => {
        //     console.log(JSON.parse(res));
            
        // })
        // AsyncStorage.setItem('hasSolvedQuiz', JSON.stringify(false))

        return (
            <View style={myStyles.Container}>
                <Text style={myStyles.Results}>{counter + ' answers are correct out of ' + totalAnswers}</Text>

                <View style={{ paddingVertical: 100 }}>
                    <View style={myStyles.button} >
                        <Button title='Back to the deck' type="outline" onPress={() => navigation.pop(2)} buttonStyle={{ borderColor: 'black', borderWidth: 1, width: 200, height: 50, borderRadius: 30 }} />
                    </View>
                    <View style={myStyles.button}>
                        <Button title='Start Again' onPress={() => { navigation.pop(2); navigation.push('QuizView', quizQuestions) }} buttonStyle={{ width: 200, height: 50, borderRadius: 10 }} />
                    </View>
                </View>

            </View>
        )
    }



    return (
        <View >
            {/* put the following block in FlatList where each card should has a count so that it appears in the Text compoenent below */}

            <View>
                {getResults(answers)}
            </View>

        </View>
    )

}


const myStyles = StyleSheet.create({
    Container: {
        alignContent: 'center',
        paddingTop: 35,
        paddingHorizontal: 80,
    },

    Results: {
        textAlign: 'center',
        fontSize: 25,
    },
    button: {
        alignSelf: 'center',
        margin: 5,
        paddingTop: 5
    },
})