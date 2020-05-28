import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../styles/globalStyles'
import { NavigationActions } from 'react-navigation';

export default function IndividualDeckView({ navigation }) { //navigation passed from AddNavigatorDeckStack since it was used in the createStackNavigator function
    //console.log(navigation.state);

    //navigation.navigate('view', params) note that params need to be an object

    let title = navigation.getParam('title')
    let numOfCards = navigation.getParam('numOfCards')
    let questions = navigation.getParam('questions') //This will not be accessable in the next component if it was not passed to it through navigation.navigate('component', passedVariable)
    let deck_id_fromNaviagtion = navigation.getParam('id')
    let updateDecks = navigation.getParam('updateDecks')
    let deckID = {
        //navigation.navigate('view', params) note that params need to be an object, also note that it will be destructured automatically so you may access it by the keys of the object directly
        deckID: deck_id_fromNaviagtion,
        updateDecks
    }

    let quizQuestions = {
        deckID,
        questions,
    }

    return (
        <View style={myStyles.content}>
            <View>
                <Text style={myStyles.title}>{title != null ? (title) : (navigation.pop())}</Text>
                <Text style={myStyles.numOfCards}>{numOfCards} cards</Text>
            </View>

            <View style={myStyles.button} >
                <Button title='Add Card' type="outline" onPress={() => navigation.navigate('NewQuestionView', deckID)} buttonStyle={{ borderColor: 'black', borderWidth: 1, width: 200, height: 50, borderRadius: 30 }} />
            </View>
            <View style={myStyles.button}>
                <Button title='Start Quiz' onPress={() => navigation.navigate('QuizView', quizQuestions)} buttonStyle={{ width: 200, height: 50, borderRadius: 10 }} />
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
        alignSelf: 'center',
        margin: 5,
        paddingTop: 5
    }
})

