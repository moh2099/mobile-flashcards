import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './Card'
import Swiper from 'react-native-swiper'

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text>
                <Text style={styles.paginationText}>{index + 1}</Text> / {total}
            </Text>
        </View>
    )
}

export default function QuizView({ navigation }) {

    const [counter, setCounter] = useState() //counting asnwered questions
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    let answers = []
    let questions = navigation.getParam('questions')
    let deckID = navigation.getParam('deckID').deckID

    const getAnswer = (qid, answer) => {

        answers.push({ [qid]: answer })

        console.log('START');
        
        answers.map(obj => {
            console.log(obj)
            
        })
        console.log('END');
        

        // console.log(answers.length)
        //console.log(qid + ': ' + answer);
    }


    return (
        <View style={styles.container}>
            {/* put the following block in FlatList where each card should has a count so that it appears in the Text compoenent below */}

            <Swiper showsButtons={true} loop={false} renderPagination={renderPagination}>
                {
                    questions.length < 1 ? (
                        <View>
                            <Text style={styles.noCards} > Sorry but there are no cards in this deck</Text>
                        </View>
                    ) : (
                            questions.map(question => {
                                return (
                                    <View key={deckID} style={styles.slideContainer}>
                                        <Card sendAnswer={getAnswer} key={question} id={question.id} question={question.question} answer={question.answer} />
                                    </View>
                                )
                            })
                        )
                }
            </Swiper>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noCards: {
        padding: 50,
        paddingTop: 200,
        textAlign: 'center',
        fontSize: 30,

    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    paginationStyle: {
        position: 'absolute',
        paddingLeft: 10,
        paddingTop: 10,
    },
    paginationText: {
        color: 'black',
        fontSize: 20
    },
    cardNum: {
        fontSize: 20,
    }
})