import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import NewDeckView from '../screens/NewDeckView'
import IndividualDeckView from '../screens/IndividualDeckView'
import NewQuestionView from '../screens/NewQuestionView'
import QuizView from '../screens/QuizView'
import { createAppContainer } from 'react-navigation'
import { customHeaderStyles } from '../styles/header'
import Header from '../screens/Header'

const screens = { //note that this will pass navigation as props into every component passed to createStackNavigator so that it used to navigate between compoennts
   
    NewDeckView: { //NOTE the header is added for the main or start pages of the stackNavigator, others pages do not need the menu icon that included in the header
        screen: NewDeckView,
        navigationOptions: ({ navigation }) => { //navigation passed by createStackNavigator
            return {
                headerTitle: () => <Header title='New Deck' navigation={navigation} />
            }
        }
    },
    IndividualDeckView: {
        screen: IndividualDeckView,
        navigationOptions: {
            title: 'View Deck',
            headerTitleStyle: {
                //You need add the flex first then the property textAlign would work
                flex: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                paddingRight: 50
            }
        }

    },
    NewQuestionView: {
        screen: NewQuestionView,
        navigationOptions: {
            title: 'New Card',
            headerTitleStyle: {
                //You need add the flex first then the property textAlign would work
                flex: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                paddingRight: 50
            }
        }
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            title: 'Quiz View',
            headerTitleStyle: {
                //You need add the flex first then the property textAlign would work
                flex: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                paddingRight: 50
            }
        }
    }
}

const AddDecksNavigatorStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#f4511e', height: 60 }
    }
})

export default AddDecksNavigatorStack

{/* 

DeckListView->  [ 
    
        IndividualDeckView-> 
                        [
                             newQuestionView,
                             QuizView
                        ]
                
                ]


NewDeckView->IndividdualDeckView->...etc 
 
            
*/ }
