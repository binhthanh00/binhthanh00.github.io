//bai 21
let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] 
let Sum = a.reduce((b,c)=>{
    return b + c
},0)
console.log("Sum:", Sum);
// bai 22
function max(a)
{
    let Max=a[0];
    for(let i=0; i<a.length; i++)
    {
        if(Max < a[i])
        {
            Max=a[i];
        }
    }
    return Max;
}

function min(a)
{
    let Min=a[0];
    for(let i=0; i<a.length; i++)
    {
        if(Min > a[i])
        {
            Min=a[i];
        }
    }
    return Min;
}

function average(a)
{
    return (min(a)+max(a))/2;
}

console.log("Max of Array:" + max(a))
console.log("Min of Array:" + min(a))
console.log("Avg of Array:" + average(a))
// bai 23

let b=[];
for(let i=0; i<a.length; i++)
{
    let check=true;
    for(let j=i+1; j<a.length; j++)
    {
        if(a[i]===a[j])
        {
            check=false;
            break;
        }
    }
    if(check===true)
    {
        b.push(a[i]);
    }
}
let max1=0;
for(let i=0; i<b.length; i++)
{
   
    let dem=0;
    for(let j=0; j<a.length; j++)
    {
        if(a[j]===b[i])
        {
            dem++;
        }
        
    }
    if(max1<dem)
    {
        max1=dem;
    }
    
}
console.log("Count of Number :",max1);
// bai 24
function isPrime(x)
{
    if(x<2)
    {
        return false;
    }
    else if(x===2)
    {
        return true;
    }
    else
    {
        for(let i=2; i<=Math.sqrt(x); i++)
        {
            if(x%i===0)
            {
                return false;
            }
        }
        return true;
    }
}
const c=[1,2,3,2,3,4,6,7];
const d=c.filter((x)=>
{
    return isPrime(x)==true;
})
console.log("all filter isPrime of Array:",d);
//bai25
const squareArray=c.map((x)=>
{
    return x*x;
})
console.log("squareArray:",squareArray);
//bai 26 
const e = [1, 2, 3, 4, 6, 7];
function minDistance(e, k) {
    let min = Math.abs(k - e[0]);
    for (let i = 0; i < e.length; i++) {
        if (min > (Math.abs(k - e[i]))) {
            min = Math.abs(k - e[i]);
        }
    }
    return min;
}
const k=5;
const distance=minDistance(e,k)
let f=[];
for(let i=0; i<e.length;i++)
{
    if(k > e[i])
    {
        if(k-e[i]===distance)
        {
            b.push(e[i]);
        }
    }
    else
    {
        if(Math.abs(k-a[i])===distance)
        {
            f.push(a[i]);
        }
    }
}
console.log("My Number :",f);
// bai 27 
let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do THi thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen nhat"
    }
]

function titleCase(xx) {
    xx = xx.toLowerCase().trim()
    for (let i = 0; i < xx.length; i++) {
        if (i == 0 || xx[i - 1] == " ") {
            xx = xx.slice(0, i) + xx[i].toUpperCase() + xx.slice(i + 1)
        }
    }
    return xx;
}
for (let i = 0; i < students.length; i++) {
    students[i].firstName = titleCase(students[i].firstName);
    students[i]['lastName'] = titleCase(students[i].lastName);
}
for (let i = 0; i < students.length; i++) {
    if ((students[i].firstName.search('a') !== -1  || students[i].firstName.search('A') !== -1) && students[i].firstName.length > 3) {
        console.log("students:",students[i]);
    }
}
// bai 28
const resultFilter=students.filter((x)=>
{
    if(x.lastName.indexOf("Do")!==-1)
    return true;
})
console.log("resultFilter:", resultFilter);
// bai 29
const sortPeople=students.sort((a,b)=>
{
    if(a.firstName>b.firstName) return 1;
    else if(a.firstName<b.firstName)return -1;
    else return 0;
})
console.log(sortPeople);
// bai 30
const m=[1,1,1,1,1,1,1,1,1,1]
let max3=m[0];
let max4=a[0];
for(let i=0;i<m.length;i++)
{
    if(max3<m[i])
    {
        max3=m[i];
    }
}
for(let j=0;j<m.length;j++)
{
    if(max3 > m[j] && max4<m[j])
    {
        max3=m[j];
    }
    else if(max3===m[j] && max3===m[j])
    {
        max4=-1;
    }
}
console.log("max the second :",max4);
// bai 31

let check=false;
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        for(let g=j+1;g<a.length;g++)
        {
            if(a[i]+a[j]+a[g] === 30)
            {
                console.log("yes",true);
               
            }
        }
    }
}
if(check===true)
{
    console.log('yes');
}
else
{
    console.log('no');
}
// bai32
const n=[1,3,6,9,11,20];
let k2=-5;
let x2;
if(n[n.length-1] < k2)
{
    n.push(k2);
}
else
{
    let i=n.length;
    while( n[i-1] > k2 && i>0)
    {
        n[i]=n[i-1];
        i--;
    }
    n[i]=k2;
}
console.log(n);
//bai 33
const p=[9,8,7,6,5,4,3,2,1]
for(let i=0;i<p.length-1;i++)///selecttions sort
{
     let min=i;
    for(let j=i+1;j<a.length;j++)
    {
        if(p[min] > p[j])
        {
            min=j;
        }
    }
    let temp=p[min];
    p[min]=p[i];
    p[i]=temp;
}
console.log("Selection sort :",p);
// bai 20 
//solve exercise 
let queriesStr = `computer =            " ngAND    98    " AND class = "  REACTJS2002 "`
let queries = queriesStr.split(/"*"/) // split by " with inside is anything"

for(let i = 1; i < queries.length; i+=2){
    queries[i] = '"' + queries[i].trim() + '"'
    
}
let result = queries.join("")
console.log(result)
