// 命名空间和模块的区别：

//     命名空间：内部模块，主要用于组织代码，避免命名冲突。

//     模    块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

// /modules/animal.ts

export namespace A{

    interface Animal {

        name: string;

        eat(): void;

    }

    export class Dog implements Animal {

        name: string;

        constructor(theName: string) {

            this.name = theName;

        }

        eat() {

            console.log(`${this.name} 在吃狗粮。`);

        }

    }

    export class Cat implements Animal {

        name: string;

        constructor(theName: string) {

            this.name = theName;

        }

        eat() {

            console.log(`${this.name} 吃猫粮。`);

        }

    }   

}

export namespace B{

    interface Animal {

        name: string;

        eat(): void;

    }

    export class Dog implements Animal {

        name: string;

        constructor(theName: string) {

            this.name = theName;

        }

        eat() {

            console.log(`${this.name} 在吃狗粮。`);

        }

    }

    export class Cat implements Animal {

        name: string;

        constructor(theName: string) {

            this.name = theName;

        }

        eat() {

            console.log(`${this.name} 在吃猫粮。`);

        }

    }   

}

// index.ts



import {A,B} from './modules/animal';



var d=new A.Dog('小黑');

d.eat();



var dog=new B.Dog('小花');

dog.eat();