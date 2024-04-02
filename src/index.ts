console.log("hello world")

let age: number = 30;
if (age < 50) {
age +=10  
}

console.log(age);

let sales: Number = 222222;
let is_published = false;
console.log(sales);


// ---------- Arrays----------------------------

let number: number[] = [1.56369, 2, 3];
let number2: string[] = ['a', 'b'];


let t = number[0].toFixed(2)
console.log(t);


// let number1: number[] = [1, 2, "3"];  //wrong

//let number: number[] = []; // declare explicity type if the array is empty


//-----------------------Tuples-------------------------

// tuple are useful when we have tow values like KEY : VALUE paires

// let user: [string, number] = ['moha', 5]

//user.push(8) should throw error because tuple has fixed length




// --------------------------Enum---------------------


// Enum ---> we can represent a list of related constants
// const small = 1
// const medium = 2
// const large = 3

//PascalCase naming convention
enum Size { small = 1, medium, large }

const mySize: Size = Size.medium
console.log(mySize);



// if we define enum using const keywoard the compiler will generate more optimised/short code in .js

// const enum Size {small=1, medium, large } 




/////////--------FUNCTIONS----------///////////////


function calculateTax(income: number, taxYear=2022): number {
  // let x;
  //if don't pass taxYear write like this inside if condition (taxYear || 2022)
  if(taxYear < 2022) {
    return income * 1.5;
  }

  return income * 1.2
}


calculateTax(10000, 2023)




//----------------- OBJECTS ---------------///

let employee: {
  readonly id: number,
  name: String
} = {id: 1, name: ''}
employee.name = 'Moha'

// we cannot change property in the object in it sets readonly keyword

// cannot assign to 'id' because it's readonly property
// employee.id = 5

//add function
let employee2: {
  readonly id: number,
  name: String,
  retire: (date: Date) => void
} = {
  id: 1, 
  name: '',
  retire: (date: Date) => {
    console.log(date);
    
  }
}

//better way to work with objects by type aliasses
//type aliasses

type Employee = {
  readonly id: number,
  name: String,
  retire: (date: Date) => void
}

let employee3: Employee = {
  id: 1, 
  name: '',
  retire: (date: Date) => {
    console.log(date);
    
  }
}


//--------------- UNION TYPES ---------------------//

// we can give a variable or function parameter more than one type

function kgToLbs(weight: number | string): number {

  //Narrowing
  if(typeof weight === 'number'){
    return weight * 2.2;
  }else {
    return parseInt(weight) * 2.2;
  }

}
// we can pass both types string and number
kgToLbs(10)
kgToLbs('10')


//-------- INTERSECTION TYPES ----------------//

//using intersection type we can combine two types into new type 

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

// type intersection in action
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}


//---------------- Lieral Types -------------------//

// Literal ( assign exact or specific value)
type Quantity = 50 | 100;
//we can only assign either 50 or 100
let quentity: Quantity  = 100

// we can ssign strings
type Metric = 'cm' | 'inch'


//-------------- NULLABE TYPES ---------------------//

// typescript are very strict with null and undefined values

function greet(name: string | null | undefined) {
  if(name) {
    console.log(name.toUpperCase())
  }
  console.log('Name not found !');
  
}

greet(undefined)



//---------------OPTIONAL CHAINING ---------------//

type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0? null : { birthday: new Date()}
}

let customer = getCustomer(1)

//Optional property access operator
  console.log(customer?.birthday);

//Optional element access operator
const customers = [null, 'Moha', 'Abdi', 'John']
customers?.[0]

//Optional call access operator
let log: any = null
// if we run will crach because log in equal to null
// log('a') 

// will excuted only if log is representing the acual log function otherwise will get undefined
log?.('a')