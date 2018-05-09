import React from 'react';
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#000'
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
    footer: {
        textAlign: 'center'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
    },
    title_view: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center"
    },
    title_img: {
        width: 20,
        height: 20,
    },
    title_text: {
        fontSize: 13,
        color: "#1296db",
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

