# JavaScript Core

**Reference Links**:

- [JavaScript](https://www.w3schools.com/js/)

## Goals

**Core Concepts**:

1. `String`
- Strings are for storing text
- Strings are written with quotes
    + Single quotes: ''
    + Douple quotes: ""
    Strings created with single or double quotes work the same and there is no differnce between the two.
- `Quotes inside quotes`: you can use quotes inside a string, as long as they don't match the quotes surrounding the string.
    let answer1 = "It's alright";
    let answer2 = "He is called 'Johnny'";
    let answer3 = 'He is called "Johnny"';
- `Template Strings`:
    + Templates were introduced with ES6.
    + Templates are strings enclosed in backticks (``)
    + Templates allow single or double quotes inside a string.
    let text = `He's often called "Johnny"`;
- `String lenght`:
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
- `Escape Characters`: use an backslash escape character
    Code        Result      Description
    \'          '           Single quote
    \"          "           Double quote
    \\          \           Backslash
    \b                      Backspace
    \f                      Form Feed
    \n                      New Line
    \r                      Carriage Return
    \t                      Horizontal Tabulator
    \v                      Vertical Tabulator
- `Beaking long lines`:
    document.getElementById("demo").innerHTML = "Hello " +
    "Dolly!";
- `Javascript strings as objects`:
    + Strings can also be defined as objects with the keyword `new` let y = new String("John");
    + Notes: Do not create String objects.
             The `new` keyword complicates the code and slows down execution speed.
             String objects can produce unexpected results

2. `Number`
- JavaScript has only one type of number.
- Number can be written with or without decimals.
- JavaScript Numbers are Always 64-bit Floating Point.
- JavaScript uses the + operator for both addition and concatenation. Numbers are added, strings are concatenated.
3. `Object`
- An Object is a variable that can hold many variables.
- Objects are collections of key-value pairs, where each key (known as property names) has a value. Ex: const car = {type:"Fiat", model:"500", color:"white"};
- When an object is declared with const, you cannot later reassign it to point to a different variable.
- Objects are containers for Properties and Methods.
    Properties are named Values.
    Methods are Functions stored as Properties.
    Properties can be primitive values, functions, or even other objects.
    Constructors are Object Prototypes.
- In JavaScript, Objects are King, almost "everything" is an object.
    Objects are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Arrays are objects
    Maps are objects
    Sets are objects
All JavaScript values, except primitives, are objects.
- A primitive data type is data type that can only store a single primitive value.
JavaScript defines 7 types of primitive data types:
    Type	        Example value
    string	        "Hello"
    number	        3.14
    boolean         true
    bigint	        12345678901234
    null	        null
    undefined	    undefined
    symbol	        symbol

4. **Array**:
- An Array is an object type designed for storing data collections.
- Key characteristics of JavaScript arrays are:
    + Elements: An array is a list of values, known as elements.
    + Ordered: Array elements are ordered based on their index.
    + Zero indexed: The first element is at index 0, the second at index 1, and so on.
    + Dynamic size: Arrays can grow or shrink as elements are added or removed.
    + Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
- The difference between Arrays and Objects:
    + In JavaScript, arrays use numbered indexes.  
    + In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.

- `map()`
    + Iterates over the array element by element.
    + Applies a transformation function.
    + Always returns a new array.
    + Output array length === input array length.
    + Example:  const prices = [100, 200, 300];
                const priceWithTax = prices.map(price => price * 1.1);
                // [110, 220, 330]
    + Common mistakes: using map() for side effects: prices.map(p => console.log(p)); => use forEach() instead.
    + When to use:  Formatting API responses
                    Converting data types
                    Extracting properties

- `flatMap()`
    + Runs map()
    + Then runs flat(1) automatically
    + Example:  const users = [
                    { name: "A", hobbies: ["music", "sports"] },
                    { name: "B", hobbies: ["reading"] }
                ];

                const hobbies = users.flatMap(u => u.hobbies);
                // ["music", "sports", "reading"]
    + Limits:   Only flattens 1 level
                Not suitable for deeply nested arrays
    + When to use:  Transform + flatten results
                    Avoid .map().flat()

- `reduce()`
    + Processes the array from left to right.
    + Keep an accumulator.
    + Final accumulator is returned.
    + Syntax:   array.reduce((accumulator, current, index, array) => {
                    return newAccumulator;
                }, initialValue);
    + Common pitfalls:  Forgetting initialValue
                        Writing unreadable logic
    + When to use:  Grouping
                    Aggregation
                    Converting arrays -> objects

- `String/Array includes()`
    + Uses SameValueZero comparison
    + Works with NaN (unlike indexOf)
    + Example:  Array: [NaN].includes(NaN); // true
                String: "JavaScript".includes("Script"); // true
    + When to use:  Permission checks
                    Feature flags
                    Simple search
- `forEach()`
    + Loops over elements
    + Ignores returned values
    + Always return undefined
    + Example:  users.forEach(user => {
                    sendEmail(user);
                });
    + Important limitations:    Cannot `break`    
                                Cannot `await` properly (without extra handling)

- `filter()`
    + Runs a test function
    + Keeps items that return true
    + Returns a new array
    + Example:  const students = [
                    { score: 40 },
                    { score: 80 }
                ];

                const passed = students.filter(s => s.score >= 50);
                // [{ score: 80 }]
    + Important detail: Does not stop early
                        Always checks all elements

- `groupBy()`
    + Creates an object
    + Keys = result of callback
    + Values = arrays of items
    + Example: Object.groupBy([1, 2, 3, 4], n => n % 2 === 0 ? "even" : "odd");
    + When to use:  Categorazation
                    Reporting data
- `find()`
    + Returns the first matching element
    + Stops immediately when found
    + Example: users.find(u => u.id === 5);
    + Important:    Returns `undefined` if not found
                    Does NOT return an array

- `findIndex()`
    + Same as find() but returns index
    + When useful: Updating items immutably
                    const index = users.findIndex(u => u.id === 2);
                    const newUsers = [...users];
                    newUsers[index] = { ...newUsers[index], name: "Updated" };

- `some()`
    + Returns `true` if any item passes
    + Stops early
    + Example: orders.some(o => o.status === "pending");
    + Real use cases: Validation, Permission checks

- `every()`
    + Returns `true` only if all pass
    + Stops early on failure
    + Example: tasks.every(t => t.done);

* `Summary`
    Goal	                Best Method
    Transform items	        map
    Remove items	        filter
    Find one item	        find
    Check existence	        some, includes
    Check all	            every
    Side effects	        forEach
    Group / Aggregate	    reduce, groupBy
    Transform + flatten	    flatMap

5. **Functions**:
    + What are Functions?
        Functions are fundamental building blocks in all programming.
        Functions are reusable block of code designed to perform a particular task.
        Functions are executed when they are "called" or "invoked".
    + Syntax:   function name ( p1, p2, ... ) {
                    //code to be executed  
                }

- Declaration function
    + Syntax:
        function add(a, b) {
            return a + b;
        }
    + Key characteristics: 
        `Hoisting`: function declarations are fully hoisted

            add(2, 3); //works

            function add(a, b) {
                return a + b;
            }

            The entire fuction is moved to the top of its scope during compilation.

        `this` behavior
            this depends on how to the function is called
            NOT where it's defined

            const obj = {
                x: 10,
                show() {
                    console.log(this.x);
                }
            };

            obj.show(); //10

        `can be used as constructor`

            function User(name) {
                this.name = name;
            }

            const u = new User("Alice");
    
    + When to use:  Core business logic
                    Utility functions
                    When hoisting is useful
                    When you need `this` or `arguments`

- Expression function
    + Syntax: 
        const add = function (a, b) {
            return a + b;
        };
    + Key characteristics:
        `Hoisting`: NOT fully hoisted

            add(2, 3); //ReferenceError

            const add = function (a, b) {
                return a + b;
            };

            Only the variable (add) is hoisted, not the function body.

        `Can be anonymous or named`: Named expressions help with debugging & recursion

            const factorial = function fact(n) {
                if (n <= 1) return 1;
                return n * fact(n - 1);
            };
        
        `this` behavior: same as function declaration - depends on how it's called

            button.addEventListener("click", function () {
                console.log(this); //button element
            });
    + When to use:  Assigning fuctions to variables
                    Callbacks
                    Conditional function creation
                    Encapsulation //dong goi

- Arrow function
    + Syntax:
        const add = (a, b) => a + b;

    + Key characteristics
        `NO own this`: Arrow functions do not have their own `this`, they inherit this from the surrounding scrope

            const obj = {
                x: 10,
                show: () => {
                    console.log(this.x);
                }
            };

            obj.show(); //underfined

            //Correct usage
            const obj = {
                x: 10,
                show() {
                    setTimeout(() => {
                        console.log(this.x); //10
                    }, 1000);
                }
            };
        
        `NO arguments object`
            const test = () => {
                console.log(arguments); //ReferenceError
            };

            Use rest parameters instead: const tst = (...args) => args;
        
        `Cannot be used as constructor`
            const User = () => {};
            new User(); //TypeError
        
        `Short syntax`
    + When to use:  Array methods (map, filter, reduce)
                    Callbacks
                    Functional programming
                    When you want lexical `this`

6. `Polyfill`
    + A polyfill is code that adds missing modern JavaScript features to older environmnets (usually browsers)
    + Example:
        We have 
            const contacts = ['Brooke', 'Becca', 'Nathan', 'Adam', 'Michael']
            if (contacts.includes('Rachel')) {
                console.log('You have a Rachel!')
            }
        This works but when apply for older browser, we receive an error: `Uncaught TypeError: contacts.includes is not a function` because the older browser not support this methods. Therefore, we code another method instead (is called polyfill js)
            if (!Array.prototype.includes) {
                Array.prototype.includes = function includes(searchElement) {
                    return this.indexOf(searchElement) !== -1
                }
            }
    + When polyfills are used:  Supporting older browsers (IE, old Android)
                                Using modern syntax safely
    + Notes:    Polyfills modify prototypes -> global impact
                Use libraries like core-js, babel

7. `Object constructor`
    + To create an object type we use an object constructor function
    + It is considered good practice to name constructor functions with an upper-case first letter

        function Person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
        }

        //Use new Person() to create many new Person objects:
        const myFather = new Person("John", "Doe", 50, "blue");
        const myMother = new Person("Sally", "Rally", 48, "green");
        const mySister = new Person("Anna", "Rally", 18, "green");
        const mySelf = new Person("Johnny", "Rally", 22, "green");
    + A value given to a property will be a default value for all objects created by the constructor:

        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
            this.nationality = "English"; //defaultValue
        }
    
    + Adding a property to an object
        myFather.nationality = "English";
    + Adding a property to a constructor
        Person.prototype.nationality = "English"; //you must add it to the constructor function prototype
    + Constructor function methods
        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
            this.fullName = function() {
                return this.firstName + " " + this.lastName;
            };
        }
    + Adding a method to an object
        myMother.changeName = function (name) {
            this.lastName = name;
        }
    + Adding a method to a constructor
        You cannot add a new method to an object constructor function
        This code will produce a TypeError:
            Person.changeName = function (name) {
                this.lastName = name;
            }

            myMother.changeName("Doe"); // TypeError: myMother.changeName is not a function
        Adding a new method must be done to the constructor function prototype:
            Person.prototype.changeName = function (name) {
                this.lastName = name;
            }

            myMother.changeName("Doe");
    + Did you know?
        Use object literals `{}` instead of `new Object()`
        Use array literals `[]` instead of `new Array()`
        Use pattern literals `/()/` instead of `new RegExp()`
        Use function expressions `() {}` instead of `new Function()`

