
let count = 0
function incrementCount(count) {
    console.log(count);
    try {
        incrementCount(count + 1);
    } catch (error) {
        console.error("error");
    }
    }
   
   incrementCount(0)


function flatten(array) {
    let result = [];

    for (let item of array) {
        if (Array.isArray(item)) {
          result = result.concat(flatten(item)); 
        } else {
          result.push(item);
        }
      }
    
      return result;
    }
const myArray = [1, [2, [3, 4]], 5];
console.log(flatten(myArray)); 
    

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return num > 1;
}

function printPrimeNumbers(n) {
  for (let i = 0; i <= n; i++) {
      if (isPrime(i)) {
          console.log(i);
      }
  }
}

printPrimeNumbers(30);


let num = 2357111317192329;

let str = `${num}`;
console.log(str);

let element = document.createElement("p");
element.textContent = str;
document.body.appendChild(element);
setTimeout(() => {
  alert("calculation complete"); 
}, 1000);












//below does not work

// function trampoline(flAr) {
    // const trampoline = (f, ...args) => {
    //     let result = f(...args);
    //     while (typeof result === "function") {
    //         result = result();
    //     }
    //     return result;
    // }
// }

// console.log(trampoline(myArray));



// function addPrimeNumbersToElement(p, limit) {
//   const primes = getPrimeNumbers(limit); 
//   const element = document.getElementById("p");

//   if (!element) {
//     console.error('Element not found:', p);
//     return;
//   }

//   element.innerHTML = primes.join(', ');
// }

// function getPrimeNumbers(limit) {
//   const primes = [];

//   for (let num = 2; num <= limit; num++) {
//     if (isPrime(num)) {
//       primes.push(num);
//     }
//   }

//   return primes;
// }


// const element = document.createElement("p");
// element.textContent = ""
// document.body.appendChild(element);


// function isPrime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//           return false;
//       }
//   }
//   return num > 1;
// }

// function printPrimeNumbers(n) {
//   for (let i = 2; i <= n; i++) {
//       if (isPrime(i)) {
//           console.log(i);
//       }
//   }
// }

// printPrimeNumbers(100);
// console.log(printPrimeNumbers)
// let p = document.getElementById("p")



// const body = document.querySelector("body");
// body.style.backgroundColor = "black";
// const h1 = document.createElement("h1");
// h1.style.color = "white"
// // body.append(h1);


// function addPrimeNumbersToElement(h1, limit) {
//     const primes = [];
  
//     function isPrime(num) {
//       if (num <= 1) return false;
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//       }
//       return true;
//     }
  
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//     }
  
//     const h1 = document.getElementById(h1);
//     h1.textContent = primes.join(', ');
//     alert("calculation finished")
//   }
  
  
//   addPrimeNumbersToElement('primes', 1000);
//   console.log(addPrimeNumbersToElement('primes', 1000));
 