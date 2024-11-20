// function flightBooking(destination){
//     return new Promise((resolve,reject)=>{
//         console.log(`Booking flight to ${destination}... `)
//         setTimeout(()=>{
//             if(destination){
//                 resolve('Flight booked successfully')
//             }else{
//                 reject('Flight booking cancelled')
//             }
//         },2000)
//         })       
// }

// function hotelBooking(room){
//     return new Promise((resolve,reject)=>{
//         console.log(`Booking of ${room}...` )
//         setTimeout(()=>{
//             if(room){
//                 resolve(`The ${room} room booked successfully `)
//             }else{
//                 reject('Room booking cancelled')
//             }
//         },2000)
//     })
// }


// flightBooking('New York').then(flightConfirmation =>{
//     console.log('Flight Confirmation')
//     return hotelBooking('deluxe')
// })

// .then(hotelConfirmation=>{
//     console.log('Hotel Confirmation')
// })
// .catch(error=>{
//     console.log('An error occured')
// }

// )


function flightBooking(destination,callback){
    return new Promise((resolve,reject)=>{
        console.log(`Booking flight to ${destination}... `)
        setTimeout(()=>{
            if(destination){
                callback(null,'Flight booked successfully')
            }else{
                callback('Flight booking cancelled')
            }
        },2000)
        })       
}

function hotelBooking(room,callback){
    return new Promise((resolve,reject)=>{
        console.log(`Booking of ${room}...` )
        setTimeout(()=>{
            if(room){
                callback(null,`The ${room} room booked successfully `)
            }else{
                callback('Room booking cancelled')
            }
        },2000)
    })
}





flightBooking('New York',(error,flightConfirmation)=>{
    if(error){
        console.log('An error occured')
    }else{
        console.log(flightConfirmation)
        return hotelBooking('Deluxe',(error,hotelConfirmation)=>{
            if(error){
                console.log('An error occured')
            }else{
                console.log(hotelConfirmation)
            }
        })
    }
})

