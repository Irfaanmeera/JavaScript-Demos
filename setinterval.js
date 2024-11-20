const intervalId = setInterval(()=>{
   console.log('Interval Function Running...')
},1000);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log('Interval stopped after 5 seconds')
},5000)
