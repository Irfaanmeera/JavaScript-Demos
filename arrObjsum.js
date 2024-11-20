// What is the total sum of marks for students after adding 20 marks to those who scored less than 60, 
// and then filtering out those with marks less than 70?

let students=[
    {name:"Piyush",rollNum:31,marks:55},
    {name:"Jain",rollNum:11,marks:70},
    {name:"Lovely",rollNum:62,marks:85},
    {name:"Nithika",rollNum:23,marks:47}
];
function sumMark(arr){
 return arr.map((st)=>(st.marks<60)?(st.marks+20):st.marks).filter(st=>st>=70).reduce((acc,curr)=>acc+curr,0)
}
console.log(sumMark(students))