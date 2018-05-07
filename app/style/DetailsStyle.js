import React from 'react';
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#000'
    },
    item: {
        flex: 1, margin: 5, backgroundColor: '#ddd', height: 130
    },
    img: {
        width: '100%',
        flex: 1
    },
    footer: {
        textAlign: 'center'
    },
    title: {
        flexDirection: 'row',
        marginTop: 10,
        height:25,
        paddingBottom:10,
    },
    title_img: {
        alignSelf:"center",
        width: 20,
        height: 20,
        marginLeft: 15,
    },
    title_view_text:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
    },
    title_text: {
        alignSelf:"center",
        fontSize: 20,
        color: "#1296db",
        marginLeft: 10,
    }
});
module.exports = styles;