8. `Object prototype`
    + All JavaScript objects inherit properties and methods from a prototype:
        `Date` object inherit from `Date.prototype`
        `Array` objects inherit from `Array.prototype`
        `Person` objects inherit from `Person.prototype`
    + Using the `prototype` property to add new properties (or methods) to all existing objects
        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
        }

        Person.prototype.nationality = "English";
    The JavaScript `prototype` property also allows you to add new methods to objects constructors:
        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
        }

        Person.prototype.name = function() {
            return this.firstName + " " + this.lastName;
        };

9. `If/else statement`: Executes code baseed on conditions
    if (score >= 50) {
        pass();
    } else {
        fail();
    }
10. `Switch/case statement`: matches a value against multiple cases using strict equality (===)
    switch (role) {
        case "admin":
            accessAll();
            break;  //important
        case "user":
            accessLimited();
            break;
        default:
            deny();
    }
11. `Ternary operator` ( ? : )
    + The conditional operator is a shorthand for writing conditional `if...else` statements.
    + It is called a ternary operator because it takes three operands.
    + Syntax: (condition) ? expression1 : expression2
    
        const status = age >=18 ? "adult" : "minor";

12. `Nullish coalescing operator (??)` ||
    + Returns the right-hand value only if left is `null` or `undefined`
        const name = user.name ?? "Guest";
    + Best for: Default values
                API data
                Optional fields
