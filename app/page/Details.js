import React, {Component} from 'react';
import {View, FlatList, Text, Image,TouchableOpacity} from 'react-native';
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
export default class Details extends Component {

    render() {
        navigate =this.props.navigation.state.params.navigate;
        irType = this.props.navigation.state.params.irType;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Image source={LocalImg.pre} style={styles.title_img}/>
                    <View style={styles.title_view_text}>
                        <Text style={styles.title_text}>浏览</Text>
                    </View>
                </View>
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
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isRefreshing: false,
            footerText: '加载中。。。'
        };
    }

    componentDidMount() {
        this._getCoverImgDetailed(0)
    }


    _getCoverImgDetailed(isLoad) {
        this.setState({isRefreshing: false});//停止刷新
        if (isLoad == 0) {
            this.setState({isRefreshing: true});//开始刷新
            page = 0;
            index = 0;
        } else {
            this.setState({footerText: '加载中。。。'});
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
            if (dataBlog.length == 0) {
                this.setState({footerText: '没有更多数据'});
            }
            if (isLoad == 0) {
                this.setState({data: dataBlog});
                this.setState({isRefreshing: false});//停止刷新
            } else {
                this.setState((state) => ({data: state.data.concat(dataBlog)}));
            }
        }).catch(error => {
            Toast.show(error)
        });
    }


    _footer = () => {
        return <Text style={styles.footer}>{this.state.footerText}</Text>;
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
}

