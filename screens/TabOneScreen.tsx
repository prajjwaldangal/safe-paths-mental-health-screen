import React, { Component } from 'react';
// import * as request from "request-promise-native";
import axios from 'axios';
import { Alert, Platform, StyleSheet, Button, Text, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View,
  Linking} from 'react-native';

export default class Touchables extends Component {
  // componentDidMount() {
  //   console.log('I was triggered during componentDidMount')
  // }
  _onPressButton() {
      // axios.get(`http://0.0.0.0:5000/`)
      axios.get(`http://10.0.0.116:5000/`)
      .then(res => {
        console.log(res.data);
        rdrtUrl = res.data;
        const supported = await Linking.canOpenURL(rdrtUrl);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(rdrtUrl);
        } else {
          Alert.alert(`Don't know how to open this URL: ${rdrtUrl}`);
        }
    }).catch(function (error) {
      console.log(error);
    });
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Article 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Article 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center'
  },
  Button: {
	alignItems: 'center'
  }	 ,
  buttonTimer: {
    flex: 1, flexDirection: 'row'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
