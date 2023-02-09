import React from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './Style';

export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.containersi}>
        <View style={styles.button}>
            <Ionicons name="ios-arrow-back" size={25} color="#000" onPress={() => this.props.navigation.goBack()}/>
        </View>
        <View>
          <View style={{ marginTop: 150 }}>
            <Card >
              <Text style={styles.paragraph}>
                This is a card from the react-native-elements
              </Text>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}
