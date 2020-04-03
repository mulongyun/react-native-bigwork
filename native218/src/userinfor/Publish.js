import React, { Component,} from 'react';
import { View, Text, ToastAndroid, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            arrs: [],
            data: [],
            page:0,//页数，从0开始，显示第几页要+1
            limit: 13,//每页13条
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?')
            .then(res => res.json())
            .then(res => {
                this.setState({ arrs: [] });//分割每一页是13条，从0页开始不能*this.state.limit+1，要直接+this.state.limit
                this.setState({ data:res.data.slice(this.state.limit*(this.state.page),this.state.limit*(this.state.page)+this.state.limit)});
                for(var i=0;i<this.state.limit;i++){
                    if (this.state.data[i].title.length >= 15 || this.state.data[i].create_at.length >= 10) {                     
                        this.setState(() => this.state.arrs.push({//slice不包含最后一个
                            title: this.state.data[i].title.slice(0, 15) + "...",
                            time: this.state.data[i].create_at.slice(0, 10),
                            response: Math.random()//随机产生[0-1)
                        }))
                    } }
            })
    }
    qian = () => {
        if (this.state.page != 0) {
            this.setState(() => { this.state.page-- });
            this.componentDidMount();
        } else {//页数为0时在Android设备上显示一个悬浮的提示信息          
            ToastAndroid.showWithGravity('当前页已是最前页', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }
    hou = () => {
        this.setState(() => { this.state.page++ });
        this.componentDidMount();
    }
    render() {
        return (
            <View style={{backgroundColor: "#eeeeee"}}>
                {/* 红色top栏 */}
                <View style={styles.hong}>
                    <Icon size={30} name="left" color='#fff' onPress={() => Actions.pop()} />
                    <Text style={{ color: '#fff', fontSize: 18 }}>我的发布</Text>
                    <Icon size={30} name="ellipsis1" color='#fff' />
                </View>
                {/* 链接页面 */}
                <View>
                {this.state.arrs.map((item) => (
                    <View style={styles.arrs}>
                        <Text style={{paddingLeft:5}}>{item.title}</Text>
                        <Text >{item.time}</Text>                      
                        {(item.response>0.5)?<Text style={{color:'red'}}>待回复</Text>:<Text>已回复</Text>}
                    </View>
                ))}
                </View>
                {/* 换页按钮 */}
                <View style={styles.foot}>
                    <Button style={styles.btn} onPress={this.qian}>上一页</Button>
                    <Text>第{this.state.page + 1}页</Text>
                    <Button style={styles.btn} onPress={this.hou}>下一页</Button>
                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    hong: {
        backgroundColor: 'red',
        width: '100%', height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrs: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee'
    },
    foot: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    btn: {
        width: 100,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderRadius: 15
    },
})
