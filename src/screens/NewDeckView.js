import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { generateUID } from '../utils/data'
import { saveDeckTitle } from '../utils/api'


export default function NewDeckView({ navigation }) {
    const [deckTitle, setDeckTitle] = useState()
    const [deckID, setDeckID] = useState(generateUID())

    //console.log(navigation)

    const addDeck = ({ deckTitle }) => {
        setDeckID(generateUID())
        let newDeck = {
                id: deckID,
                title: deckTitle,
                questions: []
        }
        let deck = {
            id: deckID,
            title: deckTitle,
            numOfCards: 0,
            questions: [],
            updateDecks: navigation.getScreenProps().setDecks             
        }
        saveDeckTitle(newDeck)
        navigation.navigate('IndividualDeckView', deck)
     }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View >
                <View style={myStyles.DeckTitleContainer}>
                    <Text style={myStyles.DeckTitle}>What is the title of your new deck?</Text>
                </View>
                <View style={myStyles.container}>
                    <Input
                        placeholder={'e.g. my first deck'}
                        onChangeText={value => setDeckTitle(value)}
                        value={deckTitle}
                    />
                </View>
                <View style={myStyles.btnContainer}>
                    <Button onPress={() => addDeck({ deckTitle })} title='Submit' buttonStyle={myStyles.submit} />
                </View>
            </View>

        </TouchableWithoutFeedback>
    )

}

const myStyles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        // alignContent: 'center',
        paddingTop: 35,
    },

    TextInput: {
        paddingHorizontal: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 15,
        fontWeight: 'bold',
        //alignSelf: 'center',
    },

    btnContainer: {
        paddingVertical: 80,
    },

    submit: {
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 30,
    },
    DeckTitleContainer: {
        alignContent: 'center',
        paddingTop: 35,
        paddingHorizontal: 80,
    },

    DeckTitle: {
        textAlign: 'center',
        fontSize: 35,
    },
})