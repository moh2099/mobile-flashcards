import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input, ButtonGroup } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { generateUID } from '../utils/data'
import { addCardToDeck, setup } from '../utils/api'
import { render } from 'react-dom';

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
export default class NewQuestionView extends Component {

    state = {
        questionID: generateUID(),
        questionText: '',
        answerText: '',
        selectedIndex: 0,
        isCorrect: true
    }


    // const [questionID, setQuesionID] = useState(generateUID())
    // const [questionText, setQuesionText] = useState()
    // const [answerText, setAnswerText] = useState()

    //navigation.navigate('view', params) note that params need to be an object


    render() {
        let navigation = this.props.navigation
        let deckID = navigation.getParam('deckID')
        let setDecks = navigation.getParam('updateDecks')

        const addCard = () => {
            // setQuesionID(generateUID())
            let newQuestion = {
                deckID,
                id: this.state.questionID,
                question: this.state.questionText,
                answer: this.state.answerText,
                isCorrect: this.state.isCorrect
            }

            addCardToDeck(newQuestion, setDecks)
            navigation.pop()
        }
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View >
                    <View style={myStyles.container}>
                        {/* <TextInput multiline={true} style={myStyles.TextInput} placeholder={'e.g. Where do you make Ajax requests in React?'} /> */}
                        <Input
                            placeholder={'Q. What is your question today?'}
                            onChangeText={value => this.setState({ questionText: value })}
                            value={this.state.questionText}
                        //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        />

                    </View>
                    <View style={myStyles.container}>
                        {/* <TextInput multiline={true} style={myStyles.TextInput} placeholder={'e.g. The componentDidMount lifecycle event'} /> */}
                        <Input
                            placeholder={'A. Type the answer please'}
                            onChangeText={value => this.setState({ answerText: value })}
                            value={this.state.answerText}
                        />
                    </View>
                    <View>
                        <ButtonGroup
                            onPress={(index) => index == 0 ? this.setState({ selectedIndex: 0, isCorrect: true }) : this.setState({ selectedIndex: 1, isCorrect: false })}
                            selectedIndex={this.state.selectedIndex}
                            buttons={['correct', 'incorrect']}
                            containerStyle={{ height: 50 }}
                        />
                    </View>
                    <View style={myStyles.btnContainer}>
                        <Button onPress={() => addCard()} title='Submit' buttonStyle={myStyles.submit} />
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
}