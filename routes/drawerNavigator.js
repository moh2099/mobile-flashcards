import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import AddDecksNavigatorStack from './AddNavigatorDeckStack'
import DecksNavigatorStack from './DecksNavigatorStack'

const screens = {
    Decks: {
        screen: DecksNavigatorStack
    },
    AddDeck: {
        screen: AddDecksNavigatorStack,
        navigationOptions: {
            title: 'Add Deck'
        }
    }
}

const RootNavigator = createDrawerNavigator(screens)

export default createAppContainer(RootNavigator)