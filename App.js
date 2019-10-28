/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

export default class Main extends Component {
  state = {
    button: false
  }

  render() {
    return <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: !this.state.button ? '#FFF' : '#499dff' }}>
        <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => this.setState({ button: !this.state.button })}>
            <Icon name="power-off" size={250} color={this.state.button ? '#FFF' : '#499dff'} />
          </TouchableWithoutFeedback>
          <View style={{ marginTop: 100, width: 260 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#eae9e9' }}>
              NOW
                        </Text>
            <Text style={{ fontSize: 38, fontWeight: 'bold', color: this.state.button ? '#FFF' : '#5f6769' }}>
              {
                this.state.button ? 'ON' : 'Stand By'
              }
            </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => this.setState({ button: !this.state.button })}>
          <View style={{ flex: 1, marginTop: 100, backgroundColor: this.state.button ? '#FFF' : '#499dff', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 260 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#eae9e9' }}>
                SWITCH TO
                            </Text>
              <Text style={{ fontSize: 38, fontWeight: 'bold', color: !this.state.button ? '#FFF' : '#5f6769' }}>
                {
                  !this.state.button ? 'ON' : 'Stand By'
                }
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  }
}