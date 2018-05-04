import React, {Component} from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';

export default class ThreeScence extends Component {
    static navigationOptions = {
        title: 'ThreeScence',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="ThreeScence"
                onPress={() =>
                    navigate('Simple', { name: 'Jane' })
                }
            />
        )
    }
}