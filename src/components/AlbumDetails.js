import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

class AlbumDetails extends Component {
  onButtonPress = () => {
    Linking.openURL(this.props.album.url);
    console.log("this button is pressed");
  };
  render() {
    const { album } = this.props;
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: album.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContentStyles}>
            <Text style={styles.headerTextStyle}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.album.image }}
          />
        </CardSection>
        <CardSection>
          <Button onUserPress={this.onButtonPress} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyles: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
