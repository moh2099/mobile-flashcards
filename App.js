import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import { styles } from './src/styles/globalStyles'
import RootNavigator from './src/routes/drawerNavigator'
import { setup, deleteEverything } from './src/utils/api'
import { setLocalNotification } from './src/utils/NotificationHelper'

export default function App() { //There are class components also
  const [decks, setDecks] = useState({})
  // const [decks, setDecks] = useState()
  
  useEffect(() => { 
    setLocalNotification()
  })

  useEffect(() => {
    //This is used instead of componentDidMount and there are other usages too for it ( userEffect mimics these lifecycle fucntions but do not replace them)
    //the second paramter in useEffect(1stPara, 2ndPara) is to tell react to render again if the paramater changed, and if there were no 2nd paramter then it will keep rendering infinitely. 
    //By passing in an empty array, we're telling React not to track any changes, only run once, effectively simulating componentDidMount.
    
    
    //deleteEverything()
    AsyncStorage.getItem('data').then(res => {
      if (res == null) {
        setup()
        AsyncStorage.getItem('data').then(res => {
          setDecks(JSON.parse(res))
        })
      } else {
        setDecks(JSON.parse(res))
        //console.log(decks);
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      {
        //console.log(decks.length != null)
      }
      {
        Object.keys(decks).length > 0 != null ? (
          <RootNavigator
            //screenProps is used to pass parameters through all components using navigation.getScreenProps()
            screenProps={{ decks, setDecks }}
          />
        ) : (
            <Text style={{ paddingVertical: 300, alignSelf: 'center', fontSize: 25, fontWeight: "bold" }} >Loading...</Text>
          )
      }
    </View>

  )

}
