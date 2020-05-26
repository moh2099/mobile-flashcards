import { createStackNavigator } from 'react-navigation-stack'
import  NewDeckView  from '../screens/NewDeckView'
import  IndividualDeckView  from '../screens/IndividualDeckView'
import  NewQuestionView  from '../screens/NewQuestionView'
import  QuizView  from '../screens/QuizView'

const screens = {
    decksList: {
        screen: DeckListView
    },

    deckView: {
        screen: IndividualDeckView
    },

    newCard: {
        screen: newQuestionView
    },

    startQuiz: {
        screen: QuizView
    }

}

const DecksNavigatorStack = createStackNavigator(screens)
 
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
