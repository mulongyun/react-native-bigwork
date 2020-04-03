import React, { useState, useEffect } from 'react';
import { View,BackHandler, AsyncStorage,ToastAndroid} from 'react-native';
import { Router, Scene, Tabs,Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './src/home/Home'
import List from './src/list/List'
import Userinfor from './src/userinfor/Userinfor'
import Publish from './src/userinfor/Publish'
import Login from './src/common/Login'
import Register from './src/common/Register'
import SwiperPage from './src/common/SwiperPage'
import SplashScreen from 'react-native-splash-screen'
//APP logo：将项目名/android/app/src/main/res下的文件夹下图片
//启动画面：react-native-splash-screen
//如果第一次安装，一般来说都有一个引导页（全屏轮播图），注意本地存储记录下状态
//不要每次进来都重新出引导页
//判断是否需要先登录，如果需要先登录，登陆完就记录状态，包括用户信息
//再次进入的时候也要从本地判断是否登陆过（判断也是为了看进来之后是render一个登录页还是直接首页）
//并且进入首页登不登录显示信息不一样
//reactive-native中本地存储是异步的
console.disableYellowBox = true;//黄色提示消失

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now=0;
  useEffect(() => {
    AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
    // AsyncStorage.clear();
    AsyncStorage.getItem('user')
      .then(res => {//这样看到的先看到登录页面，然后闪过，再到首页
        let user = JSON.parse(res);
        if (!user) {//没登录的话，启动页每次打开都在
          SplashScreen.hide();//启动页隐藏
        }
        if (user && user.token) {//用户登录过,不用重复登录页面，也不显示启动页
          setLogin(true);
          SplashScreen.hide();//启动页隐藏
        }
      })
  }, [])

  let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
  }
  
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
  }

  return (
    <Router
    backAndroidHandler={()=>{	
      if(Actions.currentScene == 'publish'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
    }}
    >
      <Scene hideNavBar>
        <Tabs key="tabbar"
          tabBarStyle={{ backgroundColor: "white" }}
          activeTintColor="red"
        >
          <Scene hideNavBar
            key="home" title="首页" component={Home}
            icon={({ focused }) => <Icon size={30} name="home"
              color={focused ? '#f23636' : '#949494'} />}
          />
          <Scene hideNavBar
            key="list" title="列表" component={List}
            icon={({ focused }) => <Icon size={30} name="minussquareo"
              color={focused ? '#f23636' : '#949494'} />}
          />
          <Scene hideNavBar
            key="userPage" title="个人中心" component={Userinfor}
            icon={({ focused }) => <Icon size={30} name="user"
              color={focused ? '#f23636' : '#949494'} />}
          />
        </Tabs>
        <Scene initial={!isLogin} key="login" component={Login} />
        <Scene key="register" component={Register} />
        <Scene key="publish" component={Publish} />
      </Scene>
    </Router>
  )
};

export default App;

