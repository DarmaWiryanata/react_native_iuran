import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <StatusBar style="auto" />
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
});

export default Header
