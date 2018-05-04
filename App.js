import React from 'react';
import Home from "./app/page/Home";
import SimpleNavigationApp from "./test/SimpleNavigationApp";
import {StackNavigator} from "react-navigation";
import MyScene from "./test/MyScene";
import ThreeScence from "./test/ThreeScence";

const Page = StackNavigator({
    My: {screen: MyScene},
    Simple: {
        screen: SimpleNavigationApp,
        navigationOptions: {
            header: null //隐藏顶部导航栏
        }
    },
    Three: {screen: ThreeScence},

});

export default class App extends React.Component {
    render() {
        return (
            <Page/>
        );
    }
}
