// for(var i=1;i<=10;i++){
//     function close(x){
//         setTimeout(()=>{
//             console.log(x)
//         },i*1000)
//     }
//     close(i)
// }

//using let

for(let i = 1; i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}