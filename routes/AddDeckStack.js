import { createStackNavigator } from 'react-navigation-stack'
import  NewDeckView  from '../screens/NewDeckView'
import  IndividualDeckView  from '../screens/IndividualDeckView'
import  NewQuestionView  from '../screens/NewQuestionView'
import  QuizView  from '../screens/QuizView'


const screens = {
    newDeck: {
        screen: NewDeckView
    },

    deckView: {
        screen: IndividualDeckView
    },

    newCard: {
        screen: NewQuestionView
    },

    startQuiz: {
        screen: QuizView
    }

}

const AddDecksNavigatorStack = createStackNavigator(screens)

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
