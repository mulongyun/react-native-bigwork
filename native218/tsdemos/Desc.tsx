import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

//装饰器是一种特殊类型的声明，它能被附加到类声明、方法、属性或参数上。使用@expression这种形式
//expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
//其实就是一个函数，在函数里可以写一些新的逻辑。包裹后面修饰对的内容，将新的逻辑传递到被修饰的内容中去
//高阶组件————其实就是一个函数，就是装饰器
//@expr 语法其实是语法糖

// 普通装饰器（无参数）---------------------------------------------------
// function helloWord(target: any) {//target指代的就是后边的类
//     console.log('hello Word!');
// }
// @helloWord
// class HelloWordClass {
// }

// function addUrl(target: any) {//target指代的就是后边的类
//     target.prototype.url='http://';
// }
// @addUrl
// class HomeServer {
//     url:any;
//     getData(){
//         console.log(this.url);
//     }
// }
// let home=new HomeServer();
// home.getData()

// class UserServer {
//     getInfor(){

//     }
// }

// 装饰器工厂 （带参数）-----------------------------------------------
// function helloWord(p:string) {
//     return function (target) { //  这才是真正装饰器
//          console.log(p)
//     }
// }
// @helloWord('hello')
// class HelloWordClass {
// }
function addUrl(url: string) {//target指代的就是后边的类
    return function (target: any) {//  这才是真正装饰器
        target.prototype.url = url;
    }
}
@addUrl('http://www.baidu.com')
class HomeServer {
    url: any;
    getData() {
        console.log(this.url);
    }
}
let home = new HomeServer();
home.getData()


//类装饰器
//替换组件内容或者根据不同状况修改组件内容，可以添加，也可直接大改
//这个是对整个页面组件的修改
function setStatusBar(color: string) {
    return function (WrapComponent: any) {
        return class extends Component {
            render() {
                return (
                    <View>
                        <View style={{height:20,backgroundColor:'red'}}></View>
                        {/* <StatusBar backgroundColor='red'/> */}
                        <WrapComponent />
                    </View>
                )
            }
        }
    }
}
//方法装饰器
// function enumerable(value: boolean) {//target是类原型对象，不是他的构造函数
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         target.name = 'liu';//在原型上直接加一个属性
//         console.log(propertyKey)
//         console.log(descriptor)
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// console.log(new Greeter('world').name)

function enumerable(value: boolean) {//target是类原型对象，不是他的构造函数
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(descriptor);//{"configurable": true, "enumerable": false, "value": [Function greet], "writable": true}
        descriptor.enumerable = value;
    };
}

function log(target:any,methodName:string,des:PropertyDescriptor){
    console.log('log call');
    var oldVal = des.value;
    des.value = function(){
        console.log(methodName+'被调用');
        return oldVal.apply(this,[...arguments]);
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(true)
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting + msg;
    }
}
let msg = new Greeter('world').greet('greet 参数')
console.log( msg )

@setStatusBar('red')
export default class Desc extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent00 </Text>
            </View>
        )
    }
}
