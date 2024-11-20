function makeCounter() {
    var count = 0;

    function increment(){
    count++;
    return count;
   }
    function decrement(){
    count--;
    return count;
   }
   function getCount(){
    return count;
   }
   return{
    increment,
    decrement,
    getCount
   }

}

const counter = makeCounter();

console.log(counter.increment()); // 2
console.log(counter.increment()); // 2
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 2
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2

