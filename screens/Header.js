import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/globalStyles'

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{ title }</Text>
    </View>
  );
}
 