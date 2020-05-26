import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export default function NewQuestionView() {
    const [questionText, setQuesionText] = useState()
    const [answerText, setAnswerText] = useState()

    const addCard = ({ questionText, answerText }) => {
        console.log(questionText)
        console.log(answerText)
    }

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View >
                <View style={myStyles.container}>
                    {/* <TextInput multiline={true} style={myStyles.TextInput} placeholder={'e.g. Where do you make Ajax requests in React?'} /> */}
                    <Input
                        placeholder={'Q. What is your question today?'}
                        onChangeText={value => setQuesionText(value)}
                        value={questionText}
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    />

                </View>
                <View style={myStyles.container}>
                    {/* <TextInput multiline={true} style={myStyles.TextInput} placeholder={'e.g. The componentDidMount lifecycle event'} /> */}
                    <Input
                        placeholder={'A. Type the answer please'}
                        onChangeText={value => setAnswerText(value)}
                        value={answerText}
                    />
                </View>
                <View style={myStyles.btnContainer}>
                    <Button onPress={() => addCard({ questionText, answerText })} title='Submit' buttonStyle={myStyles.submit} />
                </View>
            </View>

            {/* <View style={myStyles.QuestionContainer}>
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
            </View> */}
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
    }
})