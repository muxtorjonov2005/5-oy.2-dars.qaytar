// 1-masala
// function findLength(arg){
//     if(arg.length == 0){
//         return 'massiv bosh'
//     }
//     let res = []
//     arg.reverse().forEach(val => {
//         if(typeof val == 'string'){
//         res.push(val.length)
//     }
//     })
//     return res
// }
// console.log(findLength(['salom', 'bolalar', true, 'xayr']));

// 2-masala
// function toCapitalize(arg){
//     if(arg.length == 0){
//         return 'massiv bosh'
//     }
//     return arg.map(val => {
//         if(typeof val == 'string'){
//             return val[0].toUpperCase() + val.slice(1)
//         }
//     })
// }
// console.log(toCapitalize(['salom', 'xayr', 'bolalar']));

// 3-masala
// function sliceNumber(str){
//     return str.split('').filter(val => isNaN(val) || val === '').join('')
// }
// console.log(sliceNumber('4sa1l0om5'));

// 4-masala
// function filterArr(arg){
//     if(arg.length == 0){
//         return 'massiv bosh'
//     }
//     return arg.filter(val => typeof val == 'string')
// }
// console.log(filterArr(['salom', 54, 'xayr', true, 'dunyo']));

// 5-masala
// function findStrArr(arg){
//     let sum = 0
//     for (const i of arg) {
//         if(typeof i == 'string'){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(findStrArr(['salom', 14, 'xayr', true, 'bola']));

// 6-masala
// function sortArrLength(arg){
//     if(arg.length == 0){
//         return 'massiv bosh'
//     }
//     let r = []
//     for (const i of arg) {
//         r.push(i.length)
//     }
//     return r.sort(function(a,b){
//         return a - b
//     })
// }
// console.log(sortArrLength(['salom', 'bolalar', 'xayt', 'yaxshimisizlar']));

// 7-masala
// function filterUnliXarf(str){
//     return str.replace(/[aeiouAEIOU]/g, '')
// }
// console.log(filterUnliXarf('salom bolalar'));

// 8-masala
// function findMostLength(arg){
//     let max = arg[0]
//     for (const i of arg) {
//         if(max.length < i.length){
//             max = i
//         }
//     }
//     return max
// }
// console.log(findMostLength(['salom', 'xayrbgh', 'yaxshimisizlar', 'bolalar']));

// 9-masala
// function teskariQilish(str){
//     return str.split(' ').map(val => val.split('').reverse().join('')).join(' ')
// }
// console.log(teskariQilish('salom bolalar'));

// 10-masala
// function strniSanash(arg){
//     let res = 0
//     for (const i of arg) {
//         if(typeof i == 'string'){
//             res++
//         }
//     }
//     return res
// }
// console.log(strniSanash(['salom', false, 45, null, 'xayr']));
