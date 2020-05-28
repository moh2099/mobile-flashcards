import { AsyncStorage } from 'react-native'
import { initState } from './data'
import { json2array } from './json2array'


export const setup = () => {
    AsyncStorage.setItem('data', JSON.stringify(initState))
    alert('The setup has finished successfully!')
}

export const deleteEverything = () => {
    AsyncStorage.removeItem('data')
    alert('all deleted')
}


export const getDecks = () => {
    let data = null
    //return all of the decks along with their titles, questions, and answers.
    //AsyncStorage.removeItem('data') 
    AsyncStorage.getItem('data').then(res => {
        if (res == null) {
            setup()
        }
        data = JSON.parse(res)
        // console.log(data)
    })
    return data
}

export const getDeck = (deckID) => {
    //return the deck associated with that id.
}

export const saveDeckTitle = (newDeck) => {

    AsyncStorage.getItem('data').then(res => {
        let data = json2array(JSON.parse(res));
        data.push(newDeck)
        AsyncStorage.setItem('data', JSON.stringify(data))

    })
}

export const addCardToDeck = (newQuestion, setDecks) => {
    //console.log(card.deckID)
    let { deckID, id, question, answer, isCorrect } = newQuestion
    //let isCorrect = true

    AsyncStorage.getItem('data').then(res => {
        let data = JSON.parse(res)
        json2array(data).map(deck => {
            if (deck.id === deckID) {
                //let newCard = { id, question, answer}
                deck.questions.push({ id, question, answer, isCorrect })

            }


        })
        AsyncStorage.setItem('data', JSON.stringify(data))
        AsyncStorage.getItem('data').then(res => {
            let data = JSON.parse(res)
            setDecks(data) // setDecks is passed from DecksList through multiple components as props
        })
    })

}
