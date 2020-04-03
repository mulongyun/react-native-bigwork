import React, { Component } from 'react'
import { Text, View, } from 'react-native'

// function identity(arg: any): any {
//     return arg;
// }
// let zhi=identity('123');
// console.log(zhi);//123

// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity<string>('params1'));//params1
// console.log(identity<number>(100));//100
// console.log(identity('params1'));//params1
// console.log(identity(100));//100


// function Identity<T>(arg: T): T {
//     // console.log(arg.length);//报错，T没有length属性
//     return arg;
// }

// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity1: GenericIdentityFn<number> = identity;
// let myIdentity2: GenericIdentityFn<string> = identity;
// console.log(myIdentity1(100));//100
// console.log(myIdentity2('abc'));//abc


// class Generic<T> {
//     value: T;
//     add: (x: T, y: T) => T;
// }

// let myGeneric1 = new Generic<number>();
// myGeneric1.value = 0;
// myGeneric1.add = function(x, y) { return x + y; };
// console.log(myGeneric1.add(myGeneric1.value, 2));//2

// let myGeneric2 = new Generic<string>();
// myGeneric2.value = "nn";
// myGeneric2.add = function(x, y) { return x + y; };
// console.log(myGeneric2.add(myGeneric2.value, "test"));//nntest

//普通装饰器（无参数）
// function helloWord(target: any) {//target指代的就是后边的类
//     // do something with "target" 
//     console.log('hello Word!');//hello Word!
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
//         console.log(this.url);//http://
//     }
// }
// let home=new HomeServer();
// home.getData()

// 装饰器工厂 （带参数）
// function helloWord(p:string) {// 这是一个装饰器工厂
//     return function (target:any) { //这才是真正装饰器
//         // do something with "target" and "p"
//         console.log(p)
//     }
// }
// @helloWord('hello')
// class HelloWordClass {
// }


// function sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
// @sealed
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         // return "Hello, " + this.greeting;
//         console.log("Hello, " + this.greeting);
//     }
// }
// let home=new Greeter('hi');
// home.greet();

//方法装饰器
// function enumerable(value: boolean) {//因为修饰的是方法（实例成员）所以target是类原型对象，不是他的构造函数
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         target.name = 'mu';//在原型上直接加一个属性
//         descriptor.enumerable = value;//修改属性描述符的enumerable属性为false
//         console.log(propertyKey)//成员名字：greet
//         console.log(descriptor)
//         //成员描述符：{"configurable": true, "enumerable": false, "value": [Function greet], "writable": true}
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
// console.log(new Greeter('world').name)//mu

// function DefaultValue(value: string) {//target是类的构造函数
//     return function (target: any, propertyName: string) {
//         console.log(propertyName);//greeting
//         target[propertyName] = value;
//     }
// }
// class Hello {
//     @DefaultValue("Hello") 
//     greeting: string;
// }
// console.log(new Hello().greeting);//hello

function f() {
    console.log("f(): evaluated");//1
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");//4
    }
}
function g() {
    console.log("g(): evaluated");//2
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");//3
    }
}
class C {
    @f()
    @g()
    method() {}
}
 

export default class Test extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent00 </Text>
            </View>
        )
    }
}
