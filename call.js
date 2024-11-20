let person = {name:"Irfaan"}

// function greet(message){
//     console.log(`${message} ${this.name}`);
//         }

const person1 = {
    name: 'John',
    
    greet: function (message) {
      console.log(`${message} ${this.name}`); 
    }
  };
// greet.call(person,'Hello')
person1.greet.call(person,'Hello')

// greet.apply(person,['Hi']);


// const sayHello = greet.bind(person)
// sayHello('Greetings');



// // const person = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     fullName: function () {
// //       return this.firstName + ' ' + this.lastName;
// //     }
// //   };
  
//   // Define another object
//   const anotherPerson = {
//     firstName: 'Jane',
//     lastName: 'Smith'
    
//   };
  
//   // Use the fullName method from the person object for anotherPerson using call
//   const fullNameOfAnotherPerson = person.fullName.call(anotherPerson);
  
//   console.log(fullNameOfAnotherPerson); // Output: Jane Smith
  