13. `Nullish coalescing assignment (??=)`
    + Asigns value only if `variable` is `null` or `undefined`
        user.name ??= "Guest";

        //equivalent
        if (user.name == null) {
            user.name = "Guest";
        }
    + Best for: Initializing config values
                Safe defaults
14. `Optional chaining (?.)`
    + Safely acccesses nested properties
        user.profile?.address?.city;
    + Best for: API responses
                Deep object access
15. `Spread syntax (...) / Destructuring`
    + The spread syntax (...) in Javascript is used to expand an iterable (like an array or string) into its individual elements or key-value pairs in places where multiple arguments or elements are expected. It was introduced in ES6 (ECMAScript 2015) to make code cleaner and more concise.
    + Function arguments: It allows you to pass an array as a list of arguments to a function. 
    const numbers = [1, 2, 3];

    // Without spread: results in NaN because max() expects individual arguments
    // console.log(Math.max(numbers));

    // With spread: expands the array into Math.max(1, 2, 3)
    console.log(Math.max(...numbers)); // Output: 3
    + Array literals: It is used to create new arrays by combining existing arrays or inserting elements, making a shallow copy of the original array.
        const fruits = ['apple', 'lemon'];
        const moreFruits = ['banana', ...fruits, 'watermelon'];

        console.log(moreFruits); 
        // Output: ["banana", "apple", "lemon", "watermelon"]

        // Copying an array
        const fruitsCopy = [...fruits];
        fruitsCopy.push('strawberry'); // Modifying the copy does not affect the original
        console.log(fruits); // Output: ["apple", "lemon"]
    + Object literals: It allows you to copy properties from one object into another, or merge multiple objects, creating a new object with key-value pairs from the original(s). Note that it performs a shallow copy. 
        const objectOne = { hello: 'Anna', type: 'greeting' };
        const objectTwo = { world: 'Peter', type: 'animal' };

        // Merging objects (later properties overwrite earlier ones if keys overlap)
        const combinedObject = { ...objectOne, ...objectTwo, newProp: 'Star' };

        console.log(combinedObject);
        // Output: { hello: "Anna", type: "animal", world: "Peter", newProp: "Star" }
    + Destructuring
        const { name, age } = user;
        const [first, second] = arr;

