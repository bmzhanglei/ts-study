

// type Cases<T extends string> = `${Uppercase<T>} ${Lowercase<T>} ${Capitalize<T>} ${Uncapitalize<T>}`;
// type T = Cases<'bar'>;  // 'BAR bar Bar bar'

// let t: T = 'BAR bar Bar bar';


// interface Animal {
//     name: string;
//   }
  
//   interface Dog extends Animal {
//     break(): void;
//   }
  
//   let a: Animal  = {name:"a"};
//   let b:Dog ={name:"b",break(){console.log('bb')}};
  
// 可以赋值，子类型更佳具体，可以赋值给更佳宽泛的父类型
//  a = b
//   console.log(Object.keys(a)) 
//   console.log('name' in a)
//   console.log(a['name'])
//   console.log('break' in b)
 
  // 反过来不行
// b = a

// type A = 1 | 2 | 3 | undefined;
// type B = 2 | 3 | undefined;
// let a: A;
// let b: B;

// 不可赋值
// b = a;
// 可以赋值
// a = b;

// interface Animal {
//     name: string;
//   }
  
//   interface Dog extends Animal {
//     break(): void;
//   }
  
//   type AnimalFn = (arg: Animal) => void
//   type DogFn = (arg: Dog) => void
  
//   let Eg1: AnimalFn = (A:Animal)=>{console.log(A.name)};
//   let Eg2: DogFn = (d:Dog)=> {d.break();console.log(d.name)};

//   Eg2 = Eg1
//   Eg1({name:"animal"})
//     Eg2({name:"dog",break:()=>console.log('dbreak')}) 
  
// interface A {
//     readonly a?: string,
//     b: number,
//   }
//   interface B {
//     key1: number,
//     key2: string,
//   }
//   type Eg2 = Record<keyof A, B>
//   let aa:Eg2 = {a:{key1:9,key2:''},b:{key1:8,key2:'key2'}}


// type Eg3 = Capitalize<'aBCD'>;

// let aa:Eg3 =  "ABcD"

// console.log(aa)


// let d:any

// d=4
// d="dd"
// d=true

// let d2:string | undefined; 

// d2="s"

// let d3:unknown = 666;

// d3 = false
 
// if(typeof d3 === "string"){
//   d2 = d3
// }
// d2 = d3 as string
// d2 = <string>d3
// console.log(typeof d2)

type Naked<T> = T extends boolean ? "Y" : "N";
type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

// "N" | "Y"
type Distributed = Naked<number | boolean>;

// "N"
type NotDistributed = Wrapped<number | boolean>;

type T = 'A' | "B"

type B = T extends "B"|"A" ? 'Y' : 'N'

