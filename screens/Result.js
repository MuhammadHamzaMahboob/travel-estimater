import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Style';

export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.containersi}>
        <Card title="Local Modules" elevation={7}>
          <Text style={styles.paragraph}>
            This is a card from the react-native-elements
          </Text>
        </Card>
      </View>
    );
  }
}

