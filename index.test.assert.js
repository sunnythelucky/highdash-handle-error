const { forEach, map } = require("./index");
const assert = require("assert");

const test = (desc, fn) => {
	console.log("----", desc);
	try {
		fn();
	} catch (err) {
		console.log(err.message);
	}
};

test("The forEach function", () => {
	let sum = 0;
	forEach([2, 3, 4], (value) => {
		sum += value;
	});
	assert.strictEqual(sum, 9, "Expected forEach to sum the array");
});

test("The map function", () => {
	const result = map([1, 2, 3], (value) => {
		return value * 2;
	});

	assert.deepStrictEqual(result, [2, 4, 6]);

	// assert.strictEqual(result[0], 2);
	// assert.strictEqual(result[1], 4);
	// assert.strictEqual(result[2], 6);
});
