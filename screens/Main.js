import React, { Component } from 'react';
import {  Button, TextInput, View, Text } from 'react-native';
import styles from './Style';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      Duration: '',
    };
  }

  onSubmit() {
    const { city, Duration } = this.state;
    this.props.navigation.navigate("Result")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Travel Planner enter city and Time</Text>
        <TextInput
          value={this.state.city}
          onChangeText={(city) => this.setState({ city })}
          placeholder={'City'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Duration}
          onChangeText={(Duration) => this.setState({ Duration })}
          placeholder={'Duration in Days'}
          style={styles.input}
        />

        <Button
          title={'Generate'}
          style={styles.input}
          onPress={this.onSubmit.bind(this)}
        />
      </View>
    );
  }
}
