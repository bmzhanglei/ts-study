

// function print(num) {
//     let val = ""
//     for (let i = 31; i >= 0; i--) {
//         val += ("" + ((num && (1 << i)) == 0 ? "0" : "1"));
//     }
//     console.log(val)

// }

// print(1<<4)

function f(n){
    if(n<=1) return 1;
    return f.bind(null,n-1)+f.bind(null,n-2);

}

function f2(n,a1=1,a2=1){
    if(n<=1) return a2;
    
    return f2.bind(null,n-1,a2,a1+a2)
    // return f2(n-1,a2,a1+a2)
}

function b(f){
    while(f && f instanceof Function){
        f = f()
    }
    return f
}

let ff = b(f2(100));

// console.log(f2(10))

console.log(ff)