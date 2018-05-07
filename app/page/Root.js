import React, {Component} from 'react';
import {Text, Image, View, Platform, BackAndroid, Alert} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import styles from '../style/RootStyle';
import Home from "./Home";
import LocalImg from "../res/img";

const TAB_Recommend = [
    '推荐',
    LocalImg.recommend_unselect,
    LocalImg.recommend_select
];
const TAB_Home = [
    '首页',// 标题
    LocalImg.home_unselect,// 未选中
    LocalImg.home_select// 选中
];
const TAB_Me = [
    '我的',
    LocalImg.me_unselect,
    LocalImg.me_select,
];

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: TAB_Recommend[0],
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tabNavigator} >
                    <TabNavigator.Item
                        selected={this.state.selectedTab == TAB_Recommend[0]}
                        title={TAB_Recommend[0]}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_Recommend[1]}/>}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_Recommend[2]}/>}
                        onPress={() => this.setState({selectedTab: TAB_Recommend[0]})}>
                        <Text>推荐</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab == TAB_Home[0]}
                        title={TAB_Home[0]}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_Home[1]}/>}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_Home[2]}/>}
                        onPress={() => this.setState({selectedTab: TAB_Home[0]})}>
                        <Home navigate={this.props.navigation.navigate}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab == TAB_Me[0]}
                        title={TAB_Me[0]}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_Me[1]}/>}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_Me[2]}/>}
                        onPress={() => this.setState({selectedTab: TAB_Me[0]})}>
                        <Text>我的</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}