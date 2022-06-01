

//字符串序列判定
// let s= 'aed'
// let l= 'abcde'
// let n= s.length;
// let m= l.length
// let j=0;
// let k=0;
// while(j<n && k<m){
//     if(s[j]==l[k]){
//         j+=1
//     }
//     k+=1
// }
// if(j==n){
//     console.log(l.lastIndexOf([...s].slice(-1)[0]))
// }else{
//     console.log(-1)
// }


//最大括号深度

// 输入
// let input = "((([]){(()(})}))"
// let input = "((([]){[[(])]}))"

// // 记录括号的栈
// let stack = []
// // 标记：字符串是否合法
// let flag = true
// // 最大深度
// let max = 0

// // 循环遍历输入
// for (const x of input) {
//     if ((x === '(') || (x === '[') || (x === '{')) {
//         // 如果是左括号，就入栈，同时判断此时栈的深度，以更新最大深度
//         stack.push(x)
//         max = Math.max(max, stack.length)
//         continue
//     }

//     if ((x === ')')) {
//         // 若遇到右括号，判断此时栈顶的括号与它是否匹配，匹配则继续，不匹配，输出0，结束
//         if (stack.pop() === '(') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }

//     if ((x === ']')) {
//         if (stack.pop() === '[') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }

//     if ((x === '}')) {
//         if (stack.pop() === '{') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }
// }

// 若标记为true，代表匹配无误，且此时栈要为空，则输出最大深度，否则输出0，代表匹配不合法
// if (flag) {
//     if (stack.length === 0) {
//         console.log(max);
//     } else {
//         console.log(0);
//     }
// }

//二分查找算法
//哈希查找算法
//冒泡排序算法
//快速排序算法
//二叉树的深度遍历算法
//二叉树的广度遍历算法
//贪心算法

//二分查找算法
// var search = function (nums, target) {
//     let [minIndex, maxIndex] = [0, nums.length - 1];
//     while (minIndex <= maxIndex) {
//         const mid = Math.floor((maxIndex + minIndex) / 2);
//         const num = nums[mid];
//         if (num < target) {
//             minIndex = mid + 1
//         } else if (num > target) {
//             maxIndex = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// };

// console.log("结果索引", search([1, 2, 3, 4, 5, 6, 7], 5));

//冒泡排序
// function sort(arr,flag = true){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1] && flag || arr[j]<arr[j+1] && !flag){
//                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
//             }
//         }
//     }
//     return arr
// }

//快速排序
// function quickSort( arr ,flag=true) {
//     if(arr.length <= 1) return arr; 
//     const [left,right,num] = [[],[],arr[0]];
//     for(let i = 1;i < arr.length; i++) {
//         if(flag){
//             if(arr[i]<=num) left.push(arr[i]);
//             else right.push(arr[i]);
//         }else{
//             if(arr[i]<=num) right.push(arr[i]);
//             else left.push(arr[i]);
//         }
//     }
//     return quickSort(left,flag).concat([num],quickSort(right,flag));
// }

// console.log(quickSort([2,4,5,1,7,-2],false))

