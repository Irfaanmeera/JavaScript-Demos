function classifyAge(age){
    switch(true){
        case age <=12 && age >0:
            console.log('Child')
            break;
        case age >=12 && age<=19:
            console.log('Teenager')
            break;
        case age >=19 && age <=60:
            console.log('Adult')
            break;
        case age >60:
            console.log('Senior Citizen')
            break;
        default:
            console.log('INVALID AGE')
    }
}

classifyAge(8);   // Outputs: Child
classifyAge(15);  // Outputs: Teenager
classifyAge(30);  // Outputs: Adult
classifyAge(70);  // Outputs: Senior
classifyAge(-5); 
