import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './Card'

export default function QuizView() {
    return (
        <View>
            {/* put the following block in FlatList where each card should has a count so that it appears in the Text compoenent below */}
            <View>
                <Text style={myStyles.cardNum}>1/2</Text>
            </View>
            <Card question={'Does React Native works with Android?'} answer={'A library for managing user interfaces'} />
        </View>
    )

}

const myStyles = StyleSheet.create({

    cardNum: {
        fontSize: 20,
     }
})