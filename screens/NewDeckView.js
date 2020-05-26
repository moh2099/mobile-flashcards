import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default function NewQuestionView() {
    const [deckTitle, setDeckTitle] = useState()

    const addDeck = ({ deckTitle }) => {
        console.log(deckTitle)
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