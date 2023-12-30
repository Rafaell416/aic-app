import { View, StyleSheet, Text } from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home