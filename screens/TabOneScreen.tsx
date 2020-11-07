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
      // axios.get(`http://127.0.0.1:5000/`)
      axios.get(`http://192.168.29.156:5000`)
      .then(res => {
        var redirectUrl = "https".concat(JSON.stringify(res.data).split(":\"https")[1]);
        redirectUrl = redirectUrl.slice(0, redirectUrl.length-2)
        console.log(typeof(redirectUrl));
        console.log(redirectUrl);
        const supported = Linking.canOpenURL(redirectUrl);
        // 1. open URL in embedded browser

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web
          // link should be opened by some browser in the mobile
          Linking.openURL(redirectUrl);
        } else {
          Alert.alert(`Don't know how to open this URL: ${redirectUrl}`);
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
        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Article 3</Text>
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
  buttonTimer: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    paddingTop: 10,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderStyle: 'dashed'
  },
  buttonText: {
    marginBottom: 30,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'sans-serif',
    color: 'white'
  }
});
