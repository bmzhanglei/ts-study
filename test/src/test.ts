import { type } from "os";


type A = Awaited<Promise<string>>;

// let promise = new Promise((resolve,reject)=>{
//     resolve('aa')
// })

// (async ()=>{
//    let a:A = await promise()
//    console.log(a)
// })()
var a:string = 'tttt'
// type B = Awaited<Promise>
console.log(a)