import React from 'react';
import { View } from 'react-native';
import { styles } from './styles/globalStyles'
import RootNavigator from './routes/drawerNavigator'


export default function App() { //There are class components also
  return (
    <View style={styles.container}>

      <RootNavigator />
 
    </View>

  );
}
