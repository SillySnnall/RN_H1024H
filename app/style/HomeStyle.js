import React from 'react';
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ddd',
        height: 240,
        borderRadius: 10,
    },
    img: {
        width: '100%',
        flex: 1,
        borderRadius: 10,
    },
    footer_view:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 20,
    },
    footer_bubbles:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center"
    }
});
module.exports = styles;

