import React from 'react';
import {StackNavigator} from "react-navigation";
import Root from "./app/page/Root";
import Details from "./app/page/Details";
import {Platform, BackHandler, Alert} from 'react-native';
import ImgBrowsing from "./app/page/ImgBrowsing";

let currentPage = "Root";

const Page = StackNavigator({
    Root: {
        screen: Root,
        navigationOptions: {
            header: null,// 隐藏顶部导航栏
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null, //隐藏顶部导航栏
        },
    },
    ImgBrowsing: {
        screen: ImgBrowsing,
        navigationOptions: {
            header: null, //隐藏顶部导航栏
        },
    },
}, {
    onTransitionStart: (stackNavigator) => {// 页面开始进入

    },
    onTransitionEnd: (stackNavigator) => {// 页面进入完成
        currentPage = stackNavigator.scene.route.routeName
    }
});

export default class App extends React.Component {
    render() {
        return (
            <Page/>
        );
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    _onBackAndroid = () => {
        if (currentPage == "Root") {
            Alert.alert('确定退出吗?','',
                [
                    {text:"确定", onPress:App._alertLeftButton},
                    {text:"取消"},
                ]
            );
            return true;
        }
        return false;
    };

    static _alertLeftButton(){
        BackHandler.exitApp();
    }
}
