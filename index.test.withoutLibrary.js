const { forEach, map } = require("./index");

const test = (desc, fn) => {
	console.log("----", desc);
	try {
		fn();
	} catch (err) {
		console.log(err.message);
	}
};

test("The foreach function", () => {
	let sum = 0;
	forEach([1, 2, 3], (value) => (sum += value));
	console.log(sum);

	if (sum !== 6) {
		throw new Error("Expected summing array to equal 6");
	}
});

test("The map function", () => {
	//run code
	const result = map([1, 2, 3], (num) => num * 2);

	if (result[0] !== 2) {
		throw new Error(`expected to find 2, but found ${result[0]}`);
	}
	if (result[1] !== 4) {
		throw new Error(`expected to find 4, but found ${result[1]}`);
	}
	if (result[2] !== 6) {
		throw new Error(`expected to find 6, but found ${result[2]}`);
	}
});
