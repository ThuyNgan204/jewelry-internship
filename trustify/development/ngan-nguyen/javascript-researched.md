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
    + Dynamic size: Arrays can grow or shrink as elements are added o removed.
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
- Expression function
- Arrow function

6. `Polyfill`
7. `Object constructor`
8. `Object prototype`
9. `If/else statement`
10. `Switch/case statement`
11. `Ternary operator`
12. `Nullish coalescing operator (??)`
13. `Nullish coalescing assignment (??=)`
14. `Optional chaining (?.)`
15. `Spread syntax (...) / Destructuring`
16. `Strict equality (===)`
17. `Strict inequality (!==)`
18. `Bitwise AND, OR, XOR, NOT`
19. `Logical AND, NOT, OR`

20. **Loops**:

- `For`
- `For in`
- `For of`
- `While - Do While`
- `Break - Continue`
- `Nested loop`

21. `Callback`
22. `HTML DOM`
23. `Event listeners`
