import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    const { heading } = this.props;
    return (
      <View style={styles.myView}>
        <Text style={styles.myText}>{heading}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: "#F8F8F8",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.7
  },
  myText: {
    marginTop: 25,
    fontSize: 20
  }
});
