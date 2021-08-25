const readline = require("readline");

var score=0;
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to soumya's quiz on FRIENDS");

/**
 * list of something is an array
 */

const queBank = [
	{
		question: `
	What is soumya's favourite Ice cream?
	a: strawberry
	b: butterscoach
	c: chocolate \n`,
		answer: "b"
	},
	{
		question: `
	What is soumya's favourite food?
	a: pulav
	b: Bisibelebath
  c: curd rice\n`,
		answer: "a"
	},
	{
		question: `
	What is soumya's favourite colour?
	a: White
	b: Blue
	c: Black
	d: Red\n`,
		answer: "c"
	},
	{
		question: `
	Who is soumya's favourite hero ?
	a: Yash
	b: Sudeep
	c: Virat\n`,
		answer: "a"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
      score = score+1;
       
			questionIndex++;
			serve();
      
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
		}
    {
      console.log("current score: ", score);
      console.log("-------------")
    }
	});
 }

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();
