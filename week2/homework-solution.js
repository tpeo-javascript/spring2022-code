/*
Question 1: Write a function named sumOfSquareAreas that takes two parameters: a and b, which each represent the side lengths of two different squares. 
Return the value of the sum of the areas of these squares (for example, if a = 9 and b = 3, then we want to return 90). 
Then, call this function 3 times with different values for a and b and output the results to the terminal by running your code.
*/

function sumOfSquareAreas(a, b) {
    var sum = a * a + b * b;
    return sum;
}

var firstSquares = sumOfSquareAreas(2, 4);
console.log(firstSquares);
var secondSquares = sumOfSquareAreas(3, 6);
console.log(secondSquares);

// Note: We can skip saving the value a function returns into a variable and pass the function call directly into console.log()!
console.log(sumOfSquareAreas(9, 18));

/*
Question 2: Write a function named gradeCalculator that takes three parameters: homeworkAvg, quizAvg, and examAvg, which each represent your 
average for a class on homework, quizzes, and exams, respectively. 
Return the value of your overall grade in the class if homework is weighted at 10%, quizzes are 15%, and exams are 75%. 
Then, call this function 3 times with different values for homeworkAvg, quizAvg, and examAvg and output the results to the terminal by running your code.
*/

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var finalAvg = 0.1 * homeworkAvg + 0.15 * quizAvg + 0.75 * examAvg;
    return finalAvg;
}

var studentGrade = gradeCalculator(100, 100, 100);
console.log(studentGrade);
console.log(gradeCalculator(90, 75, 80));
console.log(gradeCalculator(50, 100, 100));
