import React, { Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class MyScene extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="下一啊"
                onPress={() =>
                    navigate('Simple', { name: 'Jane' })
                }
            />
        )
    }
}