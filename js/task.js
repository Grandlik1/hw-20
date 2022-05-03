// 1
// let arr = [1 , 2 , 3]
// let arr1 = [4 , 5 , 6]
// let result = arr.concat(arr1)
// console.log(result)
// 2
// let arr = [1 , 2 , 3]
// arr = arr.reverse()
// console.log(arr)
// 3
// let arr = [1 , 2 , 3]
// arr.push( 4 , 5 , 6 )
// console.log(arr)
// 4
// let arr = [1 , 2 , 3]
// arr.unshift( 4 , 5 , 6 )
// console.log(arr)
// 5
// let arr = ['js', 'css', 'jq']
// console.log(arr.shift())
// 6
// let arr = ['js', 'css', 'jq']
// console.log(arr.pop())
// 7
// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.slice(0 , 3)
// console.log(arr1)
// 8
// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.slice(3 , 5)
// console.log(arr1)
// 9
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1 , 2)
// console.log(arr)
// 10
// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.splice(1 , 3)
// console.log(arr1)
// 11
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3 , 0 ,'a' , 'b' , 'c' )
// console.log(arr)
// 12
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3 , 0 ,'a' , 'b')
// arr.splice(6 , 0 ,'c')
// arr.push('e')
// console.log(arr)
// 13
// let arr = [3, 4, 1, 2, 7]
// arr.sort()
// console.log(arr)
// 14
// let arr = [5, 6, 7, 8, 9]
// function sum(array) {
//     let result = 0
//     for(let i = 0; i < array.length; i++){
//         result += array[i];
//     }
//     console.log(result)
// }
// sum(arr);
// 15
// let arr = [5, 6, 7, 8, 9]
// let arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     arr1.push(Math.pow(arr[i], 3))
// }
//
// console.log(arr1)
// 16
// let arr = [1,-3, 5, 6,-7, 8, 9,-11]
// arr = arr.filter(arr => arr < 0)
// console.log(arr)
// 17
// let arr = [1,-3, 5, 6,-7, 8, 9,-11]
// arr = arr.filter(arr => arr % 2 === 0)
// console.log(arr)
// 18
// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// arr = arr.filter(arr => arr.length > 5)
// console.log(arr)
// 19
// let arr = [1, 2, [3, 4], 5, [6, 7]]
// arr = arr.filter(Array.isArray)
// console.log(arr)
// 20
let arr = [5,-3, 6,-5, 0,-7, 8, 9]
function negativeNumber(array) {
    let negNum = 0
    for (let i = 0 ; i < array.length; i++){
        if (array[i] < 0 ){
            negNum = negNum + 1
        }
    }
console.log(negNum)
}
negativeNumber(arr)