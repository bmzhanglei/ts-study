

let unit = ['亿', '万', '仟', '佰', '拾', '元', '角', '分']
// let unitMin = ['仟', '佰', '拾', '']
let unitMin = ['', '拾', '佰', '仟']
let unitMax = ['', '万', '亿', '万亿']
let arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']

let num = 76503400001.15

let [integer, decimal] = num.toString().split('.');

let len = Math.ceil(integer.length / 4)

let arrInt = []
for (let i = 1; i <= len; i++) {
    if (i == 1) {
        arrInt.push(integer.slice(-i * 4))
    } else {
        arrInt.push(integer.slice(-i * 4, (-i + 1) * 4))
    }
}

let val = ""

for (let i = len - 1; i >= 0; i--) {
    let w = read(arrInt[i])
    if (w) {
        val += w + unitMax[i]
    }
}

console.log(val)

function read(item) {
    let r = ''
    let len = item.length
    for (let i = len - 1, j = 0; i >= 0; i--, j++) {
        let n = arr[item[j]] + (item[j] > 0 ? unitMin[i] : '')
        let prev = r.slice(-1)
        if (!(prev == arr[0] && n == arr[0])) {
            r += n
        }
    }
    r = r.replace(/['零']$/, "")
    return r
}

// console.log(w)