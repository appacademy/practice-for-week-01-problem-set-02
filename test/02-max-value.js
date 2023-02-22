const { expect } = require('chai');

const maxValue = require('../problems/02-max-value');

describe('maxValue()', function () {
	it('return the max value in an array of positive integers', function () {
		const inputArrOne = [2, 3, 10, 301];
		const inputArrTwo = [2000, 11, 17, 15, 21];
		const outputOne = 301;
		const outputTwo = 2000;

		expect(maxValue(inputArrOne)).to.equal(outputOne);
		expect(maxValue(inputArrTwo)).to.equal(outputTwo);
	});

	it('return the max value in an array of negative integers', function () {
		const inputArrOne = [-2, -3, -10, -301];
		const inputArrTwo = [-2000, -11, -17, -15, -21];
		const outputOne = -2;
		const outputTwo = -11;

		expect(maxValue(inputArrOne)).to.equal(outputOne);
		expect(maxValue(inputArrTwo)).to.equal(outputTwo);
	});

	it('returns null if the array is empty', function () {
		const inputArr = [];

		expect(maxValue(inputArr)).to.equal(null);
	});
});
