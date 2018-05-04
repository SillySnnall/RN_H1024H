import React, {Component} from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';

export default class SimpleNavigationApp extends Component {
    static navigationOptions = {
        title: 'SimpleNavigationApp',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="第啊三个"
                onPress={() =>
                    navigate('Simple', { name: 'Jane' })
                }
            />
        )
    }
}