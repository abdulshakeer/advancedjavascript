// Example Of Async/Await in Javascript
// Many Times we make a web request or API Request or may be a database Request It takes some milliseconds to give a response on that time using this asycronous and await is the best solution

// In the Below code If we are not using async in two() function it will through an Error Inorder to overcome this Problem we are Using async and await
 


const one = () =>{
    return "I am one";
};
// This Below Code is giving Undefined as a output
// const two = () => {
//     setTimeout(()=>{
//         return "I am two";
//     },3000);
// };

// To Solve above Problem we use Below Code Using asyncronous
const two = () => {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                    resolve("I am two");
                },3000);
      });
    };

const three = () => {
    return "I am Three";
};

// Using Async call and await to below method
const callMe = async () => {
    let valOne = one();
    console.log(valOne);

    let valTwo = await two(); // Using await
    console.log(valTwo);

    let valthree = three();
    console.log(valthree);
};

callMe();

//Output
// I am one
// I am two
// I am Three



//Syntax of Async and Await
// 1
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();

// 2
  async function f() {
    return 1;
  }
  
  f().then(alert);

// 3

  async function f() {
    return Promise.resolve(1);
  }
  
  f().then(alert);