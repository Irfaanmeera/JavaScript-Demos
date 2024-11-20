// const students = [
//     { id: 1, name: 'Alice', score: 85, class: 'A' },
//     { id: 2, name: 'Bob', score: 92, class: 'B' },
//     { id: 3, name: 'Charlie', score: 78, class: 'A' },
//     { id: 4, name: 'David', score: 95, class: 'C' },
//     { id: 5, name: 'Eva', score: 89, class: 'A' },
//     { id: 6, name: 'Freddy', score: 90, class: 'C' },
//   ]; //{A:2,B:1,C:3}

//   const classCount=students.reduce((acc,st)=>{
//     const className=st.class;
//     if(acc[className]) acc[className]++;
//     else acc[className]=1;
//     return acc;
//   },{});
//   console.log(classCount);
//----------------------------Gen function for even numbers

// function* genEvenNumbers(){
//     let num=0;
//     while(true){
//         yield num;
//         num=num+2;
//     }
// }
// const list =genEvenNumbers();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);
//-------------------------------Uncommon Elements in arr1 and arr2

;
// const res=[];
// const newSet=new Set([...arr1,...arr2]);
// newSet.forEach((val)=>{
//     if (!arr1.includes(val) || !arr2.includes(val))  {
//         res.push(val);
//     }
// });
// console.log(res);
//------------------------------array max using reduce fun
// const arr=[5,2,6,7,9,8];
// const result=arr.reduce((acc,curr)=>{
//     if(acc<curr) acc=curr;
//     return acc;
// },0);
// console.log(result);
//--------------------------------------------------

// const ba=[{af:[2,2],ag:2},{af:[2,2],ag:[2,2]},{af:[2,2],ag:2},{af:[2,2],ag:2}]

//const ba=[{af:[434,23],ag:56},{af:[43,234],ag:[2,3]},{af:[434,23],ag:62},{af:[96,23],ag:11}]

// let totalSum = ba.reduce((acc, obj) => {
//     let afSum = Array.isArray(obj.af) ? obj.af.reduce((sum, num) => sum + num, 0):obj.af;

//   let agSum = Array.isArray(obj.ag) ? obj.ag.reduce((sum, num) => sum + num, 0) : obj.ag;
//     return acc + afSum + agSum;
//   }, 0);

//   console.log(totalSum);

// const ba=[{af:[434,23],ag:56},{af:[43,234],ag:20},{af:[434,23],ag:62},{af:[96,23],ag:11}];

// let m=ba.reduce((acc,obj)=>{
//     let afsum=(Array.isArray(obj.af))?(obj.af).reduce((sum,curr)=>sum+curr,0):obj.af;
//     return acc+obj.ag+afsum;
// },0);
// console.log(m);

//  const ba=[{af:[434,23],ag:56},{af:[43,234],ag:20},{af:[434,23],ag:62},{af:[96,23],ag:11}];
// let count=0;
// for(let i of ba){
// count+=(Object.values(i).flat().reduce((acc,value)=>acc+value,0));
// }
// console.log(count)

//--------------------------------------------------------------------
// let num=121;
// let rev=(num.toString()).split('').reverse().join('');
// if(parseInt(rev)===num)
// console.log(true);
// else console.log(false);
//------------------------------------
//0,1,1,2,3,5,8,13
// function fiboSeries(n) {
//   let arr = [];
//   if (n <= 1) arr.push(n);
//   else {
//      arr = [0, 1];
//     for (let i = 2; i < n; i++) arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }
// console.log(fiboSeries(5));
//-------------------------------------------------------------------------------
// let str1="anagram";
// let str2="nagaram";
// console.log(str1.split('').sort().join('')===str2.split('').sort().join(''));
//-------------------------------------------------------------------------------

// const arr=[2,7,11,15];
// const target=9;
// const res=[];
// let y;
// for (let i = 0; i < arr.length; i++) {
//     const y = target - arr[i];
//     const yIndex = arr.indexOf(y);
//     if (yIndex !== -1 && yIndex !== i) {
//       res.push(i);
//       res.push(yIndex);break;}}
//       console.log(res);

//-------------------------------------------------------------------------------
// const prices=[2,4,1];
// let prices2 = prices.slice();
// prices2.sort((a,b)=>a-b);
// function diffCheck(prices2){
//   if (prices2.length < 2) {
//     return 0; // If there are less than 2 prices, profit is 0
//   }
//   if(prices.indexOf(prices2[prices2.length-1]) > prices.indexOf(prices2[0])){
//     return prices2[prices2.length-1]-prices2[0];
//   }
//   else
//   return diffCheck(prices2.slice(0,-1))

// }
// console.log(diffCheck(prices2));
//---------------------------------------------------------------
// const prices=[2,4,1];

// var maxProfit = function(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//       if (prices[i] < minPrice) {
//           minPrice = prices[i];
//       } else if (prices[i] - minPrice > maxProfit) {
//           maxProfit = prices[i] - minPrice;
//       }
//   }

//   return maxProfit;
// };

// console.log(maxProfit(prices));

//---------------------------------------------------------------
// const arr=[10,10,10];
// const uniqueArr=Array.from(new Set([...arr]));
// uniqueArr.sort((a,b)=>b-a);
// console.log(uniqueArr[1]?uniqueArr[1]:-1);

//---------------------------------------------------------------
// const arr=[10,5,10,16];
// let largest=Number.NEGATIVE_INFINITY;
// let secLargest=Number.NEGATIVE_INFINITY;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secLargest=largest;
//         largest=arr[i];
//     }else if(arr[i]!=largest && arr[i]>secLargest){
//         secLargest=arr[i];
//     }
// }
// console.log(secLargest);

