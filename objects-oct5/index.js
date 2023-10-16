// // Run this demo in a browser via an HTML file

// // === Slide Recap ===
// // An object is a collection of key-value pairs
// // that can be accessed by key and iterated over.

const shoes = {
    color: "red",
    size: 10,
    price: 45,
    type: "sneaker",
  };
  
//   // Using `.table` is a nice way to see the structure of an object
//   console.table(shoes);
  
//   // Dot vs bracket notation
//   console.log(shoes.color);
//   console.log(shoes["size"]);
  
//   // Modifying an object
//   //bracket notation
    shoes.price= 35
//   //dot notation
  //console.log(shoes.price);
  
//   // Iterating over an object
//   for (const key in shoes) {
//     console.log(`The shoes' ${key} is ${shoes[key]}`);
//   }
  
//   // Object methods
//   console.log(Object.keys(shoes));
//   console.log(Object.values(shoes));
//   console.log(Object.entries(shoes));
  
//   // The following material is *not* covered in the slides!
  
//   // **********************
//   //DEMO objects can be passed to functions
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - parameters (passing objects)
//   // **********************
  
  function printObject(obj) {
    for(const key in obj){
        console.log("the key is: "+key+ " and the value is " + obj[key])
    }
  }
  
  //printObject({name:"bob", age:43, job:"teacher"});
  //shoes.color = "green";
//   printObject(shoes);
  
//   // **********************
//   //DEMO objects can be returned from functions
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - return (objects from functions)
//   // **********************
  
  function createSimpleObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
  }
  
  const greyShoes = createSimpleObject("type","heel");
  //console.log(greyShoes);
  
//   // **********************
//   //DEMO objects can be modified by functions
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - parameters (modify an object)
//   // **********************
  //create a price assigned with a random number
//   function addRandomValue(obj, key) {
//     obj[key]= Math.random()
//     return obj
//   }
  
//   addRandomValue(greyShoes, "size");
//   console.log(greyShoes);
  
//   // **********************
//   //DEMO the values of objects can be arrays
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - composition (values can be arrays)
//   // **********************
  
//   const arr = [1, 2, 3, 4, 5, 6];
  
//   const oddsEvens = {
//     odds: [],
//     evens: [],
//   };
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       oddsEvens.odds.push(arr[i]);
//     } else {
//       oddsEvens.evens.push(arr[i]);
//     }
//   }
//   console.log(oddsEvens);
  
//   // **********************
//   //DEMO An array can have objects as elements
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - composition (array of objects)
//   // **********************
  
//   const cart = [
//     shoes,
//     {
//       color: "blue",
//       size: 12,
//       price: 100,
//     },
//   ];
  
//   console.log(cart);
//   log the shoes object to the console
//   console.log(cart[0])
//   // **********************
//   //DEMO JSON (parsing and printing)
//   // **********************
//   // **********************
//   // Learning Objectives
//   //  - JSON methods (parse and stringify)
//   // **********************
  
//   const obj = { foo: "bar", bazz: 42, quq: true };
  
//   const str = JSON.stringify(obj, null, 2);
//   console.log(typeof(str));
//   console.log(typeof str);
  
  const obj2 = JSON.parse('{"foo": "bar", "bazz": 42, "quq": true}');
  
  console.log(obj2);
  console.log(typeof obj2);




