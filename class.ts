// 4.1 类的定义
// 4.2 继承
// 4.3 类里面的修饰符
// 4.4 静态属性 静态方法
// 4.5 抽象类 继承 多态
class Person{
        name:string;            
        constructor(name:string){
            this.name=name;
        }
        run():string{
            return `${this.name}在运动`
        }
    }
    // var p=new Person('王五');
    // alert(p.run())
    class Web extends Person{
        static sex="男";  //静态属性
        constructor(name:string){
            super(name);  /*初始化父类的构造函数*/
        }

        //多态
        run():string{
            return `${this.name}在运动-子类`
        }
        work(){
            alert(`${this.name}在工作`)
        }
        static print(){  /*静态方法  里面没法直接调用类里面的属性*/
             alert('print方法'+Per.sex);
         }
    }

    // var w=new Web('李四');
    // alert(w.run());

// 类里面的修饰符

// public :公有   

// protected：保护类型

// private ：私有 

/*
typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。

用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

abstract抽象方法只能放在抽象类里面

抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法
*/
abstract class Animal{    
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。
    run(){
        console.log('其他方法可以不实现')
    }
}

// var a=new Animal() /*错误的写法*/
class Dog extends Animal{
   //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    eat(){
        console.log(this.name+'吃粮食')
    }
}

var d=new Dog('小花花');
d.eat();
class Cat extends Animal{
   //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    run(){
    }
    eat(){
        console.log(this.name+'吃老鼠')
    }    
}

var c=new Cat('小花猫');
c.eat();