//---------------------------------------------------------------
// const arr = [5, 1, 2, 6, 9, 8];
// let k = 3;
// k=k%arr.length;
// function ArrayRotation(arr, k) {
//   let i = 0;
//   while (i < k) {
//     arr = [arr[arr.length - 1],...arr];
//     arr.pop();
//     i++;
//   }
//   return arr;
// }
// console.log(ArrayRotation(arr, k));

//---------------------------------------------------------------
// const arr=[0,0,1,1,1,2,3,5,5,5,6];
// const newSet=Array.from(new Set([...arr]));

// console.log(newSet.length);

//---------------------------------------------------------------
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let sum = 0;
// let maxSum = arr[0];
// let sub = [];
// let tempSub=[];
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   tempSub.push(arr[i]);
//   if (sum > maxSum) {
//     maxSum = sum;
//     sub=[...tempSub];
//   }
//   if (sum < 0) {
//     sum = 0;
//     tempSub = [];
//   }
// }
// console.log(maxSum);
// console.log(sub);

//--------------------------------------------------------

// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// };

// console.log(twoSum(nums, target));

//--------------------------------------------------------

// console.log(a);
// const a=10;
// console.log(a);

//-----------------------------------------
// const nums=[1,2,3,4];
// let res=nums.reduce((acc,curr)=>acc+curr,0);
// console.log(res);

//--------------------------------------------------------
// let students=[
//     {name:"Piyush",rollNum:31,marks:55},
//     {name:"Jain",rollNum:11,marks:70},
//     {name:"Lovely",rollNum:62,marks:85},
//     {name:"Nithika",rollNum:23,marks:47}
// ];
// let names=students.map(st=>st.name.toUpperCase());
// console.log(names);

//const ba=[{af:[434,23],ag:56},{af:[43,234],ag:20},{af:[434,13,[11,49]],ag:63},{af:[96,23],ag:11}];
// let total=ba.reduce((acc,b)=>{
//     let afsum=Array.isArray(b.af)?b.af.flat(Infinity).reduce((acc,n)=>acc+n,0):b.af;
//     let agsum=Array.isArray(b.ag)?b.ag.flat(Infinity).reduce((acc,n)=>acc+n,0):b.ag;
//     return afsum+agsum+acc;
// },0);
// console.log(total);

//------------------------------------------------------------------
//  let students=[
//         {name:"Piyush",rollNum:31,marks:55},
//         {name:"Jain",rollNum:11,marks:70},
//         {name:"Lovely",rollNum:62,marks:85},
//         {name:"Nithika",rollNum:23,marks:47}
//     ];
// let k=students.map((x)=>(x.marks<60)?(x.marks+20):x.marks).filter(x=>x>=70).reduce((acc,x)=>acc+x,0);
// console.log(k);
//-----------------------------------------------------

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

//--------------------------closure
// function makeCounter() {
//     let count = 0;

//    return function(){
//     count++;
//     return count;
//    }

// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter());
// console.log(counter());
//---------------------------------------------------
// function createBase(base){
//     return( function(num){
//         console.log(num+base);
//     });

// }
// var addSix=createBase(6);
// addSix(10);
// addSix(21);
//--------------------------------------------
// function Counter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// var c=Counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

//-----------------------------------------
// const obj = {
//     value: 42,
//     regularFunction: function() {
//       console.log(this.value);
//     },
//     arrowFunction:() => {
//       console.log(this.value);
//      }
//   };
//   obj.regularFunction();
//   obj.arrowFunction();
//----------------------------------------
// function greet(greeting) {
//     console.log(greeting + ', ' + this.name);
//   }

//   const person = { name: 'Alice' };
//   greet.call(person,'Hello',person);
//--------------------------------
// const EventEmitter= require('events');

// const myEmitter= new EventEmitter();
// myEmitter.on('powerup',()=>{
//   console.log("power failure over");
// })
// myEmitter.on('powerfail',()=>{
//   console.log("power failure in progress");
// })
// myEmitter.emit('powerfail');
// myEmitter.emit('powerup');
//=-------------------------------------------
// const http=require('http');

// const server=http.createServer((req,res)=>{
//   res.end("hi welcome");
// })

// server.listen(3000,()=>{
//   console.log("server up and running");
// })
//-------------------------------------------
// const args = process.argv.slice(2);
// console.log(args);

//-------------------------------------------
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if ((req.url === "/")) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home Page");
//   } else if ((req.url === "/slow-page")) {
//     for (let i = 0; i < 60000000; i++) {}
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("slow Page");
//   }
// });
// server.listen(8000, () => console.log("server running at 8000"));

//-------------------------------------------------
// const fs=require("fs");

// let currDate=new Date().toString();
// fs.writeFile("aleenatest.txt",currDate,"utf8",(err)=>{
//   if(err)
//     console.log(err.message);
//   else
//   console.log("written to file");
// });
// fs.stat("aleenatest.txt",(err,stats)=>{
//   if (err) throw err;
// console.log(stats)})
//-----------------------------------------------------------
// let multiply=function(x,y){
//   console.log(x);
//   console.log(x*y);
// }
// let multiplybyTwo=multiply.bind();
// multiplybyTwo(2,3,5);

//------------------------------------------
// let sum=function(x){
//   return function(y){
//     return (x+y);
//   }
// }
// let addfive=sum(5);
// console.log(addfive(51));












