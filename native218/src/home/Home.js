import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput,} from 'react-native'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';

export default class Home extends Component {
    render() {
        return (           
            <View style={styles.all}>
                {/* 搜索框 */}
                <View style={styles.top}>
                    <View style={styles.search}>
                        <Icon name="search" color={'white'} />
                        <TextInput placeholder='请输入您要搜索的关键字'
                            placeholderTextColor="white"/>
                    </View>
                    <Icon name="shopping-cart" size={30} color={'white'} />
                </View>
                {/* 轮播图 */}
                 <View style={{width:'100%',height: 210}}>
                     <Swiper>
                        <Image style={{ width: "100%", height: "100%" }}  source={require('../../assets/banner1.png')} />
                        <Image style={{ width: "100%", height: "100%" }}  source={require('../../assets/banner2.png')} />
                     </Swiper>
                 </View>
                 {/* 信息 */}
                 <View style={{flexDirection: 'column'}}>
                     <View style={styles.tiao}>
                         <View style={styles.zuo}>
                            <Image source={require('../../assets/1.png')} style={{ width: 70, height: 70}} />
                             <Text style={{ fontSize: 16,paddingLeft:20}}>居家维修包养</Text>
                         </View>
                        <Icon name="chevron-right" color={'#d8d8d8'} />
                     </View>
                     <View style={styles.tiao}>
                         <View style={styles.zuo}>
                            <Image source={require('../../assets/2.png')} style={{width: 70, height: 70 }} />
                             <Text style={{ fontSize: 16,paddingLeft:20}}>住宿优惠</Text>
                         </View>
                        <Icon name="chevron-right" color={'#d8d8d8'} />
                     </View>
                     <View style={styles.tiao}>
                         <View style={styles.zuo}>
                            <Image source={require('../../assets/3.png')} style={{ width: 70, height: 70 }} />
                             <Text style={{ fontSize: 16,paddingLeft:20}}>出行接送</Text>
                         </View>
                        <Icon name="chevron-right" color={'#d8d8d8'} />
                     </View>
                     <View style={styles.tiao}>
                         <View style={styles.zuo}>
                            <Image source={require('../../assets/4.png')} style={{ width: 70, height: 70 }} />
                             <Text style={{ fontSize: 16,paddingLeft:20}}>E族活动</Text>
                         </View>
                        <Icon name="chevron-right" color={'#d8d8d8'} />
                     </View>
                 </View>
                {/* 发布需求按钮 */}
                 <View style={styles.anniu}> 
                    <Button style={styles.btn}>发布需求</Button>
                 </View>
                <View style={styles.mo}>
                    <Text style={styles.font}>©E组之家  版权所有</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    all: {
        backgroundColor: '#eeeeee'
    },
    top: {
        width: '100%',
        height: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        width: '85%',
        height: 35,
        borderRadius: 20,
        backgroundColor: '#fbb8b8',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 15
    },
    tiao: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:20
    },
    zuo: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    anniu: {
        width:'100%',
        height:100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width:400,
        height: 40,                           
        backgroundColor: 'red',
        color:'white', 
        borderRadius: 10,     
        paddingTop:8                          
    },
    mo:{
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        color: '#767676',
        fontSize: 14
    }
});
