import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import { myFetch } from '../utils';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isloading: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    login = () => {//myFetch封装在utils/index.js
        if (this.state.username == '' && this.state.pwd == '') {
            ToastAndroid.showWithGravity('用户名或密码为空', ToastAndroid.SHORT, ToastAndroid.CENTER);
        } else {
            ToastAndroid.showWithGravity('正在登陆', ToastAndroid.SHORT, ToastAndroid.CENTER);
            this.setState({ isloading: true });
            myFetch.post('/login', {
                username: this.state.username,
                pwd: this.state.pwd
            }
            ).then(res => {
                AsyncStorage.setItem('user', JSON.stringify(res.data))
                    .then(() => {
                        this.setState({ isloading: false });
                        Actions.tabbar()
                    })
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{
                        width: '80%',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        marginRight: 10,
                        paddingLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                    }}>
                        <Icon name='user' color='red' />
                        <TextInput placeholder='用户名'
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        marginRight: 10,
                        paddingLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                    }}>
                        <Icon name='user' color='red' />
                        <TextInput placeholder='密码' secureTextEntry={true}
                            onChangeText={this.pwdhandle}
                        />
                    </View>
                    <TouchableOpacity onPress={this.login}
                        style={{
                            width: '80%',
                            height: 40,
                            marginTop: 30,
                            backgroundColor: '#ccc',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={Actions.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
                {/* {
                    this.state.isloading?<View><Text>正在加载</Text></View>:null
                } */}
            </View>
        )
    }
};