import React, { Component } from 'react';
import {  Button, TextInput, View, Text,ActivityIndicator } from 'react-native';
import styles from './Style';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      Duration: '',
      loading:'false'
    };
  }
  onLoader () {
    this.setState({loading:'true'});
    setTimeout(() => {
      this.setState({loading:'false'});
      const { city, Duration } = this.state;
      this.props.navigation.navigate("Result")
    }, 3000);
  };

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
          onPress={this.onLoader.bind(this)}
        />

        {this.state.loading === 'true' && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

