import React, {Component} from "react";
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import PhotoBrowser from 'react-native-photo-browser';


const images = [
    {photo: 'http://192.168.100.168:8080/res/img/91cf941d9b064f72bec0669fafc14bf5.jpg',},
    {photo: 'http://192.168.100.168:8080/res/img/b753d9ae84ad468990499cd52638c797.jpg',},
    {photo: 'http://192.168.100.168:8080/res/img/2546c9f893eb428c901ff8c87f695f45.jpg',}];

export default class ImgBrowsing extends Component {

    render() {
        // navigate = this.props.navigate;
        // irType = this.props.navigation.state.params.irType;
        return (
            <PhotoBrowser
                onBack={this._goBack}
                mediaList={images}
                initialIndex={0}
                displayActionButton={false}
                displayTopBar={false}
                displayNavArrows = {false}
            />
        );
    }
}