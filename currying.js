// Example 1

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); // 3


  // Example 2

  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = _.curry(sum); // using _.curry from lodash library
  
  alert( curriedSum(1, 2) ); // 3, still callable normally
  alert( curriedSum(1)(2) ); // 3, called partially


  // Example 3
  function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }

  log = _.curry(log);

  log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

  log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)


  // logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message


function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }


  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6, still callable normally
  alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  alert( curriedSum(1)(2)(3) ); // 6, full currying


  // func is the function to transform
function curried(...args) {
    if (args.length >= func.length) { // (1)
      return func.apply(this, args);
    } else {
      return function(...args2) { // (2)
        return curried.apply(this, args.concat(args2));
      }
    }
  };

  // Example 7
  function curry(func) {
    let globalArgs = [];
    
    let resultFunc = function curryFunc(...args) {
    globalArgs.push(...args);
    return curryFunc;
    };
    
    resultFunc[Symbol.toPrimitive] = function () {
    return func(...globalArgs);
    };
    
    return resultFunc;
    }
    
    function sum(a, b, c) {
    return a + b + c;
    }
    
    let currySum = curry(sum);
    
    console.log( sum(10, 20, 30) );
    console.log( currySum(10)(20, 30) );