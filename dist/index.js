"use strict";
console.log("hello world");
let age = 30;
if (age < 50) {
    age += 10;
}
console.log(age);
let sales = 222222;
let is_published = false;
console.log(sales);
let number = [1.56369, 2, 3];
let number2 = ['a', 'b'];
let t = number[0].toFixed(2);
console.log(t);
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
const mySize = Size.medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.5;
    }
    return income * 1.2;
}
calculateTax(10000, 2023);
let employee = { id: 1, name: '' };
employee.name = 'Moha';
let employee2 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
let employee3 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quentity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    console.log('Name not found !');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
const customers = [null, 'Moha', 'Abdi', 'John'];
customers === null || customers === void 0 ? void 0 : customers[0];
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map