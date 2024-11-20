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
//     acc[className]?acc[className]++:acc[className]=1;
//     return acc;
//   },{});
//   console.log(classCount);


setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  
  setImmediate(() => {
    console.log('setImmediate');
  });
  
  // Output:
  // setImmediate
  // setTimeout
  