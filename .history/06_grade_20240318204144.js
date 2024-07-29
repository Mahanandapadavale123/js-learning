


var marks = 93;
if (marks >= 90) {
  console.log(`Funtastic marks:${marks} your Grade is: A+`);
} else if (marks >= 75 && marks <= 90) {
  console.log(`Excellent marks ${marks} Your grade is:A`);
}

if (marks >= 50 && marks <= 75) {
  console.log(`Good marks ${marks} , Your Grade is:B`);
} else if (marks >= 35 && marks <= 50) {
  console.log(`Marks is${marks} Your Grade is :C,Need improvement`);
} else if (marks >= 0 && marks > 100) {
  console.log(`please proved the the valid marks`);
}


function gradeCalculation(marks){
    if (marks==null || marks>=0 || marks >100 || isNaN(+marks)) {
        console.log("Invalid Number");
    } else{
        console.log(`Valid input`);
    } 
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);

gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(48);
gradeCalculation("90");
gradeCalculation("eighty");
gradeCalculation(undefined);
gradeCalculation(null);




