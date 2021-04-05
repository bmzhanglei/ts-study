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