import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio1 = ({name}) => {
  return (
    <View style={styles.container}>
      <Text>Olá, {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    backgroundColor: 'white'
  }
})
export default Exercicio1