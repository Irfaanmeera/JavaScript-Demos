// async function getData(){
//     return 'Namaste'
// }
// //async function always return promise. If its'returning a value, 
// //then it wrap the  value in a promise object and return that promise

// const dataPromise = getData()
// //datapromise is a promise containing data

// //HHow to get the data from the promise?

// dataPromise.then(res=>console.log(res))

//in the console the value from the promise has been extracted.



//what if the promise is present?
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('The promise is resolved')
    },20000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('The promise is resolved')
    },40000)
})
// async function getData1(){
//     return p;
// }
// const dataPromise1 = getData1()
// dataPromise1.then(res=>console.log(res))


async function handlePromise(){
    console.log('Hello World');

    const val1= await p1;
    console.log('Namaste Irfaan')

    const val2= await p2;
    console.log('I love Javascript')
}

handlePromise()