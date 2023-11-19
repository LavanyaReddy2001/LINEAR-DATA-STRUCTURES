// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs(arr,target){
    let pairs=[];
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let currentSum=arr[left]+arr[right];
        if(currentSum===target){
            pairs.push([arr[left],arr[right]]);
            left++;
            right--;
        }
        else if(currentSum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return pairs;
}
let nums=[2,4,5,7,8,9];
let targetSum=9;
let result=findPairs(nums,targetSum);
console.log(result);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// Iterative Javascript program to reverse an array 

/* Function to reverse arr[] from start to end*/
function rvereseArray(arr,start,end) 
{ 
	while (start < end) 
	{ 
		var temp = arr[start]; 
		arr[start] = arr[end]; 
		arr[end] = temp; 
		start++; 
		end--; 
	} 
}	 

/* Utility function to print an array */
function printArray(arr,size) 
{ 
for (var i = 0; i < size; i++){ 
console.log(arr[i]); 
} 
} 

/* Driver function to test above functions */
	var arr= [1, 2, 3, 4, 5, 6]; 
	var n = 6; 
	// To print original array 
	printArray(arr, n); 
	
	// Function calling 
	rvereseArray(arr, 0, n-1); 
	
	console.log("Reversed array is"); 
	
	// To print the Reversed array 
	printArray(arr, n);

// Q3. Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
    // Check if the lengths of both strings are the same
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;
  
    // Check if str2 is a substring of the concatenated string
    return concatenatedStr.includes(str2);
  }
  
  // Example usage:
  const string1 = "rotation";
  const string2 = "tionrota";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }

//   Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedCharacter(str) {
    // Create an empty object to store character counts
    const charCount = {};
  
    // Iterate through the string to count the occurrences of each character
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Iterate through the string to find the first non-repeated character
    for (const char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // Return null if no non-repeated character is found
    return null;
  }
  
  // Example usage:
  const inputString = "programming";
  
  const results = firstNonRepeatedCharacter(inputString);
  
  if (result !== null) {
    console.log(`The first non-repeated character is: ${result}`);
  } else {
    console.log("All characters are repeated in the given string.");
  }
  
  
  
//   Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
  }
  
  // Example usage:
  const numberOfDisks = 3;
  const sourcePeg = 'A';
  const auxiliaryPeg = 'B';
  const destinationPeg = 'C';
  
  towerOfHanoi(numberOfDisks, sourcePeg, auxiliaryPeg, destinationPeg);

//   Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(char) {
    // Check if the character is an operator
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
  
    // Iterate through the expression in reverse order
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const char = prefixExpression[i];
  
      if (isOperator(char)) {
        // If the character is an operator, pop two operands from the stack
        const operand1 = stack.pop();
        const operand2 = stack.pop();
  
        // Concatenate the operands and the operator within parentheses
        const infixExpression = `(${operand1}${char}${operand2})`;
        stack.push(infixExpression);
      } else {
        // If the character is an operand, push it to the stack
        stack.push(char);
      }
    }
  
    // The final item in the stack is the infix expression
    return stack.pop();
  }
  
  // Example usage:
  const prefixExpression = "+*23*45";
  
  const infixExpression = prefixToInfix(prefixExpression);
  console.log(`Prefix Expression: ${prefixExpression}`);
  console.log(`Infix Expression: ${infixExpression}`);

// Q7. Write a program to convert prefix expression to infix expression.


  
function areBracketsClosed(codeSnippet) {
    const stack = [];
  
    // Define a mapping of open and close brackets
    const bracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    // Iterate through each character in the code snippet
    for (const char of codeSnippet) {
      if (bracketMap.hasOwnProperty(char)) {
        // If it's an open bracket, push it onto the stack
        stack.push(char);
      } else if (Object.values(bracketMap).includes(char)) {
        // If it's a closing bracket, pop the last open bracket from the stack
        const lastOpenBracket = stack.pop();
  
        // Check if the corresponding open bracket matches the last open bracket
        if (bracketMap[lastOpenBracket] !== char) {
          return false; // Brackets are not closed properly
        }
      }
    }
  
    // If the stack is empty, all brackets are closed
    return stack.length === 0;
  }
  
  // Example usage:
  const codeSnippet1 = "if (x > 0) { console.log('Positive'); }";
  const codeSnippet2 = "function myFunction() { return [1, 2, 3]; }";
  
  console.log(areBracketsClosed(codeSnippet1)); // Output: true
  console.log(areBracketsClosed(codeSnippet2)); // Output: true

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function reverseStack(inputStack) {
    const auxiliaryStack = [];
  
    // Pop all elements from the input stack and push them onto the auxiliary stack
    while (inputStack.length > 0) {
      auxiliaryStack.push(inputStack.pop());
    }
  
    // Pop all elements from the auxiliary stack and push them back onto the input stack
    while (auxiliaryStack.length > 0) {
      inputStack.push(auxiliaryStack.pop());
    }
  
    return inputStack;
  }
  
  // Example usage:
  const originalStack = [1, 2, 3, 4, 5];
  console.log("Original Stack:", originalStack);
  
  const reversedStack = reverseStack([...originalStack]); // Create a copy to avoid modifying the original stack
  console.log("Reversed Stack:", reversedStack);

// Q9. Write a program to reverse a stack.

//Name :- Pratik Dewaji Gahane
//RollNo :- 2011045
//Write a program to reverse a string using stack
//Code Starts here
class Stack {
    constructor() {
        this.top = null
    }
    push(ele) {
        var node = new newNode(ele)
        node.next = this.top
        this.top = node
    }
    pop() {
        var temp = this.top
        var char = temp.data
        this.top = this.top.next
        temp = null
        return char
    }
    reverseString(str) {
        var i = 0
        var reversestr = ""
        while (i != str.length) {
            this.push(str.charAt(i))
            i++
        }
        var temp = this.top
        while (temp != null) {
            var char
            char = this.pop()
            reversestr += char
            temp = this.top
        }
        return reversestr
    }
    display() {
        var temp = this.top
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
class newNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

const stack = new Stack()
const string = "pratik"
const reverse = stack.reverseString(string)
console.log(`The String provided - ${string}\nString in reverse format -${reverse}`)
//Code ends here
//OUTPUT :- 
//The String provided - pratik
//String in reverse format -kitarp

  

  
// Q10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      // Stack to store elements
      this.stack = [];
      // Stack to store the minimum element at each level
      this.minStack = [];
    }
  
    push(value) {
      // Push the value onto the main stack
      this.stack.push(value);
  
      // If the minStack is empty or the new value is smaller than the current minimum,
      // push the new value onto the minStack; otherwise, push the current minimum again.
      if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }
  
    pop() {
      // Pop the top element from both stacks
      this.stack.pop();
      this.minStack.pop();
    }
  
    getMin() {
      // Return the current minimum from the minStack
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const minStack = new MinStack();
  
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(8);
  minStack.push(1);
  
  console.log("Current Minimum:", minStack.getMin()); // Output: 1
  
  minStack.pop();
  console.log("Current Minimum:", minStack.getMin()); // Output: 2




  




  




