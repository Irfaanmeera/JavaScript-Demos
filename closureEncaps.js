function incrementCount(){
var count = 0;
  return function innerCount(){
    count ++;
    console.log(count)
  }
}

var count1= incrementCount()
count1()
count1()
count1()

// var count2 =incrementCount()
// count2()