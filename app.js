// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan
// function tuzing
const numberlengngz = (number) =>{
    return number.toString().split("").length
}
console.log(numberlengngz(123));


// 2. argument sifatida berilgan stringda nechta son qatnashganligini 
// aniqlaydigan function tuzing
 const stringNumber = (num) =>{
    let res = 0
    for(let i =0; i < num.length; i++){
        if(!isNaN(num[i])){
            res++
        }
    }
    return res
 }
 console.log(stringNumber("11645"));



// 3. argument sifatida berilgan stringda nechta so’zda a harfi ishtirok 
// etganini aniqlaydigan function tuzing 
function namBers(str){
    let count = 0 
    for(let i = 0 ; i < str.length;i++){
        if(str[i] == "a" || str[i] == "A"){
               count++
        }
    }
    return count
}
console.log(namBers("Ahmadjon"));



// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: 
// “….”} qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men 
// dasturlash kursida o’qiyman” Output: {minWord: “Men”, maxWord: “dasturlash”}
 function minManWord(num){
    let str = num.split(" ");
    let min = arr[0]
    let max = arr[0]
    for( let i = 0; i < str.length; i++){
        if(str[i].length < min.length){
            min = str[i] 
        }else if(str[i].length > max.length ){
            max = str[i]
        }
    }
    return {minWord:min , minWord : max};

 }
 console.log(minManWord("Men dasturlash kursida oqiyman"));



// 5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object
//  kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat 
// bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6}
 function nuyuObj(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i].length
    }
    return obj
 }
 console.log(nuyuObj(["text", "world", "laptop"]));


// 6. n natural soni berilgan 2 sonining dastlabki nta darajasidan tashkil 
// topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing n: 4 result :
//  [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
const  getLevel = (n) =>{
    let arr = []
    for(let i = 0; i <= n ; i++){
        arr.push(Math.pow(2,i))
    }
    return arr

}
console.log(getLevel(4));

// 7 array ichidagi o'rtadagi sonni topadigan function tuzing
// input: arr = [1,2,3,4,5] middle number = 3
let arr = [1,2,3,4,5]
function arrNumber (arr){
    let num = arr.length
    let nums = Math.floor(num / 2)
    if(num % 2 === 0){
        let nums1 = arr[nums - 1]
        let nums2 = arr[nums]
        return (nums1 + nums2) /2
    }else{
        return arr[nums]
    }
}
console.log(arrNumber(arr));
