import React, { Component } from "react";
import { ScrollView } from "react-native";
import AlbumDetails from "./AlbumDetails";

export default class AlbumLists extends Component {
  state = {
    album: []
  };
  componentDidMount() {
    const url = "http://rallycoding.herokuapp.com/api/music_albums";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ album: data });
      })
      .catch(err => console.log(err));
  }

  renderAlbum = () => {
    console.log(this.state.album, "this is the render from the AlbumList");
    return this.state.album.map(alb => (
      <AlbumDetails key={alb.title} album={alb} />
    ));
  };
  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbum()}</ScrollView>;
  }
}
