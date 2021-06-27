// 模块封装DB库

// /modules/db.ts

interface DBI<T>{

    add(info:T):boolean;

    update(info:T,id:number):boolean;

    delete(id:number):boolean;

    get(id:number):any[];

}

export class MysqlDb<T> implements DBI<T>{

    constructor(){

        console.log('数据库建立连接');

    }

    add(info: T): boolean {

        console.log(info);

        return true;       

    }    

    

    update(info: T, id: number): boolean {

        throw new Error("Method not implemented.");

    }

    delete(id: number): boolean {

        throw new Error("Method not implemented.");

    }

    get(id: number): any[] {

        var list=[

            {

                title:'xxxx',

                desc:'xxxxxxxxxx'

            },

            {

                title:'xxxx',

                desc:'xxxxxxxxxx'

            }

        ]

        return list;

    }    

}

export class MsSqlDb<T> implements DBI<T>{

    constructor(){

        console.log('数据库建立连接');

    }

    add(info: T): boolean {

        console.log(info);

        return true;

    }    

    update(info: T, id: number): boolean {

        throw new Error("Method not implemented.");

    }

    delete(id: number): boolean {

        throw new Error("Method not implemented.");

    

    get(id: number): any[] { 

        var list=[

            {

                title:'xxxx',

                desc:'xxxxxxxxxx'

            },

            {

                title:'xxxx',

                desc:'xxxxxxxxxx'

            }

        ]

        return list;

    }

}

// /model/article.ts

import {MsSqlDb} from '../modules/db';

//定义数据库的映射

class ArticleClass{

    title:string | undefined;

    desc:string | undefined;

}

var ArticleModel=new MsSqlDb<ArticleClass>();

export {

    ArticleClass,ArticleModel

}

// /model/user.ts



import {MsSqlDb} from '../modules/db';



//定义数据库的映射

class UserClass{

    username:string | undefined;

    password:string | undefined;

}



var UserModel=new MsSqlDb<UserClass>();

export {

    UserClass,UserModel

}



// index.ts



import {UserClass,UserModel} from './model/user';



import {ArticleClass,ArticleModel} from './model/article';



//增加数据

var u=new UserClass();

u.username='张三';

u.password='12345655654757';

UserModel.add(u);



//获取user表数据

var res=UserModel.get(123);

console.log(res);



//获取文章表的数据

var aRes=ArticleModel.get(1);

console.log(aRes);