import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
// import { uuid } from 'uuidv4'

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Egg' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Juice' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter an item',
        [
          { text: "OK" }
        ],
        { cancelable: true }
      )
    } else {
      setItems(prevItems => {
        return [{ id: 5, text }, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
});

export default App
