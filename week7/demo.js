function Exam(questionsCorrect, totalQuestions) {
    this.questionsCorrect = questionsCorrect;
    this.totalQuestions = totalQuestions;
}

var examList = [];
var questionsCorrect = [15, 25, 18, 20, 12, 6, 18, 21, 9];
var totalQuestions = 25;

// creating the exam objects in the array
for (var i = 0; i < questionsCorrect.length; i++) {
    examList.push(new Exam(questionsCorrect[i], totalQuestions));
}

// adding a new property, grade, to every exam object in the array
for (var i = 0; i < examList.length; i++) {
    var currentExam = examList[i];
    currentExam.grade = examList[i].questionsCorrect / totalQuestions * 100;
    examList[i] = currentExam;
}

// calculating the class average
var average = 0;
for (var i = 0; i < examList.length; i++) {
    average += examList[i].grade;
}
average /= examList.length;

console.log(average);