import React, { Component } from 'react'
import { Text, View } from 'react-native'

//类型断言：可以确定的制定一个值的类型
//<Type>值在jsx中不能用
//值 as 类型
// interface Person{
//     name:string;
//     age:number;
// }
// let user1:Person={
//     name:'a',
//     age:20
// }
// let user1={} as Person;
// user1.name='liu';
// user1.age=18;
// user1.job='aaa';

//联合类型或者any类型
// function getLength(p1:string|number):number{
//     return(p1 as string).length
// }
//类定义----------------------------------------------
// es5
//创建一个Person类,有name和age属性,调用的时候传入
// function Person(name:string,age:number){
//     this.name=name;
//     this.age=age;
// }
// let user=new Person('zhang',20);
// console.log(user);

// es6
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
    sayName(){

    }
}
let user=new Person('zhang',18);

// class Worker extends Person{
//     job:string;
//     constructor(name:string,age:number,job:string){
//         super(name,age);//继承的时候先调super把前面的先弄下来
//         this.job=job;
//     }
// }
// let user2=new Worker('zhang',18,'程序员');
// console.log(user2);
//静态属性不能用this，直接用类.属性名
class Worker extends Person{
    static money:number;
    static job:string='程序员';
    constructor(name:string,age:number,job:string){
        super(name,age);
    }
}
Worker.money=1000;
let user2=new Worker('zhang',18,'程序员');
console.log(Worker.job);

//泛型：定义的时候不预先制定具体类型，使用的时候在指定
//泛型函数
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>('params1'));
console.log(identity<number>(100));
//泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = function (arg){
    return 100;
};
console.log(myIdentity(100));

export default class Demo01 extends Component {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
