// Primitives:  | number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


// Primitives

let age:  | number;

age = 12;

let userName: string;

userName = 'Krystyna';

let isDeveloper: boolean;

isDeveloper = true;

// More complex types

let hobbies: string[];

hobbies = [ 'Sports', 'Cooking', 'Coding'];


let person: {
    name: string;
    age:  | number;
};

person = {
    name: 'Krystyna',
    age: 32
};

//person = {
//    isImployee: true
//}

let people: {
    name: 'Krystyna',
    age: 32
}[];

// Type inference

let course: string  | number = 'Typescript';   // Union Types

  course= 12345;

  // Type Aliases

  type Person = {
    name: string;
    age:  | number;
  }

  let studenst: Person[];

  // Functions and types

  function add(a: number, b: number): number // return value 
  {
      return a + b;
  }

  function printOutput(value: any) { // return void that is undefined
      console.log(value);
  }

  // Generics 

  function insertAtBeginning<T>(array: T[], value: T) {
      const newArray = [value, ...array];
      return newArray; // The advantage of this function could be that the original array never changes, but instead we're getting a brand new array.
  }

  const demoArray = [1, 2, 3];

  const updatedArray = insertAtBeginning(demoArray, -1); // = [-1, 1, 2, 3]
  const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

  //updatedArray[0].split('');

