console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("EXERCISE 2:\n==========\n");
//Exercise 3 section 
let i = 1;

while (i <= 100) {
    let output = "";

if(i % 3 == 0) {
    output += "FIZZ";
}

if (i % 5 == 0) {
    output += "BUZZ";
}
if (i % 2 !== 0) {
    console.log(`${i} ${output}`);
} 

i++;

}

let x = 1;

do {
    let output = "";

    if(x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 ==0) {
        output += "BUZZ";
    }
    if (x % 2 !== 0) {
        console.log(`${x} ${output}`);
    } 
    x++;

} while (x <= 100);
// Exercise 4 section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;
for (let i = 1; i <= n; i++){
    if (i == value) {
        console.log(`Found ${value}!`);
        break;
    }
}

if (!found) {
    console.log(`Did not find ${value}`);
}

