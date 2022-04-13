

// 考试题目和要点：

// 1、中文大写金额数字前应标明“人民币”字样。中文大写金额数字应用壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整等字样填写。

// 2、中文大写金额数字到“元”为止的，在“元”之后，应写“整字，如532.00应写成“人民币伍佰叁拾贰元整”。在”角“和”分“后面不写”整字。

// 3、阿拉伯数字中间有“0”时，中文大写要写“零”字，阿拉伯数字中间连续有几个“0”时，中文大写金额中间只写一个“零”字，如6007.14，应写成“人民币陆仟零柒元壹角肆分“。
// 4、10应写作“拾”，100应写作“壹佰”。例如，1010.00应写作“人民币壹仟零拾元整”，110.00应写作“人民币壹佰拾元整”
// 5、十万以上的数字接千不用加“零”，例如，30105000.00应写作“人民币叁仟零拾万伍仟元整”

// 输入描述：
// 输入一个double数

// 输出描述：
// 输出人民币格式
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