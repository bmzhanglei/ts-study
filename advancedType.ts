class MyProxy<T>{
    private value:T
    constructor(value:T){
        this.value = value
    }
    get():T{
        return this.value
    }
    set(value:T):void{
        this.value = value
    }
}

class Student{
    name:String;
    age:number
}
let student = new Student()
student.name = "Jin"
student.age = 12

type MyProxyStudent = MyProxy<Student>
let myStudentProxy:MyProxyStudent = new MyProxy<Student>(student)

type Proxify<T> = {
    [P in keyof T]: MyProxy<T[P]>;
}

type StudentProxify = Proxify<Student>
let stuProxify:StudentProxify
// stuProxify.age.get
// stuProxify.age.set
function myProxify<T>(o: T): Proxify<T> {
    let result = {} as Proxify<T>
    for(const k in o){
        result[k] = new MyProxy(o[k])
    }
    return result

 }

 let annyProxify = myProxify<Student>({
     name:"name1",
     age:12
 })
 console.log(annyProxify)
 annyProxify.name.set("name2")
 annyProxify.age.set(123)
 console.log(annyProxify)

 //解包操作
 function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let originalProps = unproxify<Student>(annyProxify);
console.log(originalProps)

class StudentInfo{}
type t10 = InstanceType<typeof StudentInfo>

//Partial, Readonly, Record, Pick
/**
 * Make all properties in T optional
 */
//  type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

/**
 * Make all properties in T readonly
 */
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

/**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

type Coord = Record<'x' | 'y', number>;

// 等同于
// type Coord = {
// 	x: number;
// 	y: number;
// }

// type Coord = Partial<Record<'x' | 'y', number>>;

// // 等同于
// type Coord = {
// 	x?: number;
// 	y?: number;
// }

// type Coord = Readonly<Record<'x' | 'y', number>>;

// 等同于
// type Coord = {
//     readonly x: number;
//     readonly y: number;
// }

// 如果进行了修改，则会报错：
// const c: Coord = { x: 1, y: 1 };
// c.x = 2; // Error: Cannot assign to 'x' because it is a read-only property.

// type Coord = Record<'x' | 'y', number>;
// type CoordX = Pick<Coord, 'x'>;

// 等用于
// type CoordX = {
// 	x: number;
// }