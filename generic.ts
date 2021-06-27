// 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

// 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

// 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

//1.泛型函数
// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一致

function getData<T>(value:T):T{

    return value;

}

getData<number>(123);

getData<string>('1214231');

getData<number>('2112');       /*错误的写法*/  

function getData<T>(value:T):any{

    return '2145214214';

}

getData<number>(123);  //参数必须是number

getData<string>('这是一个泛型');


//2.泛型接口
//1、泛型接口

 interface ConfigFn{

            <T>(value:T):T;

        }

var getData:ConfigFn=function<T>(value:T): T{

            return value;

        }

        // getData<string>('张三');

        // getData<string>(1243);  //错误

//2、泛型接口

        interface ConfigFn<T>{

            (value:T):T;

        }

        function getData<T>(value:T):T{

            return value;

        }

        

var myGetData:ConfigFn<string>=getData;   

        myGetData('20');  /*正确*/

        // myGetData(20)  //错误


//3.泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现

class MinClas<T>{

    public list:T[]=[];

    add(value:T):void{

        this.list.push(value);

    }

    min():T{        

        var minNum=this.list[0];

        for(var i=0;i<this.list.length;i++){

            if(minNum>this.list[i]){

                minNum=this.list[i];

            }

        }

        return minNum;

    }

}

var m1=new MinClas<number>();   /*实例化类 并且制定了类的T代表的类型是number*/

m1.add(11);

m1.add(3);

m1.add(2);

alert(m1.min())

var m2=new MinClas<string>();   /*实例化类 并且制定了类的T代表的类型是string*/

m2.add('c');

m2.add('a');

m2.add('v');

alert(m2.min())