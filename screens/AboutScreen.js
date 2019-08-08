import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>
                Hello, I'm Tarrke and this is my first app using React Native.
            </Text>
            <Text>
                The app should be runnning smoothly on every smartphone and is available
                as is.
            </Text>
            <Text>
                Source code can be found on GitHub.
            </Text>
        </View>
    );
}

SettingsScreen.navigationOptions = {
    title: 'About',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});