16. `Strict equality (===)`: equal value and equal type
17. `Strict inequality (!==)`: not equal value or not equal type
18. `Bitwise AND ( & ), OR ( | ), XOR ( ^ ), NOT ( ~ )`
    + AND ( & ): It is a binary operator i.e accepts two operands. Bit-wise AND (&) returns 1 if both the bits are set (i.e 1) and 0 in any other case.
        A       B       OUTPUT ( A & B )
        0       0       0
        0       1       0
        1       0       0
        1       1       1
    + OR ( | ): It is a binary operator i.e. accepts two operands. Bit-wise OR ( | ) returns 1 if any of the operands is set (i.e. 1) and 0 in any other case.
        A       B       OUTPUT ( A | B )
        0       0       0
        0       1       1
        1       0       1
        1       1       1
    + XOR ( ^ ): It is a binary operator i.e. accepts two operands. Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.
        A       B       OUTPUT ( A ^ B )
        0       0       0
        0       1       1
        1       0       1
        1       1       0
    + NOT ( ~ ): It is a unary operator i.e. accepts single operands. Bit-wise NOT ( ~ ) flips the bits i.e 0 becomes 1 and 1 becomes 0.
        A       OUTPUT ( ~A )
        0       1
        1       0

19. `Logical AND ( && ), NOT ( ! ), OR ( || )`
    + AND ( && ): evaluates operands and return true only if all are true.
    + NOT ( ! ): converts operator to boolean and returns flipped value.
    + OR ( || ): Returns true even if one of the multiple operands is true.

20. **Loops**:

- `For`
    + Syntax:
        for (initialization; condition; step) {
            //code
        }
    + How it works: 
        1. Run initialization once
        2. Check condition
        3. Execute the block
        4. Run step
        5. Repeat
    + Example:  for (let i = 0; i < 3; i++) {
                    console.log(i);
                }
                // 0 1 2
- `For in`: iterates over keys
    const user = { name: "A", age: 20 };

    for (const key in user) {
        console.log(key, user[key]);
    }

    //Not recommended for arrays
        for (const i in [10, 20, 30]) {
            console.log(i); // "0", "1", "2"
        }
- `For of`: iterates over values
    const arr = [10, 20, 30];

    for (const value of arr) {
        console.log(value);
    }

    + Works with: array, string, map/set
        for (const char of "hello") {
            console.log(char);
        }
- `While - Do While`
    + While
        let i = 0;
        while (i < 3) {
        console.log(i);
        i++;
        }
    + do...while: runs at least once
        let i = 5;
        do {
        console.log(i);
        } while (i < 3);
- `Break - Continue`
    + break: stops the loop completely
        for (let i = 0; i < 5; i++) {
            if (i === 3) break;
        }
    + continue: skips the current iteration
        for (let i = 0; i < 5; i++) {
            if (i === 2) continue;
            console.log(i);
        }
        // 0 1 3 4
- `Nested loop`: loop inside another loop
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 2; j++) {
            console.log(i, j);
        }
    }
21. `Callback`: is a function passed as an argument to another function.
    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }

    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer); //not to use parenthesis myDisplayer()

22. `HTML DOM`: DOM (Document Object Model)
    + HTML is represented as a tree of objects
    + Why the DOM matters:
        Dynamic UI
        Modify HTML/CSS with JavaScript
        User interaction
23. `Event listeners`
    + A user action:    Click
                        Onchange
                        Submit
                        Keydown

//Object mapper
const status = {
    "active" : 1
}