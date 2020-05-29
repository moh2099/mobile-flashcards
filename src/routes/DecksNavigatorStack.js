import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import DeckListView from '../screens/DeckListView'
import IndividualDeckView from '../screens/IndividualDeckView'
import NewQuestionView from '../screens/NewQuestionView'
import QuizView from '../screens/QuizView'
import Header from '../screens/Header'
import Results from '../screens/Results'


const screens = { //note that this will pass navigation as props into every component passed to createStackNavigator so that it used to navigate between compoennts
    DeckListView: {
        screen: DeckListView,
        navigationOptions: ({ navigation }) => { //navigation passed by createStackNavigator
            return {
                headerTitle: () => <Header title='Decks List' navigation={navigation} />
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
    },
    Results: {
        screen: Results,
        navigationOptions: {
            title: 'Results',
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

const DecksNavigatorStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#f4511e', height: 60 }
    }
})

export default DecksNavigatorStack

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
