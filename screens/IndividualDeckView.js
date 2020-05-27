import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../styles/globalStyles'


export default function IndividualDeckView({ navigation }) { //navigation passed from AddNavigatorDeckStack since it was used in the createStackNavigator function

    let title = navigation.getParam('title')
    let numOfCards = navigation.getParam('numOfCards')
    let questions = navigation.getParam('questions') //This will not be accessable in the next component if it was not passed to it through navigation.navigate('component', passedVariable)
    
    let quizQuestions = {
        questions,
    }


    return (
        <View style={myStyles.content}>
            <Text style={myStyles.title}>{title}</Text>
            <Text style={myStyles.numOfCards}>{numOfCards} cards</Text>
            <View style={myStyles.button} >
                <Button title='Add Card' type="outline" onPress={() => navigation.navigate('NewQuestionView')} buttonStyle={{ width: 200, height: 50, borderRadius: 30 }} />
            </View>
            <View style={myStyles.button}>
                <Button title='Start Quiz' onPress={() => navigation.navigate('QuizView', quizQuestions )} buttonStyle={{ width: 200, height: 50, borderRadius: 10 }} />
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
        color: 'grey'
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

