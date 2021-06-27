// declare function f<T extends boolean>(x: T): T extends true ? string : number;

// let x = f(Math.random() < 0.5)
// let x = f(false)

// let xx:type x = 0.5
// console.log(xx)
// type TypeName<T> =
//     T extends string ? "string" :
//     T extends number ? "number" :
//     T extends boolean ? "boolean" :
//     T extends undefined ? "undefined" :
//     T extends Function ? "function" :
//     "object";

// type T0 = TypeName<string>;  // "string"
// type T1 = TypeName<"a">;  // "string"
// type T2 = TypeName<true>;  // "boolean"
// type T3 = TypeName<() => void>;  // "function"
// type T4 = TypeName<string[]>;  // "object"

// interface Foo {
//     propA: boolean;
//     propB: boolean;
// }

// let fvar:Foo = {propA:true,propB:false}

// declare function f<T>(x: T): T extends Foo ? string : number;

// function foo<U>(x: U) {
//     // Has type 'U extends Foo ? string : number'
//     let a = f(x);

//     // This assignment is allowed though!
//     let b: string | number = a;
// }

// foo(fvar)

// type ElementType<T> = T extends (infer U)[]?U:never
// type T = ElementType<number[]>
// type T1 = ElementType<string[]>

// type TypeName<T> =
//     T extends string ? "string" :
//     T extends number ? "number" :
//     T extends boolean ? "boolean" :
//     T extends undefined ? "undefined" :
//     T extends Function ? "function" :
//     "object";

// type T10 = TypeName<string | (() => void)>;  // "string" | "function"
// type T12 = TypeName<string | string[] | undefined>;  // "string" | "object" | "undefined"
// type T11 = TypeName<string[] | number[]>;  // "object"

// type Diff<T, U> = T extends U ? never : T; 
// type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; 
// // type NonNullable<T> = Diff<T, null | undefined>;  

// type T34 = NonNullable<string | number | undefined>;  // string | number

// function f1<T>(x: T, y: NonNullable<T>) {
//     x = y;  // Ok
//     // y = x;  // Error
// }

// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

// type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
// type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

// interface Part {
//     id: number;
//     name: string;
//     subparts: Part[];
//     updatePart(newName: string): void;
// }
// type T40 = FunctionPropertyNames<Part>;  // "updatePart"
// type T41 = NonFunctionPropertyNames<Part>;  // "id" | "name" | "subparts"
// type T42 = FunctionProperties<Part>;  // { updatePart(newName: string): void }
// type T43 = NonFunctionProperties<Part>;  // { id: number, name: string, subparts: Part[] }


// type Unpacked<T> =
//     T extends (infer U)[] ? U :
//     T extends (...args: any[]) => infer U ? U :
//     T extends Promise<infer U> ? U :
//     T;

// type T0 = Unpacked<string>;  // string
// type T1 = Unpacked<string[]>;  // string
// type T2 = Unpacked<() => string>;  // string
// type T3 = Unpacked<Promise<string>>;  // string
// type T4 = Unpacked<Promise<string>[]>;  // Promise<string>
// type T5 = Unpacked<Unpacked<Promise<string>[]>>;  // string

// type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
// type T10 = Foo<{ a: string, b: string }>;  // string
// type T11 = Foo<{ a: string, b: never }>;  // string | number

declare function foo(x: string): number;
declare function foo(x: number): string;
// declare function foo(x: string | number): string | number;
type T30 = ReturnType<typeof foo>;  // string | number

let s1 =Symbol("s")
let s2 =Symbol("s")

console.log(s1==s2)