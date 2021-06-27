

// let n:bigint = 100


// let o = {
//   a: "foo",
//   b: 12,
//   c: "bar"
// };
interface NumberDictionary {
    [index: string]: number | string;
    length: number ; // 可以，length是number类型
    name: string ; // 错误，`name`的类型与索引类型返回值的类型不匹配
  }
  
  // console.log(c.m())
  
  // const aNumber: number = maybe;
  
  // if (maybe) {
  //     // TypeScript knows that maybe is a boolean now
  //     const aBoolean: boolean = maybe;
  //     // So, it cannot be a string
  //     const aString: string = maybe;
  //   }
  // let a:string  
  // let b:string = "tt"
  // // a &&= b;
  // a ||= b
  // // a ??= b
  // console.log(a)
  // type Arr = readonly any[];
  
  // function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  //     return [...arr1, ...arr2];
  //   }
  
  // let a:string[] =["a","b"]
  // let b:number[] =[9,1]
  // let c:any[] = concat(a,b)
  
  // let big: bigint = 100n;