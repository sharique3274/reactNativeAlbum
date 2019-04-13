import React, { Component } from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import AlbumLists from "./src/components/AlbumLists";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header heading="Sharique's Album Collections" />
        <AlbumLists />
      </View>
    );
  }
}
