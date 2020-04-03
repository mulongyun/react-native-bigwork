import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity ,AsyncStorage,ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import { myFetch } from '../utils';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text})
    }
    register = () => {
        if (this.state.username != '' && this.state.pwd != '') {
                this.setState({ isloading: true })
                myFetch.post('/register', {
                    username: this.state.username,
                    pwd: this.state.pwd
                }).then(res => {
                    if (res.data.token == '1') {
                        ToastAndroid.showWithGravity('用户已存在', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }else {
                        console.log(res.data)
                        AsyncStorage.setItem('user', JSON.stringify(res.data))
                            .then(() => {
                                this.setState({ isloading: false })
                                ToastAndroid.showWithGravity('注册成功', ToastAndroid.SHORT, ToastAndroid.CENTER);
                                Actions.login();
                            })
                    }
                })
        }else {
            ToastAndroid.showWithGravity('用户名或密码为空', ToastAndroid.SHORT, ToastAndroid.CENTER);
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
                        <TextInput placeholder='注册用户名' 
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
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.login}
                        style={{
                            width: '80%',
                            height: 40,
                            marginTop: 30,
                            backgroundColor: '#ccc',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text>返回登录页面</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};