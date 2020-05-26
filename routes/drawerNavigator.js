import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import AddDecksNavigatorStack from './AddDeckStack'
import DecksNavigatorStack from './DecksStack'

const screens = {
    Decks: {
        screen: DecksNavigatorStack
    },
    addDeck: {
        screen: AddDecksNavigatorStack
    }
}

const RootNavigator = createDrawerNavigator(screens)

export default createAppContainer(RootNavigator)