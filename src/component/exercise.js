function palindrome(number){
    let arr=[]; 
    for(let i=0; i<= number; i++){        
        for(let j=0; j<= number; j++){
            let res=i*j         
            let reverse=Number(res.toString().split('').reverse().join(''))
            if((reverse >= 10) && (res == reverse)){
                arr.push(res)
            } 
            
          }      
         }
         return (Math.max(...arr))
    }

 console.log(palindrome(999))


// Resuelto--- Retornar el numero palindromo maximo de la multiplicacion de dos numeros de tres digitos

/*
Problem Statement
You are given the ints perimeter and area. Your task is to find a triangle with the following properties:

The coordinates of each vertex are integers between 0 and 3000, inclusive.
The perimeter of the triangle must be exactly perimeter, and its area must be exactly area.

f there are multiple solutions, you may choose any of them. Return a int[] with six elements: {x1, y1, x2, y2, x3, y3}, where (x1, y1), (x2, y2), and (x3, y3) are the coordinates of the vertices of your triangle. If there is no solution, return an empty int[] instead.

Definition
Class: FindThePerfectTriangle
Method: constructTriangle
Parameters: int, int
Returns: int[]
Method signature: int[] constructTriangle(int area, int perimeter)
(be sure your method is public)

Constraints
area will be between 1 and 1,000,000, inclusive.
perimeter will be between 1 and 1000, inclusive.
Examples
0)
6
11
Returns: { }
There are no valid triangles with area 6 and perimeter 11.
1)

6
12
Returns: {1, 1, 1, 4, 5, 4 }
The example output describes a right triangle with vertices at (1, 1), (1, 4) and (5, 4). Its sides have lengths 3, 4, and 5, hence its perimeter is 12. The area of the triangle is (3*4)/2 = 6.

2)
37128
882
Returns: {137, 137, 273, 410, 1, 410 }
3)
12
18
Returns: {1, 1, 4, 5, 1, 9 }
In this test case our solution constructed an isosceles triangle with vertices at (1, 1), (4, 5) and (1, 9).
4)
18096
928
Returns: {1, 1, 1, 88, 417, 88 }
5)
1000000
1000
Returns: { }

*/



function factorial(num){
    if(num ===0){
        return 1;
    }else{
        return num* factorial(num - 1)
    }
}

console.log(factorial(4))



function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log(fibonacci(10))

  function sum(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  }

  console.log(sum(4))

  const numbers=[1,2,3]
  numbers[10]=11
  console.log(numbers)