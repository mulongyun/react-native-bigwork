import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity,AsyncStorage,BackHandler,ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Userinfor extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: require('../../assets/touxiang.png'),
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('image')
            .then((res) => {
                const imgsrc = { uri: res };
                if (res == null) { this.setState({
                    imageUrl: require('../../assets/touxiang.png')})
                }else {
                    this.setState({imageUrl: imgsrc});
                }
            });
    }
    storeImg = async (img)=>{
        await AsyncStorage.setItem('image',img,
        ()=>{console.log('store success')}
        )
    }
    getImg = ()=>{
        AsyncStorage.getItem('image')
        .then((res)=>console.log(res));
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else { 
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
              this.storeImg(source.uri)
              this.getImg()
            }
          });
    }
    render() {
        return (
            <View style={{ backgroundColor: "#eeeeee" }}>
                {/* 紅色框 */}
                <View style={styles.hong} >
                    <TouchableOpacity onPress={()=>{this.takephoto()}} activeOpacity={0.3}>
                        <Image source={this.state.imageUrl} style={{ width: 80, height: 80,borderRadius:40 }}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>BINNU DHILLON</Text>
                </View>
                {/* 个人中心 */}
                <View style={styles.wode}>
                    <Icon name='home' size={20} style={{ marginLeft: 10 }} />
                    <Text style={{ marginLeft: 10, color: '#727171' }}>我的个人中心</Text>
                </View>
                {/* 信息框1 */}
                <View style={{ backgroundColor: 'white',marginTop:2}}>
                    <View style={styles.xinxi1}>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>账户管理</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>收货地址</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的信息</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的订单</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的二维码</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的积分</Text>
                        </View>
                    </View>
                    <View style={styles.he1}>
                        <Icon name='home' size={20}/>
                        <Text style={styles.font}>我的收藏</Text>
                    </View>
                </View>
                {/* 活动 */}
                <View style={styles.huodong}>
                    <Icon name='home' style={{ marginLeft: 10 }} size={20}/>
                    <Text style={{ marginLeft: 10, color: '#727171' }}>E族活动</Text>
                </View>
                {/* 信息框2 */}
                    <View style={styles.xinxi2}>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>居家维修保养</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>出行接送</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的受赠人</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.he1}>
                            <Icon name='home' size={20}/>
                            <Text style={styles.font}>我的活动</Text>
                        </View>
                        <View style={styles.he1} >
                        <TouchableOpacity onPress={()=>{Actions.publish()}}>
                            <Icon name='home' size={20} style={{paddingLeft:20}}/>
                            <Text style={styles.font}>我的发布</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    {/* 退出 */}
                <View style={styles.tuichu}> 
                <TouchableOpacity onPress={() => {
                        AsyncStorage.getItem("user")
                            .then(res => {
                                if (res) {
                                    AsyncStorage.removeItem("user")
                                        .then((res) => console.log(res));
                                    Actions.login()
                                } else {
                                    ToastAndroid.showWithGravity('请登录', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                                }
                            })
                    }}>
                        <Text style={{ fontSize: 16, color: "#a4a4a4" }} >BINNU DHILLON | 退出</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hong: {
        backgroundColor: "red",
        width: '100%',
        height: 230,
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        color: 'white',
        fontSize: 18,
        marginTop: 13
    },
    wode: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    xinxi1: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    he1: {
        width: '33%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        marginTop: 10,
        color: "#727171",
    },
    huodong:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },
    xinxi2:{
        width: '100%',
        height: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop:2
    },
    tuichu: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})