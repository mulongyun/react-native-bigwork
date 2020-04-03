import React,{ Component } from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

export default class List extends Component {
  render() {
      return (
        <ScrollView>
        <View style={{ backgroundColor: '#f4f4f4' }}>
          <View style={{ backgroundColor: 'white' }}>
            {/* 搜索框 */}
            <View style={styles.search}>
              <TextInput placeholder='请输入商品名称'
                placeholderTextColor="rgb(92,92,92)" />
              <Image style={{width:30,height:30,marginLeft:260}} source={require('../../assets/search.png')} />
            </View>
            {/* 综合销量 */}
            <View style={styles.zonghe}>
              <Text style={{color:'red'}}>综合</Text>
              <Text>销量</Text>
              <Text>新品</Text>
              <Text>价格</Text>
              <Text>信用</Text>
            </View >
          </View >
          {/* 正文 */}
          <View style={{flexDirection: 'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu1.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu2.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu1.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu2.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu1.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
            <View style={styles.zheng}>
              <Image style={{marginLeft:50,marginTop:45,marginBottom:30}} source={require('../../assets/shu2.png')} />
              <Text style={{color:'#b7b7b7'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={{color:'red',marginTop:15}}>36.00</Text>  
            </View>
          </View>
        </View>
      </ScrollView>
      )
  }
}
const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    width: '90%',
    height: 35,
    alignItems: 'center',
    paddingLeft: 7,
    marginTop: 10,
    marginLeft: 25
  },
  zonghe:{
    flexDirection: 'row',
    height: 30,
    marginTop: 20,
    justifyContent: 'space-around'
  },
  zheng:{
    backgroundColor:'white',
    width:'45%',
    height:290,
    marginTop:20
  }
});
