// 23 solution
let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// a = a.sort() // n*log(n)
// console.log(a)
let maxFrequency = 0
for( let i =0; i< a.length; i++){
    // let curFrequency = 0
    // for (let j = 0;j<a.length;j++){
    //     if(a[j] == a[i]){
    //         curFrequency++
    //     }
    // } 
    let filterEqualValue = a.filter((value)=>{
        return a[i] == value
    })
    curFrequency = filterEqualValue.length
    if(maxFrequency < curFrequency){
        maxFrequency = curFrequency
    }
   // console.log(a[i] + "Frequency" + curFrequency)
}
console.log("output:" + maxFrequency)
// 26
let b = [1,2,3,4,6,7]
let k =8
let minSpace = Infinity
for (let i = 0; i<b.length;i++){
    let space = Math.abs(b[i]-k)
    if(minSpace > space){
        minSpace = space
    }
}
let results26 = []
for (let i =0 ; i< b.length;i++){
    let space = Math.abs(b[i]-k)
    if(space === minSpace){
        results26.push(b[i])
    }
}
console.log("Result :", results26)
//24
function isPrimeNumber(value){
    var isPrime = false;
    if(value > 1){
        isPrime = true;
        for(var j = 2; j <= Math.sqrt(value);j++){
            if(value % j === 0){
                isPrime = false;
                break
            }
        }
    }
    return isPrime
}

let resultPrimes = a.filter(value =>{
    return isPrimeNumber(value)
})
console.log("Result", resultPrimes)
// bai 20 
//solve exercise 
let queriesStr = `computer = " ngAND    98    " AND class = "  REACTJS2002 "`
let queries = queriesStr.split(/"*"/) // split by " with inside is anything"

for(let i = 1; i < queries.length; i+=2){
    queries[i] = '"' + queries[i].trim() + '"'
    
}
let result = queries.join("")
console.log(result)