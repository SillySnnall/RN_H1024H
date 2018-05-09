import React, {Component} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import styles from '../style/DetailsStyle';
import HttpManager from "../http/HttpManager";
import HttpConfig from "../http/HttpConfig";
import Parameter from "../parameters/Parameter";
import Toast from 'react-native-root-toast';
import LocalImg from "../res/img";

const ITEM_COUNT = 15;
let page = 0;
let index = 0;
let irType;
let navigate;
let navigation;
export default class Details extends Component {

    render() {
        navigate = this.props.navigation.state.params.navigate;
        navigation = this.props.navigation;
        irType = this.props.navigation.state.params.irType;
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this._getCoverImgDetailed(0);
                    }}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => (
                        this._getCoverImgDetailed(1)
                    )}
                    ListFooterComponent={this._footer}
                />
                <View style={styles.title}>
                    <TouchableOpacity style={styles.title_view} activeOpacity={1} onPress={this._clickBack.bind(this)}>
                        <Image source={LocalImg.pre} style={styles.title_img}/>
                        {/*<Text style={styles.title_text}>返回</Text>*/}
                    </TouchableOpacity>
                    {/*<View style={styles.title_view}>*/}
                    {/*<Image source={LocalImg.top} style={styles.title_img}/>*/}
                    {/*/!*<Text style={styles.title_text}>顶部</Text>*!/*/}
                    {/*</View>*/}
                </View>
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isRefreshing: false,
            footerShow: false
        };
    }

    componentDidMount() {
        this._isMounted = true
        this._getCoverImgDetailed(0)
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    _getCoverImgDetailed(isLoad) {
        this.setState({isRefreshing: false});//停止刷新
        if (isLoad == 0) {
            this.setState({isRefreshing: true});//开始刷新
            page = 0;
            index = 0;
        } else {
            this.setState({footerShow: true});
            page += ITEM_COUNT;
        }
        HttpManager.post(Parameter.getCoverImgDetailed(irType, page, ITEM_COUNT)).then(success => {
            let datalist = success.data;
            let dataBlog = [];
            datalist.map((item) => {
                dataBlog.push({
                    key: index,
                    value: item
                });
                index++
            });
            if (this._isMounted) {
                if (dataBlog.length == 0) {
                    this.setState({footerShow: false});
                }
                if (isLoad == 0) {
                    this.setState({data: dataBlog});
                    this.setState({isRefreshing: false});//停止刷新
                } else {
                    this.setState((state) => ({data: state.data.concat(dataBlog)}));
                }
            }
        }).catch(error => {
            Toast.show(error)
        });
    }


    _footer = () => {
        return <View style={styles.footer_view}>
            {this.state.footerShow ?
                <Bubbles style={styles.footer_bubbles} size={5} color="#FFF"/> :
                null}
        </View>
    };

    _renderItem = (item) => {
        let url = HttpConfig.URL_SERVICE + item.item.value.irUrl;
        return (
            <TouchableOpacity style={styles.item} key={index} activeOpacity={1}
                              onPress={this._clickItem.bind(this, item, index)}>
                <Image
                    style={styles.img}
                    source={{uri: url}}
                />
            </TouchableOpacity>)
    };

    _clickItem(item, index) {
        navigate('ImgBrowsing', {name: 'xxxx'})
    }

    _clickBack() {
        navigation.pop()
    }
}

