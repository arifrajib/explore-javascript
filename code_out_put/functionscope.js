var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
})();

/**
Output will be:
Original salary was undefined
My New Salary 5000$
*/



var annonomious = function (){
	console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
}

annonomious();

/**
Output will be:
Original salary was undefined
My New Salary 5000$
*/


function salaryFunction(){
	console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
}

salaryFunction();

/**
Output will be:
Original salary was undefined
My New Salary 5000$
*/


var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);
})();

/**
Output will be:
Original salary was 5000$
*/
