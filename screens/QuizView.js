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
    const [isAnswered, setIsAnswered] = useState(true)

    let answers = []
    let questions = navigation.getParam('questions')
    let deckID = navigation.getParam('deckID').deckID

    const getAnswer = (questionID, answer, isCorrect) => {
    //    if (answers.length > 0) {
          //  let n = []
            // answers.map(obj => {
            //     let qid = obj.id
            //     let answer = obj.answer

            //     if (qid === questionID) {
            //         console.log('The questions is already answered: ' + questionID)
            //     } else {
            //         n.push({ id: questionID, answer: answer })
            //     }
            // })

             answers.push({ id: questionID, answer: answer, isCorrect })

            //REMOVING DUPLUCATE OBJECTS
            var obj = {};
            for (var i = 0, len = answers.length; i < len; i++)
                obj[answers[i]['id']] = answers[i];

            answers = new Array();
            for (var key in obj)
                answers.push(obj[key]);
            //REMOVING DUPLUCATE OBJECTS


        // } else {
        //     //adding for the first time
        //     answers.push({ id: questionID, answer: answer })
        // }

        console.log(answers) //Note now you can collect how many isCorrect = true questions so these are the correct questions
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
                                        <Card key={question} sendAnswer={getAnswer} isCorrect={question.isCorrect} id={question.id} question={question.question} answer={question.answer} />
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